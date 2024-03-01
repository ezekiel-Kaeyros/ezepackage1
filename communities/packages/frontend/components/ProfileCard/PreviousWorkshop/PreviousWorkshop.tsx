import { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import {
  Root,
  Header,
  Title,
  NameUser,
  Container,
  ItemWorkshop,
  SubTitle,
  Date,
  Vile,
  ContentItem,
  ContentLocalisation,
  Pagination,
  Img
} from './style';

import { Button, Link, P, Spacing } from '../../ui';
import { RootState } from '../../../store';
import profile1 from '../../public/community/profile/profile.svg';
import { initialWorkshop } from './dataWorkshop';
import { useInfiniteScroll, timeAgo } from '../../../utils';
import { DataLimit, UserRole } from '../../../constants';
import AddAbout from '../AddAbout';
import EditIcon from '../../../public/profileContent/edit.svg';
import AddIcon from '../../../public/profileContent/add.svg';
import NextIcon from '../../../public/profileContent/workshop/arrow-right.svg'

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

const PreviousWorkshop = () => {
  const [searchValue, setSearchValue] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);

  const [searchQuery, setSearchQuery] = useState('');
  const { data: usersTotal, isFetching: isFetchingTotal } = useQuery('usersTotal', fetchUsersTotal);
  const [workshop, setWorkshop] = useState(initialWorkshop);
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


<Spacing bottom="sm">
      <Root>

        <Header>
            <Title>Previous workshop </Title>
          <Image alt="icon card"  src={AddIcon} />
        </Header>
        <Spacing bottom="sm" />
        {workshop.map((itemWork) => 
            {
                return (
                   <>
                    
                    <Container key={itemWork.idWorkshop}>
                        <ItemWorkshop>
                            <Image alt="image workshop" src={itemWork.workshopIcon}/>
                            <ContentItem>
                                <SubTitle>{itemWork.titleWorkshop}</SubTitle>
                                <ContentLocalisation>
                                    <Date>
                                    {itemWork.dateWorkshop}
                                    </Date>
                                    <Vile>
                                    {itemWork.vileWorkshop}
                                    </Vile>
                                </ContentLocalisation>
                            </ContentItem>
                            
                        </ItemWorkshop>
                        <Img>
                        <Image alt="icon edit" src={EditIcon}/>
                        </Img>
                    </Container>
                    <Spacing bottom="sm" />
                 </>
              
                )
            }
        )}    
    
        <Pagination>
        See all <Image alt="icon see all" src={NextIcon}/>
        </Pagination>
                  
       
      </Root>
      </Spacing>
</>

  );
};
export default PreviousWorkshop;

