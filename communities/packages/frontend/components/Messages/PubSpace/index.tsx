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

interface PubSpace {
  isFetching: boolean;
  onSearchItemClick: (user: any) => void;
  conversations: any[];
  userId?: string;
}

const PubSpace: FC<PubSpace> = ({ onSearchItemClick, conversations, userId, isFetching }) => {
  const authUser = useSelector((state: RootState) => state.auth.user);

  const renderSkeleton = () => {
    return <Skeleton count={3} height={50} top="xs" />;
  };

  const renderConversations = () => {
    return conversations.map((conversation: any) => {
      const person = conversation.receiver._id === authUser._id ? conversation.sender : conversation.receiver;

      
    });
  };

  return (
    <Root>
      
    </Root>
  );
};

export default PubSpace;
