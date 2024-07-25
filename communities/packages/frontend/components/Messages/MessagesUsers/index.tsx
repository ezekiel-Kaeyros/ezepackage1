import React, { FC, FormEvent, useState } from 'react';
import Image from 'next/image';
import { useQuery } from 'react-query';
import axios from 'axios';
import MessageEdit from '../../../public/message-edit.svg';
import PlusBtn from '../../../public/plus-btn.svg';
import { useSelector } from 'react-redux';
import {
  Root,
  MessageHeading,
  Heading,
  UserContainer,
  User,
  Info,
  FullNameUnSeen,
  FullName,
  UnSeen,
  LastMessage,
  MessageHeading2,
} from './style';
import { useInfiniteScroll, timeAgo } from '../../../utils';
import { DataLimit } from '../../../constants';
import { Avatar, Spacing, Skeleton } from '../../ui';
import { RootState } from '../../../store';
import ButtonLink2 from '../../ui/Link/ButtonLink2';
import InitMessageUsers from './InitMessageUsers';

interface MessagesUsers {
  isFetching: boolean;
  onSearchItemClick: (user: any) => void;
  conversations: any[];
  userId?: string;
}

const MessagesUsers: FC<MessagesUsers> = ({ onSearchItemClick, conversations, userId, isFetching }) => {
  const authUser = useSelector((state: RootState) => state.auth.user);

  const renderSkeleton = () => {
    return <Skeleton count={3} height={70} top="xs" />;
  };

  const renderConversations = () => {
    return conversations.map((conversation: any) => {
      const person = conversation.receiver._id === authUser._id ? conversation.sender : conversation.receiver;

      return (
        <ButtonLink2 href={`/communities/messages/${person._id}`} fullWidth key={conversation._id}>
          <User active={person._id === userId}>
            <Avatar isOnline={conversation.isOnline} image={person.image} size={1.5} />
            <Info>
              <FullNameUnSeen>
                <FullName>{person.fullName}</FullName>

                {!conversation.seen && conversation.sender._id !== authUser._id && <UnSeen />}
              </FullNameUnSeen>

              <LastMessage>
                {/* {conversation.sender._id === authUser._id && conversation.message && 'You:'} {conversation.message} */}
                {conversation.sender._id === authUser._id && conversation.message} {conversation.message}
              </LastMessage>
            </Info>
          </User>
        </ButtonLink2>
      );
    });
  };

  const fetchUsers = async ({ queryKey, pageParam = 0 }) => {
    const [, searchQuery] = queryKey;
    const { data } = await axios.get(
      `/settings/users?offset=${pageParam}&limit=${DataLimit.AdminUsers}&searchQuery=${searchQuery}`
    );

    console.log('data', data);
    return data;
  };
  const fetchUsersTotal = async () => {
    const { data } = await axios.get('/settings/users-total');
    return data;
  };

  const [searchQuery, setSearchQuery] = useState('');
  const { data: usersTotal, isFetching: isFetchingTotal } = useQuery('usersTotal', fetchUsersTotal);

  const { data: users, isFetchingNextPage } = useInfiniteScroll({
    key: ['adminUsers', searchQuery],
    apiCall: fetchUsers,
    dataLimit: DataLimit.AdminUsers,
  });

  return (
    <Root>
      <MessageHeading>
        <Heading>
          <h3 className="">Messages</h3>
        </Heading>
        <Image src={MessageEdit} alt="EZE-edit-message" />
      </MessageHeading>

      <UserContainer>
        {isFetching ? renderSkeleton() : renderConversations()}
        <Spacing top="xxs" />
      </UserContainer>
      <MessageHeading2>
        <InitMessageUsers />
      </MessageHeading2>
    </Root>
  );
};

export default MessagesUsers;
