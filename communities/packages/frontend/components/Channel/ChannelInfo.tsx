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
  member?: number;
  image?: string
  cover?:string
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

const updateChannel = async (data: any) => {
  const response = await axios.put(`/channels/update-member/`, data, config);
  return response;
};

// Fetching user by id

const fetchUserById = async ({ userId }) => {
  const response = await axios.get(`/users/${userId}`);
  return response;
};

const ChannelInfo: FC<ChannelInfoProps> = ({ channelId, name, creationDate, description, member ,image,cover}) => {
  const sharePopoverRef = useRef(null);
  const [imageProfil,setImageprofile]=useState(image)
  const [imageCover, setImageCover] = useState(cover);
  const [number, setNumber] = useState(member);
  const [isLoadingProfile, setIsLoadingProfile] = useState<ProfileLoading>(null);
  const authUser = useSelector((state: RootState) => state.auth.user);
  const { mutateAsync: joinChannelMutation } = useMutation(joinChannel);
  const { mutateAsync: leaveChannelMutation } = useMutation(leaveChannel);
  const { mutateAsync: updateChannelMutation } = useMutation(updateChannel);
  console.log('authUser==========', authUser);
  const setprofilHandler = (url: string) => {
    setImageprofile(url)
  }
   const setCoverHandler = (url: string) => {
     setImageCover(url);
   };
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
        const val = number + 1;
        const value = {
          _id: channelId,
          name: name,
          authRequired: true,
          description: description,
          members: val,
        };
        const update = await updateChannelMutation(value);
        if (update.status == 200) {
          setNumber(val);
        }
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
      console.log('data==========',data.status);
      if (data.status === 200) {
        
        const val = number - 1;
        const value = {
          _id: channelId,
          name: name,
          authRequired: true,
          description: description,
          members: val >= 0 ? val : 0,
        };
        const update = await updateChannelMutation(value);
        if (update.status == 200) {
          val >= 0 && setNumber(val);
          val < 0 && setNumber(0);
        }
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
  console.log("isJoined222222222222",isJoined);
  
  return (
    <div style={{ position: 'relative' }}>
      <CoverPhoto isLoading={isLoadingProfile} image={imageCover && imageCover}>
        {isLoadingProfile === ProfileLoading.CoverPicture && (
          <CoverLoading>
            <Loading />
          </CoverLoading>
        )}

        {
          <CoverImageWrapper>
         
            {isJoined && (
              <UploadChannelImage
                isCover
                setIsLoading={setIsLoadingProfile}
                channel={isJoined}
                imagehandler={setCoverHandler}
              />
            )}
          </CoverImageWrapper>
        }
        <ProfileDetails>
          <ProfilePhoto>
            {isLoadingProfile === ProfileLoading.ChannelPicture ? (
              <Loading top="lg" />
            ) : (
              <Avatar image={imageProfil && imageProfil} size={4} />
            )}
            <ProfileImageWrapper>
              {authUser.role !== 'Regular' && (
                <UploadChannelImage
                  setIsLoading={setIsLoadingProfile}
                  channel={isJoined}
                  imagehandler={setprofilHandler}
                />
              )}
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
                <DetailText>{number} Members</DetailText>
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
