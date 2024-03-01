import { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import {
  Root,
  ImageContainer,
  MyButton,
  FullName,
  Description,
} from './style';

import { Button, Link, P, Spacing } from '../ui';
import { RootState } from '../../store';
import profile1 from '../../public/community/profile/profile.svg';

import { useInfiniteScroll, timeAgo } from '../../utils';
import { DataLimit, UserRole } from '../../constants';
import AddAbout from './AddAbout';
import briefcase from '../../public/profile/briefcase.svg';
import AddTraining from './AddTraining/AddTraining';

const fetchUsers = async ({ queryKey, pageParam = 0 }) => {
  const [, searchQuery] = queryKey;
  const { data } = await axios.get(
    `/settings/users?offset=${pageParam}&limit=${DataLimit.AdminUsers}&searchQuery=${searchQuery}`
  );
  return data;
};

const fetchUsersTotal = async () => {
  const { data } = await axios.get('/settings/users-total');
  return data;
};

const TrainingCard = () => {
  const [searchValue, setSearchValue] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);

  const [searchQuery, setSearchQuery] = useState('');
  const { data: usersTotal, isFetching: isFetchingTotal } = useQuery('usersTotal', fetchUsersTotal);
  
  const {
    data: users,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteScroll({
    key: ['adminUsers', searchQuery],
    apiCall: fetchUsers,
    dataLimit: DataLimit.AdminUsers,
  });

  const onSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };


  return (

<>


<Spacing bottom="md">
      <Root>

        <ImageContainer>
          <Image alt="icon card" width={60} height={50} src={briefcase} />
        </ImageContainer>
                    
        <FullName> Be sure to add Academic Training </FullName>
        <Description>We recommend that you add a training course to your space to enhance your experience.</Description>
                  
        <MyButton>
        <AddTraining searchQuery={searchQuery} /> 
        
        </MyButton>

          {/* {authUser && <Spacing bottom="md"></Spacing>} */}
      </Root>
      </Spacing>
</>

  );
};
export default TrainingCard;

