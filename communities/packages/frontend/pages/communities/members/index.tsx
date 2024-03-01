import React, { FC, Fragment } from 'react';
import axios from 'axios';
import { Wrapper } from '../../../components/Members/style';
import MembersCard from '../../../components/Members/MembersCard';
import { useInfiniteScroll } from '../../../utils';
import { DataLimit } from '../../../constants';
import { LoadingDots, Container, Empty, Skeleton } from '../../../components/ui';
import Seo from '../../../components/Seo';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';
import { useDispatchAuth } from '../../../utils/useDispatchAuth';

const fetchUsers = async ({ queryKey, pageParam = 0 }) => {
  const [, isEmailVerificationRequired] = queryKey;
  const { data } = await axios.get(
    `/users/get-users?offset=${pageParam}&limit=${DataLimit.Members}&emailVerified=${isEmailVerificationRequired}`
  );
  return data;
};

const MembersPage: FC = () => {
  const { isEmailVerificationRequired } = useSelector((state: RootState) => state.settings);
  const { data, isFetching, isFetchingNextPage } = useInfiniteScroll({
    key: ['members', isEmailVerificationRequired],
    apiCall: fetchUsers,
    dataLimit: DataLimit.Members,
  });

  useDispatchAuth();

  const isEmpty = !data?.pages[0] || data.pages[0].length === 0;

  if (isFetching && !isFetchingNextPage) {
    return (
      <LayoutCommunities marginTop="sm" hideRightSidebar containerMaxWidth="md">
        <Wrapper>
          <Skeleton count={12} height={270} />
        </Wrapper>
      </LayoutCommunities>
    );
  }

  if (isEmpty) {
    return (
      <LayoutCommunities marginTop="sm" hideRightSidebar containerMaxWidth="md">
        <Container centered padding="lg">
          <Empty>
            <div>No community members yet.</div>
          </Empty>
        </Container>
      </LayoutCommunities>
    );
  }

  return (
    <LayoutCommunities marginTop="sm" hideRightSidebar containerMaxWidth="md">
      <Seo title="Members" />
      <Wrapper>
        {data?.pages?.map((users, i) => {
          return (
            <Fragment key={i}>
              {users?.map((user: any) => (
                <MembersCard key={user._id} queryKey={['members']} user={user} />
              ))}
            </Fragment>
          );
        })}
        {isFetchingNextPage && <LoadingDots />}
      </Wrapper>
    </LayoutCommunities>
  );
};

export default MembersPage;
