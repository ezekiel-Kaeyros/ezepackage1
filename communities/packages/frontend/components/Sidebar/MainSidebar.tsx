import { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react';
import { List, arrayMove } from 'react-movable';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from 'react-query';
import { UserRole } from '../../constants';
import { ButtonLink, Divider, Modal, Spacing } from '../ui';
import { HouseColorfulIcon, MessageColorfulIcon, DragIcon, HomeIcon } from '../ui/icons';
import { Root, UL, LI, ChannelName, DragButton } from './style';
import ChannelPopover from './ChannelPopover';
import { useRouter } from 'next/router';
import { RootState } from '../../store';
import axios from 'axios';
import ChannelCreate from '../Channel/ChannelCreate';
import CommunitiesIcon from '../ui/icons/CommunitiesIcon';
import AskAProfIcon from '../ui/icons/AskAProfIcon';
import LivingLibraryIcon from '../ui/icons/LivingLibraryIcon';
import OnlineCoursesIcon from '../ui/icons/OnlineCoursesIcon';
import EventsIcon from '../ui/icons/EventsIcon';
import FundingAreaIcon from '../ui/icons/FundingAreIcon';

interface SidebarProps {
  isOpen: boolean;
}

const fetchChannels = async () => {
  const { data } = await axios.get('/channels');

  console.log('list of channels and its data', data);
  return data;
};

const reorderChannels = async ({ sortedChannels }) => {
  const response = await axios.post('/channels/reorder', { sortedChannels });
  return response;
};

const MainSidebar: ForwardRefRenderFunction<HTMLDivElement, SidebarProps> = ({ isOpen }, ref) => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const [modal, setModal] = useState(false);
  const closeModal = () => setModal(false);
  const router = useRouter();

  const { data: channels } = useQuery('channels', fetchChannels);
  const [channelItems, setChannelItems] = useState([]);
  const { mutateAsync: reorderChannelsMutation } = useMutation(reorderChannels);
  const isAdmin = (authUser && authUser.role === UserRole.Admin) || (authUser && authUser.role === UserRole.SuperAdmin);

  useEffect(() => {
    if (channels) {
      setChannelItems(channels);
    }
  }, [channels]);

  useEffect(() => {
    if (channelItems.length > 0 && isAdmin) {
      reorderChannelsMutation({ sortedChannels: channelItems });
    }
  }, [channelItems, reorderChannelsMutation, isAdmin]);

  return (
    <Root ref={ref} isOpen={isOpen}>
      <Modal title="Create Channel" isOpen={modal} close={closeModal}>
        <ChannelCreate closeModal={closeModal} channels={channelItems} />
      </Modal>

      <UL>
        <LI>
          <ButtonLink fullWidth radius="none" href="/" color="text" active={router.pathname === '/'} size="sm">
            <HomeIcon isActive={router.pathname === '/'} width="32" color={router.pathname === '/' ? 'link' : 'text'} />
            {'\u00A0'}
            {'\u00A0'} Home
          </ButtonLink>
        </LI>

        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/communities"
            color="text"
            active={router.pathname === '/communities'}
            size="sm"
          >
            <CommunitiesIcon
              isActive={router.pathname.includes('/communities')}
              width="32"
              color={router.pathname === '/communities' ? 'link' : 'text'}
            />
            {'\u00A0'}
            {'\u00A0'} Communities
          </ButtonLink>
        </LI>
        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/ask-a-prof"
            color="text"
            active={router.pathname === '/ask-a-prof'}
            size="sm"
          >
            <AskAProfIcon width="32" color={router.pathname === '/messages' ? 'link' : 'text'} />
            {'\u00A0'}
            {'\u00A0'} Ask a Prof
          </ButtonLink>
        </LI>

        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="https://kashapp.biz/auth/mo_saml/index.php"
            color="text"
            active={router.pathname === '/online-courses'}
            size="sm"
          >
            <OnlineCoursesIcon width="32" color={router.pathname === '/messages' ? 'link' : 'text'} />
            {'\u00A0'}
            {'\u00A0'} Online Courses
          </ButtonLink>
        </LI>
        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="https://library.eze.ink/"
            color="text"
            active={router.pathname === '/living-library'}
            size="sm"
          >
            <LivingLibraryIcon width="32" color={router.pathname === '/messages' ? 'link' : 'text'} />
            {'\u00A0'}
            {'\u00A0'} Living Library
          </ButtonLink>
        </LI>
        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/events"
            color="text"
            active={router.pathname === '/events'}
            size="sm"
          >
            <EventsIcon width="32" color={router.pathname === '/messages' ? 'link' : 'text'} />
            {'\u00A0'}
            {'\u00A0'} Events
          </ButtonLink>
        </LI>
        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/funding-area"
            color="text"
            active={router.pathname === '/funding-area'}
            size="sm"
          >
            <FundingAreaIcon width="32" color={router.pathname === '/messages' ? 'link' : 'text'} />
            {'\u00A0'}
            {'\u00A0'} Funding Area
          </ButtonLink>
        </LI>

        <LI noHover>
          <Spacing top="sm" left="xs" />
          <Divider />
        </LI>
      </UL>

      {channelItems?.length > 0 && (
        <List
          lockVertically
          values={channelItems}
          onChange={({ oldIndex, newIndex }) => {
            setChannelItems(arrayMove(channelItems, oldIndex, newIndex));
          }}
          renderList={({ children, props }) => <UL {...props}>{children}</UL>}
          renderItem={({ value, props }) => {
            return (
              <LI {...props}>
                <ButtonLink
                  fullWidth
                  radius="none"
                  href={`/communities/channel/${value.name}`}
                  color="text"
                  active={value.name === router.query.name}
                  size="sm"
                >
                  <ChannelName>{value.name}</ChannelName>
                </ButtonLink>

                {isAdmin && (
                  <Spacing right="xxs">
                    <DragButton ghost data-movable-handle tabIndex={-1}>
                      <DragIcon />
                    </DragButton>
                  </Spacing>
                )}

                {isAdmin && <ChannelPopover channel={value} />}
              </LI>
            );
          }}
        />
      )}

      {/* {isAdmin && (
        <Button size="xs" onClick={() => setModal(true)} textColor="text">
          <PlusIcon />
          {'\u00A0'}
          {'\u00A0'}
          Create Channel
        </Button>
      )} */}
    </Root>
  );
};

export default forwardRef(MainSidebar);
