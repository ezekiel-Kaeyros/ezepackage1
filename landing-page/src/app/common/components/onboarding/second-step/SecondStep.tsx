'use client';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SecondStepFormValues } from './secondStep';
import { Button } from '../../button/Button';
import CheckboxCommunityChip from '../checkbox-community-chip/CheckboxCommunityChip';
import { useRouter } from 'next/navigation';
import ChannelService from '@/services/channelService';
import { useAuth } from '@/app/hooks/useAuth';
import axios from 'axios';
import { default as C } from '@/utils/config';
import { Spinner } from '@nextui-org/react';
import { User } from '@/app/api/models/User';

const COMMUNITIES_URL: any = C.communitiesUrl;
const config = {
  headers: {
    'content-type': 'application/json',
  },
};

const joinChannel = async ({ channelId, userId, url }: any) => {
  const response = await axios.post(
    `${url}/channels/join/${channelId}`,
    { userId },
    config
  );
  return response;
};

const getUserEmail = async (url: string, data: { email: string }) => {
  const response = await axios.get(`${url}/users/email/${data.email}`);
  return response;
};

const updateChannel = async (
  data: {
    _id: string;
    name: string;
    authRequired: boolean;
    description: string;
    members: number;
  },
  url: string
) => {
  const response = await axios.put(
    `${url}/channels/update-member`,
    data,
    config
  );
  return response;
};

const SecondStep = () => {
  const [topic, setTopic] = useState<
    {
      authRequired: string;
      createdAt: string;
      description: string;
      name: string;
      order: 0;
      updatedAt: string;
      __v: 0;
      _id: string;
      members?: number;
    }[]
  >([]);
  const [number, setNumber] = useState<number>(0);
  const [load, setLoad] = useState(false);
  const { register, handleSubmit, formState: { isValid, errors } } = useForm<SecondStepFormValues>();
  const { user } = useAuth<{ email: string }>();
  const [communities, setCommunities] = useState<
    {
      authRequired: string;
      createdAt: string;
      description: string;
      name: string;
      order: 0;
      updatedAt: string;
      __v: 0;
      _id: string;
      members?: number;
    }[]
  >([]);
  const { push } = useRouter();

  const onSubmit: SubmitHandler<SecondStepFormValues> = (data) => {
    // Handle form submission
  };

  const handleSend = async () => {
    push(COMMUNITIES_URL);
  };

  useEffect(() => {
    const fetchTopics = async () => {
      setLoad(true);
      try {
        const result = await new ChannelService().channel();
        setTopic(result.data);
      } catch (error) {
        console.error('Error fetching topics:', error);
      } finally {
        setLoad(false);
      }
    };
    fetchTopics();
  }, []);

  useEffect(() => {
    if (number && number === communities.length) {
      push(COMMUNITIES_URL);
    }
  }, [number, communities.length, push]);

  const getTopic = (value: {
    authRequired: string;
    createdAt: string;
    description: string;
    name: string;
    order: 0;
    updatedAt: string;
    __v: 0;
    _id: string;
    members: number;
  }) => {
    const exists = communities.some((item) => item._id === value._id);
    if (exists) {
      setCommunities(communities.filter((item) => item._id !== value._id));
    } else {
      setCommunities([...communities, value]);
    }
  };

  const handleJoin = async () => {
    if (!user) {
      console.error('User not found');
      return;
    }

    setLoad(true);
    try {
      const userNew = await getUserEmail(C.apiUrl, { email: user.email });
      if (userNew.status === 200) {
        if (communities.length > 0) {
          for (const item of communities) {
            try {
              const joiningDetails = {
                userId: userNew.data._id,
                channelId: item._id,
                url: C.apiUrl,
              };
              const response = await joinChannel(joiningDetails);
              if (response.status === 200) {
                await updateChannel(
                  {
                    _id: item._id,
                    name: item.name,
                    authRequired: true,
                    description: item.description,
                    members: item.members ? item.members + 1 : 1,
                  },
                  C.apiUrl
                );
              }
            } catch (error) {
              console.error('Error joining channel:', error);
            }
          }
          setNumber(communities.length);
        } else {
          handleSend();
        }
      }
    } catch (error) {
      console.error('Error fetching user email:', error);
    } finally {
      setLoad(false);
    }
  };

  return (
    <>
      {load && (
        <div className="w-full h-screen flex flex-col gap-2 justify-center items-center text-black">
          <Spinner
            color="primary"
            size="lg"
            classNames={{ label: 'text-white hidden' }}
            className="text-white"
          />
          <p className="text-xl">Loading...</p>
        </div>
      )}
      {!load && (
        <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <h1 className="font-bold text-3xl">
              Choose at least one community
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
              {topic.map((community) => (
                <CheckboxCommunityChip
                  description={community.description}
                  key={community._id}
                  id={community._id}
                  name={community.name}
                  label={community.name}
                  register={register('communities', { required: true })}
                  value={community._id}
                  gettopic={getTopic}
                  item={community}
                />
              ))}
            </div>
          </div>
          <div className="mt-8 w-fit">
            <Button
              disabled={load}
              variant={load ? 'disabled' : 'default'}
              onClick={() => {
                if (communities.length > 0) {
                  handleJoin();
                } else {
                  handleSend();
                }
              }}
              type="button"
              className="w-fit"
            >
              Continue
            </Button>
          </div>
        </form>
      )}
    </>
  );
};

export default SecondStep;
