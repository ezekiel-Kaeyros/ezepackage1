import { useState, forwardRef, ForwardRefRenderFunction, useRef, RefObject, useEffect } from 'react';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { updateNotificationSeen } from '../../pages/communities/notifications';
import {
  Hamburger,
  Container,
  NotificationsAndAvatar,
  NotificationsCount,
  Logo,
  ItemMenu,
  CommunitiesHeaderRoot,
  BlockLogoBurger,
} from './style';

import { HomeIcon, MenuIcon, NotificationIcon } from '../ui/icons';
import { Link, Button, Avatar, Spacing } from '../ui';
import { openAuthPopup, cleanUserNotifications, PopupType } from '../../store/auth';
import HeaderUser from './HeaderUser';
import HeaderNotifications from './HeaderNotifications';
import { RootState } from '../../store';
import { useBreakpoints } from '../../utils';
import NavTab from '../NavTab';
import CommunitiesIcon from '../ui/icons/CommunitiesIcon';
import OnlineCoursesIcon from '../ui/icons/OnlineCoursesIcon';
import LivingLibraryIcon from '../ui/icons/LivingLibraryIcon';
import EventsIcon from '../ui/icons/EventsIcon';
import FundingAreaIcon from '../ui/icons/FundingAreIcon';
import { useDispatchAuth } from '../../utils/useDispatchAuth';

interface SubHeaderProps {
  toggleSidebar?: () => void;
  ref: RefObject<HTMLButtonElement>;
}

const SubHeader: ForwardRefRenderFunction<HTMLButtonElement, SubHeaderProps> = ({ toggleSidebar }, ref) => {
  const breakpoint = useBreakpoints();
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state.auth.user);
  const logo = useSelector((state: RootState) => state.settings.communityLogo);
  const { mutateAsync: updateSeen } = useMutation(updateNotificationSeen);
  const router = useRouter();
  const authUserRef = useRef(null);
  const notificationsRef = useRef(null);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isNotificationsDropdownOpen, setIsNotificationsDropdownOpen] = useState(false);

  useEffect(() => {
    Router.events.on('routeChangeComplete', () => {
      if (isUserDropdownOpen) {
        setIsUserDropdownOpen(false);
      }

      if (isNotificationsDropdownOpen) {
        setIsNotificationsDropdownOpen(false);
      }
    });
  }, [isUserDropdownOpen, isNotificationsDropdownOpen]);

  const closeDropDown = () => {
    setIsUserDropdownOpen(false);
    setIsNotificationsDropdownOpen(false);

    if (isNotificationsDropdownOpen && authUser && authUser.notifications.length > 0) {
      dispatch(cleanUserNotifications());
      updateSeen();
    }
  };

  useDispatchAuth();

  const onNotificationIconClick = () => {
    if (!isNotificationsDropdownOpen) {
      setIsNotificationsDropdownOpen(true);
    } else {
      closeDropDown();
    }
  };

  const isSmallScreen = breakpoint === 'xs' || breakpoint === 'sm';

  return (
    <CommunitiesHeaderRoot>
      <Logo>
        <Link href="/" disableBorderOnHover>
          <img alt="logo" style={{ height: 35 }} src={logo} />
        </Link>
      </Logo>
      <Container>
        <BlockLogoBurger>
          <Hamburger ref={ref} onClick={toggleSidebar}>
            <MenuIcon />
          </Hamburger>
        </BlockLogoBurger>
        <ItemMenu>
          <NavTab
            icon={<HomeIcon isActive={router.pathname === '/'} width="32" />}
            link="/"
            isActive={router.pathname === '/'}
          />
        </ItemMenu>

        <ItemMenu>
          <NavTab
            icon={<CommunitiesIcon isActive={router.pathname.includes('/communities')} width="32" />}
            link="/communities"
            isActive={router.pathname.includes('/communities')}
          />
        </ItemMenu>
        {/* <ItemMenu>
          <NavTab
            icon={<AskAProfIcon isActive={router.pathname.includes('/profile')} width="32" />}
            link="/profile"
            isActive={router.pathname.includes('/profile')}
          />
        </ItemMenu> */}
        <ItemMenu>
          <NavTab
            icon={<OnlineCoursesIcon />}
            link="/online-courses"
            isActive={router.pathname === '/online-courses'}
          />
        </ItemMenu>
        <ItemMenu>
          <NavTab
            icon={<LivingLibraryIcon width="32" />}
            link="/living-library"
            isActive={router.pathname === '/living-library'}
          />
        </ItemMenu>
        <ItemMenu>
          <NavTab icon={<EventsIcon width="32" />} link="/events" isActive={router.pathname === '/events'} />
        </ItemMenu>
        <ItemMenu>
          <NavTab
            icon={<FundingAreaIcon width="32" />}
            link="/funding-area"
            isActive={router.pathname === '/funding-area'}
          />
        </ItemMenu>
      </Container>

      <NotificationsAndAvatar>
        {authUser && (
          <div ref={notificationsRef}>
            <Spacing right="sm">
              <Button ghost onClick={onNotificationIconClick}>
                {authUser?.notifications.length > 0 && (
                  <NotificationsCount>{authUser?.notifications.length}</NotificationsCount>
                )}
                <NotificationIcon />
              </Button>
            </Spacing>

            {isNotificationsDropdownOpen && (
              <HeaderNotifications
                isNotificationsDropdownOpen={isNotificationsDropdownOpen}
                notificationsRef={notificationsRef}
                closeDropDown={closeDropDown}
              />
            )}
          </div>
        )}

        <div ref={authUserRef}>
          {authUser ? (
            <Button ghost onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}>
              <Avatar image={authUser.image} />
            </Button>
          ) : (
            <Button
              ghost={isSmallScreen}
              size="sm"
              color="primary"
              onClick={() => dispatch(openAuthPopup(PopupType.Log_In))}
            >
              {isSmallScreen ? <Avatar /> : 'Log in'}
            </Button>
          )}
          {isUserDropdownOpen && (
            <HeaderUser
              isUserDropdownOpen={isUserDropdownOpen}
              authUserRef={authUserRef}
              closeDropDown={closeDropDown}
            />
          )}
        </div>
      </NotificationsAndAvatar>
    </CommunitiesHeaderRoot>
  );
};

export default forwardRef(SubHeader);
