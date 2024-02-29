'use client';
import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { SecondStepFormValues } from './secondStep';
import { Button } from '../../button/Button';
import CheckboxCommunityChip from '../checkbox-community-chip/CheckboxCommunityChip';
import { redirect, useRouter } from 'next/navigation';
import { isFirstTime } from '@/cookies/cookies';

const COMMUNITIES_URL = 'https://communities.eze.wiki/';
const communities = [
  {
    id: 1,
    name: 'community',
    title: 'Health Sciences',
    value: 'Health Sciences',
    description:
      'Quantitative researchers on microbiology research. With discussion on advanced technique',
  },
  {
    id: 2,
    name: 'community',
    title: 'Mines',
    value: 'Mines',
    description:
      'Mines researchers on microbiology research. With discussion on advanced technique',
  },
  {
    id: 3,
    name: 'community',
    title: 'ICT',
    value: 'ICT',
    description:
      'ICT researchers on microbiology research. With discussion on advanced technique',
  },
  {
    id: 4,
    name: 'community',
    title: 'Agro-food Sciences',
    value: 'Agro-food Sciences',
    description:
      'Agro-food researchers on microbiology research. With discussion on advanced technique',
  },
  {
    id: 5,
    name: 'community',
    title: 'Energy',
    value: 'Energy',
    description:
      'Energy researchers on microbiology research. With discussion on advanced technique',
  },
  {
    id: 6,
    name: 'community',
    title: 'Social Sciences',
    value: 'Social Sciences',
    description:
      'Social researchers on microbiology research. With discussion on advanced technique',
  },
  ,
  {
    id: 7,
    name: 'community',
    title: 'Data Analytics',
    value: 'Data Analytics',
    description:
      'Data Anal researchers on microbiology research. With discussion on advanced technique',
  },
];

const SecondStep = () => {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm<SecondStepFormValues>({
    mode: 'onChange' || 'onBlur' || 'onSubmit',
  });

  const { push } = useRouter();
  const onSubmit: SubmitHandler<SecondStepFormValues> = (data) => {
    // console.log('clicked');
    // isFirstTime('true');
    // push(COMMUNITIES_URL);
  };

  const handleSend = () => {
    isFirstTime('true');
    push(COMMUNITIES_URL);
  };

  return (
    <form className="w-11/12" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <h1 className="font-bold text-3xl">Choose at least one community</h1>
        <div className="flex mt-6 flex-wrap gap-2">
          {communities?.map((community) => (
            <CheckboxCommunityChip
              description={`${community?.description}`}
              key={community?.id}
              id={`${community?.description}`}
              name={community?.name}
              label={community?.title}
              register={register('communities', { required: true })}
              value={community?.value}
            />
          ))}
        </div>
      </div>

      <div className="mt-8 w-fit">
        <Button onClick={() => handleSend()} type="submit" className="w-fit">
          Continue
        </Button>
      </div>
    </form>
  );
};

export default SecondStep;
