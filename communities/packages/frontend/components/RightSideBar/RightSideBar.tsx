import axios from 'axios';
import React, { FC } from 'react';
import { useQuery } from 'react-query';
import { Avatar, H3, Spacing, Link, Text, Skeleton } from '../ui';
import {
  Root,
  PersonContainer,
  Person,
  Heading,
  RightSideBarSections,
  HeadingIcon,
  EzeText,
  ReserveBtn,
  ViewMembers,
} from './style';
import HomeEzeIcon from '../ui/icons/HomeEzeIcon';
import MoreMemebers from '../ui/icons/MoreMembers';
import { useTranslation } from 'react-i18next';

const fetchOnlineUsers = async () => {
  const { data } = await axios.get('/users/online-users');
  return data;
};

const fetchNewMembers = async () => {
  const { data } = await axios.get('/users/new-members');
  return data;
};

const REFETCH_INTERVAL = 10000;

const RightSideBar: FC = () => {
 const { t: translate } = useTranslation('common');

  const {
    data: onlineMembers,
    isFetching: isFetchingOnlineMembers,
    isRefetching: isReFetchingOnlineMembers,
  } = useQuery('onlineUsers', fetchOnlineUsers, {
    refetchInterval: REFETCH_INTERVAL,
  });
  const { data: newMembers, isFetching: isFetchingNewMembers } = useQuery('newMembers', fetchNewMembers);

  const noOnlineMembers = !onlineMembers || onlineMembers?.length === 0;
  const noNewMembers = !newMembers || newMembers?.length === 0;

  const renderList = (list: any, displayIsOnline: boolean) => {
    return list.map((user: any) => (
      <PersonContainer key={user._id}>
        <Link href={`/communities/profile/${user._id}`} disableBorderOnHover>
          <Person>
            <Avatar
              size={1.1}
              image={user.image}
              fullName={user.fullName}
              isOnline={displayIsOnline ? user.isOnline : false}
            />
            <Spacing right="xs" />
          </Person>
        </Link>
      </PersonContainer>
    ));
  };

  return (
    <Root>
      <HeadingIcon>
        <HomeEzeIcon />
      </HeadingIcon>
      <EzeText>
        <H3>{translate('Events')}</H3>
        <Text color="textSecondary" size="xs">
          {translate('eventText')}
        </Text>
        <ReserveBtn>{translate('Reserve')}</ReserveBtn>
      </EzeText>

      <RightSideBarSections>
        <H3>{translate('newMember')}</H3>

        {!isFetchingNewMembers && noNewMembers && (
          <Spacing top="sm">
            <Text color="textSecondary">No new members.</Text>
          </Spacing>
        )}
        {newMembers && <Spacing top="xs" />}

        {isFetchingNewMembers ? (
          <Skeleton count={3} height={36} top="xs" />
        ) : (
          newMembers && renderList(newMembers, false)
        )}

        <ViewMembers>
          <Link href="/communities/members">{translate('allMembers')}</Link>
          <MoreMemebers />
        </ViewMembers>
      </RightSideBarSections>

      <RightSideBarSections>
        {/* <Spacing top="md"> */}
        <H3>{translate('onlineMember')}</H3>
        {/* </Spacing> */}

        {!isFetchingOnlineMembers && noOnlineMembers && (
          <Spacing top="sm">
            <Text color="textSecondary">{translate('noOnline')}</Text>
          </Spacing>
        )}

        {onlineMembers && <Spacing top="xs" />}

        {isFetchingOnlineMembers && !isReFetchingOnlineMembers ? (
          <Skeleton count={3} height={36} top="xs" />
        ) : (
          onlineMembers && renderList(onlineMembers, true)
        )}
      </RightSideBarSections>
    </Root>
  );
};

export default RightSideBar;
