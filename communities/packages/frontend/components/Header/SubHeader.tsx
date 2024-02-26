import { useState, forwardRef, ForwardRefRenderFunction, useRef, RefObject, useEffect } from 'react';
import Router from 'next/router';
import { useSelector, useDispatch } from 'react-redux';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import { updateNotificationSeen } from '../../pages/communities/notifications';
import {
  Root,
  Wrapper,
  Hamburger,
  Container,
  SearchContainer,
  NotificationsAndAvatar,
  NotificationsCount,
  Logo,
  CommunitiesHeaderRoot,
} from './style';

import { HomeIcon, MenuIcon, NotificationIcon } from '../ui/icons';
import { Link, Button, Avatar, Spacing } from '../ui';
import { openAuthPopup, cleanUserNotifications, PopupType } from '../../store/auth';
import HeaderUser from './HeaderUser';
import HeaderNotifications from './HeaderNotifications';
import Search from '../Search';
import { RootState } from '../../store';
import { useBreakpoints } from '../../utils';
import NavTab from '../NavTab';
import CommunitiesIcon from '../ui/icons/CommunitiesIcon';
import AskAProfIcon from '../ui/icons/AskAProfIcon';
import OnlineCoursesIcon from '../ui/icons/OnlineCoursesIcon';
import LivingLibraryIcon from '../ui/icons/LivingLibraryIcon';
import EventsIcon from '../ui/icons/EventsIcon';
import FundingAreaIcon from '../ui/icons/FundingAreIcon';

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
          <img alt="logo" style={{ height: 30 }} src={logo} />
        </Link>
      </Logo>
      <Container>
        <Hamburger ref={ref} onClick={toggleSidebar}>
          <MenuIcon />
        </Hamburger>

        <Spacing left="xl" />
        <NavTab icon={<HomeIcon width="32" />} link="/" />
        <Spacing right="xl" />
        <NavTab icon={<CommunitiesIcon width="32" />} link="/" />
        <Spacing right="xl" />
        <NavTab icon={<AskAProfIcon width="32" />} link="/" />
        <Spacing right="xl" />
        <NavTab icon={<OnlineCoursesIcon width="48" />} link="/" />
        <Spacing right="xl" />
        <NavTab icon={<LivingLibraryIcon width="32" />} link="/" />
        <Spacing right="xl" />
        <NavTab icon={<EventsIcon width="32" />} link="/" />
        <Spacing right="xl" />
        <NavTab icon={<FundingAreaIcon width="32" />} link="/" />
      </Container>

      <Spacing right="sm" />

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
