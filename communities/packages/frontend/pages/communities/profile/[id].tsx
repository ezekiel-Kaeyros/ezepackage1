import { FC, Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import Profile from '../../../components/Profile';
import { PostCard, PostCreateButton } from '../../../components/Post';
import { AuthUser, DataLimit, Post } from '../../../constants';
import { useInfiniteScroll } from '../../../utils';
import { Container, Empty, LoadingDots, Skeleton, Spacing, Text } from '../../../components/ui';
import Seo from '../../../components/Seo';
import { GetServerSideProps } from 'next';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';
import { useRouter } from 'next/router';
import RepostCard from '../../../components/Post/RepostCard';

const fetchUser = async ({ queryKey }) => {
  const [, id] = queryKey;
  const { data } = await axios.get(`/users/${id}`);
  return data;
};

const fetchPostsByAuthorId = async ({ queryKey, pageParam = 0 }) => {
  const [, authorId] = queryKey;
  const { data } = await axios.get(`/posts/author/${authorId}?offset=${pageParam}&limit=${DataLimit.PostsByAuthorId}`);
  return data;
};

interface ProfilePageProps {
  user: any;
}

const ProfilePage: FC<ProfilePageProps> = () => {
  // const userID = usePathname ()
  // { user }
  const [user, setUser] = useState <AuthUser> ()
  const refresh = useSelector((state: RootState) => state.auth.refresh);

  useEffect (() => {
    fetchAllUsers (); 
  }, [refresh]) 

  const router = useRouter ()
  const { id } = router.query
  console.log(id, ">,>,>,>,>,")

  const fetchAllUsers = async () => {
    const user = await fetchUser({ queryKey: ['user', id] });
    setUser (user)
  }

  
  
  console.log(refresh, "inside PostPage")

  const authUser = useSelector((state: RootState) => state.auth.user);
  console.log(user, 'user dataaaaaa')

  const {
    data: posts,
    isFetching: isPostsFetching,
    isFetchingNextPage: isFetchingNextPosts,
    refetch,
  } = useInfiniteScroll({
    key: ['postsByAuthorId', id],
    // key: ['postsByAuthorId', user._id],
    apiCall: fetchPostsByAuthorId,
    dataLimit: DataLimit.PostsByAuthorId,
  });

  const isPostsLoading = isPostsFetching && !isFetchingNextPosts;
  const isEmpty = !posts?.pages[0] || posts.pages.every((p) => p.length === 0);

  if (!user) {
    return (
      <LayoutCommunities marginTop="none" hideRightSidebar containerMaxWidth="xl">
        <Container centered padding="lg">
          <Empty>Oops! User not found.</Empty>
        </Container>
      </LayoutCommunities>
    );
  }

  return (
    <LayoutCommunities marginTop="none" hideRightSidebar containerMaxWidth="xl">
      <>
        <Seo title={user.fullName} image={user.image} />
        <Profile refetch={ refetch } user={user} queryKey={['userById', user._id]} />
        <Spacing bottom="sm" />
        <Container maxWidth="sm">
          {authUser && authUser._id === user._id && <PostCreateButton queryKey={['postsByAuthorId', user._id]} />}

          {isPostsLoading ? (
            <Skeleton height={300} count={6} bottom="sm" />
          ) : (
            <>
              {isEmpty && (
                <Container centered>
                  <Text color="textSecondary">{user.fullName} has not posted yet.</Text>
                </Container>
              )}

              {posts?.pages?.map((posts, i) => {
                return (
                  <Fragment key={i}>
                    {posts?.map((post: Post) => {
                      if (post.postId && post.postId.length > 0) {
                        return (
                          <RepostCard
                            refetch={refetch}
                            displayChannelName
                            queryKey={['postsByAuthorId', user._id]}
                            key={post._id}
                            post={post}
                          />
                        );
                      } else {
                        return (
                          <PostCard
                            refetch={refetch}
                            displayChannelName
                            queryKey={['postsByAuthorId', user._id]}
                            key={post._id}
                            post={post}
                          />
                        );
                      }
                    })}
                    {/* {posts?.map((post: Post) => (
                      <PostCard
                        refetch={refetch}
                        displayChannelName
                        queryKey={['postsByAuthorId', user._id]}
                        key={post._id}
                        post={post}
                      />
                    ))} */}
                  </Fragment>
                );
              })}

              {isFetchingNextPosts && <LoadingDots />}
            </>
          )}
        </Container>
      </>
    </LayoutCommunities>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const user = await fetchUser({ queryKey: ['user', params.id] });
  return {
    props: {
      user,
    },
  };
};

export default ProfilePage;
