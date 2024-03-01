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
  SearchContainer,
  ImageSearch,
  InputSearch

} from './style';

import { Button, Link, P, Spacing } from '../../ui';
import { RootState } from '../../../store';
import profile1 from '../../public/community/profile/profile.svg';
import { initialCommunity } from './dataCommunity';
import { useInfiniteScroll, timeAgo } from '../../../utils';
import { DataLimit, UserRole } from '../../../constants';
import AddAbout from '../AddAbout';
import EditIcon from '../../../public/profileContent/edit.svg';
import AddIcon from '../../../public/profileContent/add.svg';
import NextIcon from '../../../public/profileContent/workshop/arrow-right.svg';
import PointIcon from '../../../public/profileContent/Point.svg'
import searchIcon from '../../../public/community/search-normal.svg';

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

const CommunityPreview = () => {
  const [searchValue, setSearchValue] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);

  const [searchQuery, setSearchQuery] = useState('');
  const { data: usersTotal, isFetching: isFetchingTotal } = useQuery('usersTotal', fetchUsersTotal);
  const [community, setCommunity] = useState(initialCommunity);
  const [isSearch, SetIsSearch] = useState(false);
  const [value2, setValue2] = useState('');
  const searchHandeler = (e: any) => {
    const value: string = e.target.value;
    if (value.trim().length > 0) {
      SetIsSearch(true);
      setValue2(value);
    } else {
      SetIsSearch(false);
    }
  };

  const onSearchFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchQuery(searchValue);
  };


  return (

<>


<Spacing bottom="sm">
      <Root>

        <Header>
            <Title>Communities Groups </Title>
            <SearchContainer>
                <ImageSearch>
                  <Image alt="icon card" src={searchIcon} />
                </ImageSearch>
                <InputSearch type="text" placeholder="Communities" onChange={searchHandeler} />
              </SearchContainer>
        </Header>
        <Spacing bottom="sm" />
        {community.map((itemWork) => 
            {
                return (
                   <>
                    
                    <Container key={itemWork.idCommunity}>
                        <ItemWorkshop>
                            <Image alt="image workshop" src={itemWork.communityLogo}/>
                            <ContentItem>
                                <SubTitle>{itemWork.associationCommunity}</SubTitle>
                                
                                <ContentLocalisation>
                                    <Date>
                                    {itemWork.MemberCommunity} &nbsp;<Image alt="point icon" src={PointIcon}/>
                                    </Date>
                                    
                                   
                                </ContentLocalisation>
                            </ContentItem>
                            
                        </ItemWorkshop>
                        {/* <Image alt="icon edit" src={EditIcon}/> */}
                    </Container>
                    <Spacing bottom="sm" />
                 </>
              
                )
            }
        )}    
    
        
                  
       
      </Root>
      </Spacing>
</>

  );
};
export default CommunityPreview;

