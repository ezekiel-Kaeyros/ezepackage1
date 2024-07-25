import React, { FC, useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';
import { useMutation } from 'react-query';
import { RootState } from '../../store';
import { addUserFollowing, removeUserFollowing, setRefresh } from '../../store/auth';
import { AuthUser } from '../../constants';
import { useNotifications } from '../../utils';
import { NotificationType } from '../../constants/Notification';
import { Root } from './style';
import Image from 'next/image';
import addIcon from '../../public/add (2).svg';

const createFollow = async ({ userId }) => {
  const follow = await axios.post('/follow/create', { userId });
  return follow.data;
};

const deleteFollow = async (id: string) => {
  const follow = await axios.delete('/follow/delete', { data: { id } });
  return follow.data;
};

interface FollowProps {
  user: AuthUser;
  queryKey: any; 
  refetch?: any
}

const Follow: FC<FollowProps> = ({ refetch, user, queryKey }) => {
  const authUser = useSelector((state: RootState) => state.auth.user);
  const refresh = useSelector((state: RootState) => state.auth.refresh);
  const isfollowing: any = authUser.following.find((f: any) => f.user === user._id);
  const dispatch = useDispatch();

  // const { createNotification, deleteNotification } = useNotifications();
  const { mutateAsync: createFollowMutation } = useMutation(createFollow);
  const { mutateAsync: deleteFollowMutation } = useMutation(deleteFollow);

  console.log(refresh, "outside mutate")

  const followMutation = async () => {
    console.log(refresh, "inside mutate")
    const follow = isfollowing
      ? await deleteFollowMutation(isfollowing._id)
      : await createFollowMutation({ userId: user._id });

    // if (refetch) {
    //   refetch();
    // }

    isfollowing ? dispatch(removeUserFollowing(follow._id)) : dispatch(addUserFollowing(follow));

    // if (isfollowing) {
    //   const notification: any = user.notifications.find((n: any) => n?.follow?._id === isfollowing?._id);
    //   if (notification) {
    //     deleteNotification({ id: notification._id, postId: null, user, queryKey });
    //   }
    // } else {
    //   createNotification({
    //     user: user,
    //     postId: null,
    //     notificationType: NotificationType.FOLLOW,
    //     notificationTypeId: follow._id,
    //     queryKey,
    //   });
    // }

    dispatch(setRefresh(!refresh));

  };

  return (
    <Root onClick={debounce(followMutation, 200)} isFollowing={isfollowing}>
      {/* <Image alt="" src={addIcon} width={ 10 } /> */}
      &nbsp;&nbsp;
      {isfollowing ? 'Following' : 'Follow'}
    </Root>
  );
};

export default Follow;
