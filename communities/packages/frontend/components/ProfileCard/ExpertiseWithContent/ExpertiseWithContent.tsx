import { FC, FormEvent, useState } from 'react';
import { useSelector } from 'react-redux';
import { useQuery } from 'react-query';
import axios from 'axios';
import Image from 'next/image';
import {
  Root,
  Header,
  Title,
  TableOfContentsContainer,
  ListContent,
  CheckboxContainer,
  CheckboxLabel,
  Vile,
  ContentItem,
  ContentLocalisation,
  Pagination

} from './style';

import { Button, Link, P, Spacing } from '../../ui';
import { RootState } from '../../../store';
import profile1 from '../../public/community/profile/profile.svg';
//import { initialWorkshop } from './dataWorkshop';
import { useInfiniteScroll, timeAgo } from '../../../utils';
import { DataLimit, UserRole } from '../../../constants';
import AddAbout from '../AddAbout';
import EditIcon from '../../../public/profileContent/edit.svg';
import AddIcon from '../../../public/profileContent/add.svg';
import NextIcon from '../../../public/profileContent/workshop/arrow-right.svg'
import styled from 'styled-components';
import codeCircleIcon from '../../../public/expertiseModal/code-circle.svg';
import dataIcon from '../../../public/expertiseModal/data-2.svg';
import flashCircleIcon from '../../../public/expertiseModal/flash-circle.svg';
import messageProgrammingIcon from '../../../public/expertiseModal/message-programming.svg';
import mobileProgrammingIcon from '../../../public/expertiseModal/mobile-programming.svg';
import monitorIcon from '../../../public/expertiseModal/monitor.svg';
import pathIcon from '../../../public/expertiseModal/path.svg';
import penToolIcon from '../../../public/expertiseModal/pen-tool-2.svg';
import peopleIcon from '../../../public/expertiseModal/people.svg';
import searchNormalIcon from '../../../public/expertiseModal/search-normal.svg';
import speackerIcon from '../../../public/expertiseModal/speaker.svg';


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
const CircleCheckbox = styled.span<{ isChecked?: boolean }>`
  width: auto;
  height: 24px;
  padding: 20px 10px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  border: ${({ isChecked }) => (isChecked ? '1px solid #01533C' : '1px solid #B2BBC6')};
  justify-content: space-between;
  background-color: ${({ isChecked }) => (isChecked ? '#01533C' : '#ffff')};
  color: ${({ isChecked }) => (isChecked ? '#ffff' : '#000')};
  margin-right: 8px;
  cursor: pointer;
`;

const PreviousWorkshop = () => {
  const [searchValue, setSearchValue] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);

  const [sections, setSections] = useState([
    { id: '1', icon: messageProgrammingIcon,  title: 'Software Engineering', isChecked: false },
    { id: '2', icon: monitorIcon, title: 'Web Developer', isChecked: false },
    { id: '3', icon: pathIcon, title: 'Blogger', isChecked: false },
    { id: '4', icon: penToolIcon, title: 'UI/UX Designer', isChecked: false },
    { id: '5', icon: mobileProgrammingIcon, title: 'Frontend Developer', isChecked: false },
    { id: '6', icon: codeCircleIcon, title: 'Caught fire coding', isChecked: false },
    { id: '7', icon: flashCircleIcon, title: 'Founder', isChecked: false },
    { id: '8', icon: speackerIcon, title: 'Communication', isChecked: false },
    { id: '9', icon: searchNormalIcon, title: 'Research UX', isChecked: false },
    { id: '10', icon: dataIcon, title: 'Data Analytics', isChecked: false },
    { id: '11', icon: peopleIcon, title: 'Social media ', isChecked: false },
    { id: '12', icon: mobileProgrammingIcon, title: 'Backend Developer', isChecked: false },
    // Add more sections as needed
  ]);

  const handleCheckboxChange = (sectionId) => {
    setSections((prevSections) =>
      prevSections.map((section) =>
        section.id === sectionId
          ? { ...section, isChecked: !section.isChecked }
          : section
      )
    );
  };
  


  return (

<>


<Spacing bottom="sm">
      <Root>

        <Header>
            <Title>Expertise </Title>
          <span>
          <Image alt="icon card"  src={AddIcon} />
          <Image alt="icon card"  src={EditIcon} />
          </span>
        </Header>
        <Spacing bottom="sm" />
        <TableOfContentsContainer>
      <ListContent>
        {sections.map((section) => (
            <CheckboxContainer key={section.id}>
            <CircleCheckbox 
                isChecked={section.isChecked}
                onClick={() => handleCheckboxChange(section.id)}
            >
                {/* {section.isChecked && <span>&#10003;</span>} */}
               <span><Image alt="icon" src={section.icon} />&nbsp; </span>
                <CheckboxLabel htmlFor={section.id}>{section.title}</CheckboxLabel>
            </CircleCheckbox>
            
            </CheckboxContainer>
        ))}
      </ListContent>
    </TableOfContentsContainer>   
    
        <Pagination>
        See all <Image alt="icon see all" src={NextIcon}/>
        </Pagination>
                  
       
      </Root>
      </Spacing>
</>

  );
};
export default PreviousWorkshop;

