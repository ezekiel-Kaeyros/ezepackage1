import React, { FC } from 'react';
import Image from 'next/image';
import MessageEdit from '../../../public/message-edit.svg';
import PlusBtn from '../../../public/plus-btn.svg';
import { useSelector } from 'react-redux';
import {
  Root,
  HeadingContainer,
  MessageHeading,
  Heading,
  SearchContainer,
  UserContainer,
  User,
  Info,
  FullNameUnSeen,
  FullName,
  UnSeen,
  LastMessage,
  IconPlus,
  MessageHeading2,
} from './style';
import { ButtonLink, Avatar, Spacing, Skeleton } from '../../ui';
import Search from '../../Search';
import { RootState } from '../../../store';
import { PlusIcon } from '../../ui/icons';
import ButtonLink2 from '../../ui/Link/ButtonLink2';

interface MessagesUsers {
  isFetching: boolean;
  onSearchItemClick: (user: any) => void;
  conversations: any[];
  userId?: string;
}

const MessagesUsers: FC<MessagesUsers> = ({ onSearchItemClick, conversations, userId, isFetching }) => {
  const authUser = useSelector((state: RootState) => state.auth.user);

  const renderSkeleton = () => {
    return <Skeleton count={3} height={50} top="xs" />;
  };

  const renderConversations = () => {
    return conversations.map((conversation: any) => {
      const person = conversation.receiver._id === authUser._id ? conversation.sender : conversation.receiver;

      return (
       <ButtonLink2 href={`/communities/messages/${person._id}`} fullWidth key={conversation._id}>
          <User active={person._id === userId}>
            <Avatar isOnline={conversation.isOnline} image={person.image} size={1.5}  />

            <Info>
              <FullNameUnSeen>
                <FullName>{person.fullName}</FullName>

                {!conversation.seen && conversation.sender._id !== authUser._id && <UnSeen />}
              </FullNameUnSeen>

              <LastMessage>
                {/* {conversation.sender._id === authUser._id && conversation.message && 'You:'} {conversation.message} */}
                {conversation.sender._id === authUser._id && conversation.message } {conversation.message}
              </LastMessage>
            </Info>
          </User>
        </ButtonLink2>
      );
    });
  };

  return (
    <Root>
      <MessageHeading>
        <Heading> <h3 className="">Messages</h3></Heading>
        <Image src={MessageEdit} alt="EZE-edit-message" />
      </MessageHeading>

      {/*    <SearchContainer>
        <Search radius="none" onlyUsers onItemClick={onSearchItemClick} placeholder="Search members" hideBorder />
      </SearchContainer> */}

      <UserContainer>
        {isFetching ? renderSkeleton() : renderConversations()}
        <Spacing top="xxs" />
        {/* <IconPlus>
          <PlusIcon width='28'></PlusIcon>
        </IconPlus> */}        
      </UserContainer>
      <MessageHeading2>
        <Image src={PlusBtn} alt="EZE-edit-message" />
      </MessageHeading2>
    </Root>
  );
};

export default MessagesUsers;
