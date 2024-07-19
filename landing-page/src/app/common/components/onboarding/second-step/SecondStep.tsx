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

const COMMUNITIES_URL: any = C.communitiesUrl
const config = {
  headers: {
    'content-type': 'application/json',
  }
}
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
  >();
  const [number, setnumber] = useState<any>();
  const [load, setLoad] = useState(true);
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<SecondStepFormValues>();
  const { token, user } = useAuth();
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
  // let communities = watch('communities');
  const { push } = useRouter();
  const onSubmit: SubmitHandler<SecondStepFormValues> = (data) => {
    // console.log('clicked');
    // isFirstTime('true');
    // push(COMMUNITIES_URL);
  };

  const handleSend = async () => {
    // isFirstTime('true');
    push(COMMUNITIES_URL);
  };
  useEffect(() => {
    const response = new ChannelService()
      .channel()
      .then((result) => {
        setTopic(result.data);
      })
      .catch((error) => {
      }).finally(() => {
        setLoad(false)
      });
  }, []);

  useEffect(() => {
    if (typeof number == 'number' && number == communities.length) {
      push(COMMUNITIES_URL);
    }
  }, [number, communities]);

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
    const tab: any[] = communities.filter((item) => item._id == value._id);
    if (tab.length == 0) {
      const val = communities;
      val.push(value);
      setCommunities([...val]);
    } else {
      const delTable = communities.filter((item) => item._id != value._id);
      setCommunities([...delTable]);
    }
  };

  const handleJoin = async () => {
    console.log('ok');
    setLoad(true)
    const userNew = await getUserEmail(C.apiUrl, { email: user?.email! })
    if (userNew.status == 200) {
      if (communities && communities.length > 0) {
        let row = 0;
        communities.map(async (item) => {
          const joiningDetails = {
            userId: userNew.data?._id,
            channelId: item._id,
            url: C.apiUrl,
          }; handleSend;
          try {
            const response = await joinChannel(joiningDetails);
            if (response.status == 200) {
              const res = await updateChannel(
                {
                  _id: item._id,
                  name: item.name,
                  authRequired: true,
                  description: item.description,
                  members: item.members ? item.members + 1 : 1,
                },
                C.apiUrl
              );
              row = row + 1;

              // const row = number ? number + 1 : 1;
              setnumber(row);
            }
          } catch (error) {
            console.log('error', error);
            row = row + 1;

            // const row = number ? number + 1 : 1;
            // console.log(row);

            setnumber(row);
          } finally {
            setLoad(false)
          }
        });
        // row == communities.length && push(COMMUNITIES_URL);
        // setnumber(row);
      } else {
        setnumber(0);
      }
    }

  };
  return (
    <>
      {load && (
        <div className=" w-full h-screen flex flex-col gap-2 justify-center items-center text-black">
          <Spinner
            // label="Loading . . . "
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
              {topic &&
                topic.length > 0 &&
                topic?.map((community) => (
                  <CheckboxCommunityChip
                    description={`${community?.description}`}
                    key={community?._id}
                    id={`${community?._id}`}
                    name={community?.name}
                    label={community?.name}
                    register={register('communities', { required: true })}
                    value={community?._id}
                    gettopic={getTopic}
                    item={community}
                    // getTopic={getTopic}
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
              type="submit"
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
