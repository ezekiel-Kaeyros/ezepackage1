import { FC, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cookies from 'js-cookie';
import { Messages } from '../../../components/Messages';
import Seo from '../../../components/Seo';
import { Button, Spacing, Text, Container } from '../../../components/ui';
import { CommunityIcon } from '../../../components/ui/icons';
import { RootState } from '../../../store';
import { openAuthPopup, PopupType, setAuthUser } from '../../../store/auth';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';
import { Cookies } from '../../../utils';
import axios from 'axios';
import { useDispatchAuth } from '../../../utils/useDispatchAuth';

const MessagesPage: FC = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const dispatch = useDispatch();

  const openAuthModal = () => {
    dispatch(openAuthPopup(PopupType.Sign_Up));
  };

  useDispatchAuth();

  if (!authUser) {
    return (
      <LayoutCommunities containerMaxWidth="md">
        <Container centered padding="lg" bgColor="white" shadow="sm">
          <CommunityIcon width="40" />

          <Spacing top="sm">
            {!authUser && (
              <Button inline onClick={openAuthModal} color="primary">
                Sign up
              </Button>
            )}

            <Spacing top="md">
              <Text>To chat with community members.</Text>
            </Spacing>
          </Spacing>
        </Container>
      </LayoutCommunities>
    );
  }

  return (
    <LayoutCommunities hideRightSidebar containerMaxWidth="md">
      <Seo title="Messages" />
      <Messages />
    </LayoutCommunities>
  );
};

export default MessagesPage;
