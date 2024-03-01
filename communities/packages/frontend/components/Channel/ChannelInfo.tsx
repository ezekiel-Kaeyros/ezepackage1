import React, { FC, useEffect, useRef, useState } from 'react';
import { H1, Avatar, H3, Loading } from '../ui';
import {
  ButtonGroup,
  CoverImageWrapper,
  CoverLoading,
  CoverPhoto,
  DecriptionText,
  Detail,
  DetailText,
  DetailsInfo,
  DetailsList,
  DetailsText,
  JoinButton,
  LeaveButton,
  ProfileDetails,
  ProfileImageWrapper,
  ProfilePhoto,
  ShareButton,
} from './style';
import JoinIcon from '../../public/community/communityProfile/joinIcon.svg';
import MembersIcon from '../../public/community/communityProfile/membersIcon.svg';
import CalendarIcon from '../../public/community/communityProfile/calendarIcon.svg';
import PrivateIcon from '../../public/community/communityProfile/communityPrivateIcon.svg';

import ShareIcon from '../../public/community/communityProfile/shareIcon.svg';

import Image from 'next/image';
import { Share } from '../Post/PostCard/style';
import PostCardShare from '../Post/PostCard/PostCardShare';
import { useClickOutside } from '../../utils';
import UploadChannelImage from '../UploadChannelImage';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useMutation, useQuery, useQueryClient } from 'react-query';
import { AlertTypes, openAlert } from '../../store/alert';
import { setAuthUser } from '../../store/auth';

interface ChannelInfoProps {
  channelId: string;
  name: string;
  creationDate: string;
  description?: string;
}

export enum ProfileLoading {
  CoverPicture,
  ChannelPicture,
}

const config = {
  headers: {
    'content-type': 'application/json',
  },
};

// Getting new info from user

// Joining request
const joinChannel = async ({ userId, channelId }) => {
  const response = await axios.post(`/channels/join/${channelId}`, { userId }, config);
  return response;
};

// Leaving request
const leaveChannel = async ({ userId, channelId }) => {
  const response = await axios.post(`/channels/leave/${channelId}`, { userId }, config);
  return response;
};

// Fetching user by id

const fetchUserById = async ({ userId }) => {
  const response = await axios.get(`/users/${userId}`);
  return response;
};

const ChannelInfo: FC<ChannelInfoProps> = ({ channelId, name, creationDate, description }) => {
  const sharePopoverRef = useRef(null);
  const [isLoadingProfile, setIsLoadingProfile] = useState<ProfileLoading>(null);
  const authUser = useSelector((state: RootState) => state.auth.user);
  const { mutateAsync: joinChannelMutation } = useMutation(joinChannel);
  const { mutateAsync: leaveChannelMutation } = useMutation(leaveChannel);

  const [openShareModal, setOpenShareModal] = useState<boolean>(false);

  useClickOutside([sharePopoverRef], openShareModal, () => {
    () => setOpenShareModal(false);
  });

  const dispatch = useDispatch();
  const queryClient = useQueryClient();

  // Logic for joining
  const handleJoin = async () => {
    const joiningDetails = {
      userId: authUser._id,
      channelId: channelId,
    };

    try {
      const data = await joinChannelMutation(joiningDetails);

      if (data.status === 200) {
        notify('joined');
        await queryClient.refetchQueries('userById');
      }
    } catch (error) {
      console.log('An error occured', error);
    }
  };

  // Logic for leaving
  const handleLeave = async () => {
    const leavingDetails = {
      userId: authUser._id,
      channelId: channelId,
    };
    try {
      const data = await leaveChannelMutation(leavingDetails);
      await queryClient.refetchQueries('userById');

      if (data.status === 200) {
        notify('leaved');
      }
    } catch (error) {
      console.log(`An error occured, try again`, error);
    }
  };

  // Fetching updated user
  const { data, isLoading } = useQuery('userById', { queryFn: () => fetchUserById({ userId: authUser._id }) });

  useEffect(() => {
    data &&
      dispatch(
        setAuthUser({
          ...data.data,
        })
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  // Notifications
  const notify = (operation: 'joined' | 'leaved') => {
    const joinMessage = `You have joined the group ${name} successfully.`;
    const leaveMessage = `You leave the group ${name}`;
    dispatch(
      openAlert({
        type: AlertTypes.Success,
        message: operation === 'joined' ? joinMessage : leaveMessage,
      })
    );
  };

  // Date formatted function

  function formatDate(date) {
    const d = new Date(date);
    const day = d.getDate();
    const month = d.getMonth() + 1; // Months are zero-indexed
    const year = d.getFullYear();

    const monthNames = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];

    // Use month name instead of number
    const formattedDate = `${day} ${monthNames[month - 1]}, ${year}`;

    return formattedDate;
  }
  const isJoined = authUser?.joinedChannels?.find((channel) => channel._id === channelId);

  return (
    <div style={{ position: 'relative' }}>
      <CoverPhoto isLoading={isLoadingProfile}>
        {isLoadingProfile === ProfileLoading.CoverPicture && (
          <CoverLoading>
            <Loading />
          </CoverLoading>
        )}

        {
          <CoverImageWrapper>
            <UploadChannelImage isCover setIsLoading={setIsLoadingProfile} />
          </CoverImageWrapper>
        }
        <ProfileDetails>
          <ProfilePhoto>
            {isLoadingProfile === ProfileLoading.ChannelPicture ? (
              <Loading top="lg" />
            ) : (
              <Avatar
                // image={authUser?._id === user._id ? authUser.image : user.image}
                size={4}
              />
            )}
            <ProfileImageWrapper>
              <UploadChannelImage setIsLoading={setIsLoadingProfile} />
            </ProfileImageWrapper>
          </ProfilePhoto>
          <DetailsList>
            <DetailsText>
              <H1 size="xl">{name}</H1>
              <DecriptionText>{description}</DecriptionText>
            </DetailsText>
            <DetailsInfo>
              <Detail>
                <Image src={PrivateIcon} alt="Private Icon" />
                <DetailText>Public</DetailText>
              </Detail>
              <Detail>
                <Image src={CalendarIcon} alt="Private Icon" />
                <DetailText>Created on: {formatDate(creationDate)} </DetailText>
              </Detail>
              <Detail>
                <Image src={MembersIcon} alt="Private Icon" />
                <DetailText>123k Members</DetailText>
              </Detail>
            </DetailsInfo>
          </DetailsList>
          {/* Buttons group */}
          <ButtonGroup>
            {(!isJoined && (
              <JoinButton>
                <Image alt="invite button" src={JoinIcon} />
                <H3 onClick={() => handleJoin()} color="white" size="sm">
                  Join
                </H3>
              </JoinButton>
            )) || (
              <LeaveButton>
                <Image alt="invite button" src={JoinIcon} />
                <H3 onClick={() => handleLeave()} color="white" size="sm">
                  Leave
                </H3>
              </LeaveButton>
            )}

            <ShareButton onClick={() => setOpenShareModal((prev) => !prev)}>
              <Image alt="share button" src={ShareIcon} />
              <H3 size="sm">Share</H3>
            </ShareButton>
            <Share>
              {openShareModal && (
                <PostCardShare
                  ref={sharePopoverRef}
                  setIsShareOpen={(openShareModal) => setOpenShareModal(!openShareModal)}
                  url={`${window.location.host}/channel/${name}`}
                  title={name}
                />
              )}
            </Share>
          </ButtonGroup>
        </ProfileDetails>
      </CoverPhoto>
    </div>
  );
};

export default ChannelInfo;
