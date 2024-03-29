import { FC, Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { PostCard, PostCreateButton } from '../../../components/Post';
import { LoadingDots, Skeleton, Spacing, Container, Button, Text } from '../../../components/ui';
import { RootState } from '../../../store';
import { Channel as ChannelType, DataLimit, Post } from '../../../constants';
import { useInfiniteScroll } from '../../../utils';
import Seo from '../../../components/Seo';
import { GetServerSideProps } from 'next';
import { ChannelInfo } from '../../../components/Channel';
import { CommunityIcon } from '../../../components/ui/icons';
import { openAuthPopup, PopupType } from '../../../store/auth';
import ChannelInfoLayout from '../../../components/Layout/ChannelInfoLayout';
import { useDispatchAuth } from '../../../utils/useDispatchAuth';

const fetchChannelByName = async (channelName: string) => {
  const { data } = await axios.get(`/channels/${channelName}`);
  return data;
};

const fetchPostsByChannelId = async ({ queryKey, pageParam = 0 }) => {
  const [, channelId] = queryKey;
  const { data } = await axios.get(
    `/posts/channel/${channelId}?offset=${pageParam}&limit=${DataLimit.PostsByChannelName}`
  );
  return data;
};

interface ChannelProps {
  channel: ChannelType;
}

const Channel: FC<ChannelProps> = ({ channel }) => {
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state.auth.user);

  const { data, isFetching, isFetchingNextPage, refetch } = useInfiniteScroll({
    key: ['postsByChannelName', channel._id],
    apiCall: fetchPostsByChannelId,
    dataLimit: DataLimit.PostsByChannelName,
  });

  const openAuthModal = () => {
    dispatch(openAuthPopup(PopupType.Sign_Up));
  };

  useDispatchAuth();

  if (isFetching && !isFetchingNextPage) {
    return (
      <ChannelInfoLayout>
        <Skeleton count={20} width={800} height={300} bottom="sm" />
      </ChannelInfoLayout>
    );
  }

  const isJoined = authUser?.joinedChannels?.find((channel) => channel._id === channel._id);

  return (
    <ChannelInfoLayout
      profile={
        <Spacing bottom="sm">
          <ChannelInfo
            creationDate={channel.createdAt}
            channelId={channel._id}
            name={channel.name}
            description={channel.description}
          />
        </Spacing>
      }
    >
      <Seo title={channel.name} />

      {(authUser && isJoined && (
        <PostCreateButton queryKey={['postsByChannelName', channel._id]} channel={channel} />
      )) || <h2>You need to join to be able to see posts</h2>}

      {!authUser && (
        <Spacing bottom="sm">
          <Container centered padding="lg" bgColor="white" shadow="sm">
            <CommunityIcon width="40" />

            <Spacing top="sm">
              <Button inline onClick={openAuthModal} color="primary">
                Sign up
              </Button>

              <Spacing top="sm">
                <Text>To post in {channel.name} channel</Text>
              </Spacing>
            </Spacing>
          </Container>
        </Spacing>
      )}
      {(!isJoined && <h1></h1>) ||
        data?.pages?.map((posts, i) => {
          return (
            <Fragment key={i}>
              {posts?.map((post: Post) => (
                <PostCard refetch={refetch} queryKey={['postsByChannelName', channel._id]} key={post._id} post={post} />
              ))}
            </Fragment>
          );
        })}

      {isFetchingNextPage && <LoadingDots />}
    </ChannelInfoLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const channel = await fetchChannelByName(params.name as string);
  return { props: { channel: channel } };
};

export default Channel;
