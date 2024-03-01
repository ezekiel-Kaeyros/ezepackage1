import { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import {
  Root,
  Header,
  Title,
  Filiere,
  Container,
  ItemWorkshop,
  School,
  Date,
  Vile,
  ContentItem,
  ContentLocalisation,
  Pagination

} from './style';

import { Button, Link, P, Spacing } from '../../ui';
import { RootState } from '../../../store';
import profile1 from '../../public/community/profile/profile.svg';
import { initialTraining } from './dataTraining';
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

const TrainingPreview = () => {
  const [searchValue, setSearchValue] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);

  const [searchQuery, setSearchQuery] = useState('');
  const { data: usersTotal, isFetching: isFetchingTotal } = useQuery('usersTotal', fetchUsersTotal);
  const [training, setTraining] = useState(initialTraining);
 


  return (

<>


<Spacing bottom="sm">
      <Root>

        <Header>
            <Title>Training</Title>
          <Image alt="icon card"  src={AddIcon} />
        </Header>
        <Spacing bottom="sm" />
        {training.map((itemTraining) => 
            {
                return (
                   <>
                    
                    <Container key={itemTraining.idTraining}>
                        <ItemWorkshop>
                            
                            <ContentItem>
                                <School>{itemTraining.school}</School>
                                <Filiere>{itemTraining.filiere}</Filiere>
                                <Date>
                                    {itemTraining.years}
                                    </Date>
                                
                            </ContentItem>
                            
                        </ItemWorkshop>
                        <Image alt="icon edit" src={EditIcon}/>
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
export default TrainingPreview;

