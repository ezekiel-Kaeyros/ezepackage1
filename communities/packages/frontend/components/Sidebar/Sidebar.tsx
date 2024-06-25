import { forwardRef, ForwardRefRenderFunction, useEffect, useState } from 'react';
import { List, arrayMove } from 'react-movable';
import { useSelector } from 'react-redux';
import { useMutation, useQuery } from 'react-query';
import { UserRole } from '../../constants';
import { Button, ButtonLink, Divider, Modal, Spacing } from '../ui';
import { PlusIcon, DragIcon, NotificationIcon } from '../ui/icons';
import { Root, UL, LI, ChannelName, DragButton } from './style';
import ChannelPopover from './ChannelPopover';
import { useRouter } from 'next/router';
import { RootState } from '../../store';
import axios from 'axios';
import ChannelCreate from '../Channel/ChannelCreate';
import CommunitiesIcon from '../ui/icons/CommunitiesIcon';
import MessageIcon from '../ui/icons/MessageIcon';
import InsightsIcon from '../ui/icons/InsightsIcon';
import { useTranslation } from 'react-i18next';

interface SidebarProps {
  isOpen: boolean;
}

const fetchChannels = async () => {
  const { data } = await axios.get('/channels');
  return data;
};

const reorderChannels = async ({ sortedChannels }) => {
  const response = await axios.post('/channels/reorder', { sortedChannels });
  return response;
};

const Sidebar: ForwardRefRenderFunction<HTMLDivElement, SidebarProps> = ({ isOpen }, ref) => {
 const { t: translate } = useTranslation('common');

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

  console.log('auth user sidebar', authUser);
  return (
    <Root ref={ref} isOpen={isOpen}>
      <Modal title="Create Channel" isOpen={modal} close={closeModal}>
        <ChannelCreate closeModal={closeModal} channels={channelItems} />
      </Modal>

      <UL>
        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/communities/members"
            color="text"
            active={router.pathname === '/communities/members'}
            size="sm"
          >
            <CommunitiesIcon width="32" isActive={router.pathname.includes('/communities/members')} />
            {'\u00A0'}
            {'\u00A0'} {translate('member') + 's'}
          </ButtonLink>
        </LI>

        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/communities/messages"
            color="text"
            active={router.pathname === '/communities/messages'}
            size="sm"
          >
            <MessageIcon isActive={router.pathname.includes('/communities/messages')} width="32" />
            {'\u00A0'}
            {'\u00A0'} Messages
          </ButtonLink>
        </LI>

        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/communities/community"
            color="text"
            active={router.pathname === '/communities/community'}
            size="sm"
          >
            <CommunitiesIcon width="32" isActive={router.pathname.includes('/communities/community')} />
            {'\u00A0'}
            {'\u00A0'} {translate('AllCom')}
          </ButtonLink>
        </LI>

        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/communities/notifications"
            color="text"
            active={router.pathname === '/communities/notifications'}
            size="sm"
          >
            <NotificationIcon width="32" isActive={router.pathname.includes('/communities/notifications')} />
            {'\u00A0'}
            {'\u00A0'} Notifications
          </ButtonLink>
        </LI>

        <LI>
          <ButtonLink
            fullWidth
            radius="none"
            href="/communities/insights"
            color="text"
            active={router.pathname === '/communities/insights'}
            size="sm"
          >
            <InsightsIcon width="32" isActive={router.pathname.includes('/communities/insights')} />
            {'\u00A0'}
            {'\u00A0'} {translate('Insights')}
          </ButtonLink>
        </LI>

        <LI noHover>
          <Spacing top="sm" left="xs" />
          <Divider />
        </LI>
      </UL>

      {(authUser?.joinedChannels?.length > 0 && (
        <List
          lockVertically
          values={authUser?.joinedChannels}
          onChange={({ oldIndex, newIndex }) => {
            setChannelItems(arrayMove(authUser?.joinedChannels, oldIndex, newIndex));
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
      )) || <h4>{translate('notjoin')}</h4>}

      {isAdmin && (
        <Button size="xs" onClick={() => setModal(true)} textColor="text">
          <PlusIcon />
          {'\u00A0'}
          {'\u00A0'}
          {translate('createCom')}
        </Button>
      )}
    </Root>
  );
};

export default forwardRef(Sidebar);
