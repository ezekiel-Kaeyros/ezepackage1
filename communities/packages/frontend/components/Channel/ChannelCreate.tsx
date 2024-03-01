import { FC, FormEvent } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { openAlert, AlertTypes } from '../../store/alert';
import ChannelForm, { ChannelFormMode } from './ChannelForm';
import { Channel } from '../../constants';
import { RootState } from '../../store';


interface ChannelCreateProps {
  closeModal: () => void;
  channels: Channel[];
}

const createChannel = async ({ payload, authUserId }: { payload: Channel, authUserId: string }) => {
  try {
    const newChannel = await axios.post('/channels/create', {...payload, authUserId});
    return newChannel;
  } catch (error) {
    throw error.response.data;
  }
};

const ChannelCreate: FC<ChannelCreateProps> = ({ closeModal, channels }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const authUser = useSelector((state: RootState) => state.auth.user);
  console.log('auth user', authUser)

  const queryClient = useQueryClient();
  const { mutateAsync, isLoading, error } = useMutation(createChannel);

  const onSubmit = async (e: FormEvent<HTMLFormElement>, formValues: Channel) => {
    e.preventDefault();
    try {
      const { data: channel } = await mutateAsync({
        payload: { ...formValues, order: channels.length > 0 ? channels.length : 0 },
        authUserId: authUser._id
      });
      queryClient.setQueryData('channels', (existingChannels: Channel[]) => [...existingChannels, channel]);
      closeModal();
      router.push(`/communities/channel/${channel?.name}`);
      dispatch(
        openAlert({
          message: 'Channel has been successfully created.',
          type: AlertTypes.Success,
        })
      );
    } catch (error) {
      console.error('An error occurred while creating a channel: ', error);
    }
  };

  return (
    <ChannelForm
      closeModal={closeModal}
      apiErrorMessage={error as string}
      onSubmit={onSubmit}
      loading={isLoading}
      mode={ChannelFormMode.Create}
    />
  );
};

export default ChannelCreate;
