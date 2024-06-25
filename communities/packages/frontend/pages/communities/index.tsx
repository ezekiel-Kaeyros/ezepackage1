import { FC, useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { Post } from '../../constants';
import { RootState } from '../../store';
import { PostCard, PostCreateButton } from '../../components/Post';
import { Container, Spacing, Skeleton, Text } from '../../components/ui';
import { CommunityIcon } from '../../components/ui/icons';
import Seo from '../../components/Seo';
import LayoutCommunities from '../../components/Layout/CommuntiesLayout';
import { useQuery, useQueryClient } from 'react-query';


function extractUniquePostIds(data) {
  // Check if the input is an array
  if (!Array.isArray(data)) {
    console.error('Input is not an array.');
    return [];
  }

  // Extract post IDs, flatten the array, and convert to Set to remove duplicates
  const uniquePostIdsSet = new Set(data.map((item) => item.posts).flat());

  // Convert the Set back to an array
  const uniquePostIdsArray = Array.from(uniquePostIdsSet);

  return uniquePostIdsArray;
}

// Fetching posts by id
const fetchPostsById = async (id) => {
  try {
    const { data } = await axios.get(`/posts/${id}`);
    return data;
  } catch (error) {
    console.error(`Error fetching post with ID ${id}:`, error);
    throw error;
  }
};

const Home: FC = () => {
  const [datas,setDatas]=useState([])
  const authUser = useSelector((state: RootState) => state.auth.user);
  
  const dispatch=useDispatch()
  const uniquePostsIds = extractUniquePostIds(authUser?.joinedChannels);

  const fetchPosts = async () => {
    try {
      const postsData = await Promise.all(uniquePostsIds.map((id) => fetchPostsById(id)));
      return postsData;
    } catch (error) {
      console.log(`An error occured ${error}`);
    }
  };

  // const [posts, setPosts] = useState([]);
  // const { data, isFetching, isFetchingNextPage } = useInfiniteScroll({
  //   key: 'postsByFollowing',
  //   apiCall: fetchPosts,
  //   enabled: authUser !== null,
  //   dataLimit: DataLimit.PostsByFollowing,
  // });

  const { data, isLoading } = useQuery('posts', { queryFn: () => fetchPosts() });
  const clientQuery = useQueryClient();
  
  // useEffect(() => {
  //   if (isRefresh) {
  //     clientQuery.invalidateQueries({ queryKey: ['posts'] });
  //     dispatch(refeshPost(false))
  //     // setDatas(data)
  //   }

  // //   if (!isLoading && data && data.length > 0) {
  // //    setDatas(data)
  // //  }
  // }, [isRefresh,isLoading]);
  // const openAuthModal = () => {
  //   dispatch(openAuthPopup(PopupType.Sign_Up));
  // };

  if (isLoading) {
    return (
      <LayoutCommunities marginTop="sm">
        <Skeleton count={10} height={300} bottom="sm" />
      </LayoutCommunities>
    );
  }

  // const isEmpty = !data?.pages[0] || data.pages.every((p) => p.length === 0);

  const isEmpty = data?.length === 0 || false;
  return (
    <LayoutCommunities marginTop="sm">
      <Seo title="Home" />
      <div>
        {authUser && <PostCreateButton queryKey="postsByFollowing" />}

        {isEmpty && (
          <Container centered padding="lg" bgColor="white" shadow="sm">
            <CommunityIcon width="40" />

            <Spacing top="sm">
              <Spacing top="sm">
                <Text>{!authUser && 'And'} Join a community to see their posts in the News Feed.</Text>
              </Spacing>
            </Spacing>
          </Container>
        )}

        <>
          {data?.reverse().map((post: Post) => (
            <PostCard displayChannelName queryKey="postsByFollowing" key={post._id} post={post} />
          ))}

          {/* {isFetchingNextPage && <LoadingDots />} */}
        </>
      </div>
    </LayoutCommunities>
  );
};

export default Home;
