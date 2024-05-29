'use client';
import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { FirstStepFormValues } from './firstStep';
import CheckboxChip from '../checkbox-chip/CheckboxChip';
import { Button } from '../../button/Button';
import ChannelService from '@/services/channelService';
import { useAuth } from '@/app/hooks/useAuth';

const topics = [
  {
    id: 1,
    name: 'topic',
    title: 'Health Sciences',
    value: 'Health Sciences',
  },
  {
    id: 2,
    name: 'topic',
    title: 'Mines',
    value: 'Mines',
  },
  {
    id: 3,
    name: 'topic',
    title: 'ICT',
    value: 'ICT',
  },
  {
    id: 4,
    name: 'topic',
    title: 'Agro-food Sciences',
    value: 'Agro-food Sciences',
  },
  {
    id: 5,
    name: 'topic',
    title: 'Energy',
    value: 'Energy',
  },
  {
    id: 6,
    name: 'topic',
    title: 'Social Sciences',
    value: 'Social Sciences',
  },
  ,
  {
    id: 7,
    name: 'topic',
    title: 'Data Analytics',
    value: 'Data Analytics',
  },
];

const professionCategory = [
  {
    id: 1,
    name: 'professionCategory',
    title: 'Technology or IT Specialist',
    value: 'Technology or IT Specialist',
  },
  {
    id: 2,
    name: 'professionCategory',
    title: 'Medical Professional',
    value: 'Medical Professional',
  },
  {
    id: 3,
    name: 'professionCategory',
    title: 'Entrepreneur',
    value: 'Entrepreneur',
  },
  {
    id: 4,
    name: 'professionCategory',
    title: 'Environmental Scientist',
    value: 'Environmental Scientist',
  },
  {
    id: 5,
    name: 'professionCategory',
    title: 'Industry Professional',
    value: 'Industry Professional',
  },
  {
    id: 6,
    name: 'professionCategory',
    title: 'Student',
    value: 'Student',
  },

  {
    id: 7,
    name: 'professionCategory',
    title: 'Educator',
    value: 'Educator',
  },
  {
    id: 8,
    name: 'professionCategory',
    title: 'Healthcare and Wellness',
    value: 'Healthcare and Wellness',
  },
  ,
  {
    id: 9,
    name: 'professionCategory',
    title: 'Other',
    value: 'Other',
  },
];

const FirstStep = () => {
  const [topic, setTopic] = useState<{
    authRequired: string;
    createdAt: string;
    description: string;
    name: string;
    order: 0;
    updatedAt: string;
    __v: 0;
    _id: string;
  }[]>();
  const {
    register,
    handleSubmit,
    watch,
    formState: { isValid, errors },
  } = useForm<FirstStepFormValues>();
  let top=watch('topic')
  useEffect(() => {
    const response = new ChannelService()
      .channel()
      .then((result) => {
        console.log('result======', result.data);
        setTopic(result.data)
      })
      .catch((error) => {
        console.log('error==============', error);
      });
  }, []);
  useEffect(()=>{console.log('top2222222222',top);
  },[top])
  const onSubmit: SubmitHandler<FirstStepFormValues> = (data) => {
    // const user = new AuthService().login(data);
  };

  return (
    <form className="lg:max-w-2xl" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold text-3xl">Choose a topic</h1>
        <div className="flex mt-6 flex-wrap gap-2">
          {topic && topic.length>0 && topic?.map((topic) => (
            <CheckboxChip
              key={topic?._id}
              id={`${topic?._id}`}
              name={topic?.name}
              label={topic?.name}
              register={register('topic', { required: true })}
              value={topic?.name}
            />
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h1 className="font-bold text-3xl">What is your profession category</h1>
        <div className="flex mt-6 flex-wrap gap-2">
          {professionCategory?.map((professionCat) => (
            <CheckboxChip
              key={professionCat?.id}
              id={`${professionCat?.id}`}
              name={professionCat?.name}
              label={professionCat?.title}
              register={register('professionCategory', { required: true })}
              value={professionCat?.value}
            />
          ))}
        </div>
      </div>
      <div className="mt-8">
        <Button href={`/onboarding?step=2`} className="w-fit">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default FirstStep;
