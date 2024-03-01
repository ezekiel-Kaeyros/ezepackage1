import { FC, useState, FormEvent, useEffect } from 'react';
import { Modal, Button, Text, Spacing, InputText, Select } from '../../ui';
import { openAlert, AlertTypes } from '../../../store/alert';
import { useQueryClient } from 'react-query';
import { UserRole } from '../../../constants';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import IconAddUser from '../../../public/community/profile/add.svg';
import Image from 'next/image';
import Textarea from '../../ui/Textarea';
import {Button3} from '../AddAbout/style';
import {MyButton, TableOfContentsContainer, CheckboxContainer, CheckboxLabel, ListContent, OurInput, Button1} from './style';
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

interface User {
  fullName: string;
  email: string;
  password: string;
  role: string;
}

const createUser = async (user: User) => {
  const response = await axios.post('/settings/create-user', user);
  return response;
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
const INITIAL_STATE = {
  fullName: '',
  email: '',
  password: '',
  role: UserRole.Regular,
};

interface SettingsCreateUserProps {
  searchQuery: string;
}

const AddExpertize: FC<SettingsCreateUserProps> = ({ searchQuery }) => {
  const [values, setValues] = useState(INITIAL_STATE);
  const [errorMessage, setErrorMessage] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const queryClient = useQueryClient();
  const dispatch = useDispatch();

  const onChange = (e: FormEvent<HTMLInputElement>) => {
    const { name, value } = e.target as HTMLInputElement;
    setValues({ ...values, [name]: value });
  };

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage('');
    try {
      const createdUser = await createUser(values);

      queryClient.setQueryData(['adminUsers', searchQuery], (existingUsers: any) => {
        return {
          pages: [[createdUser.data, ...existingUsers.pages[0]]],
        };
      });
      setIsPopupOpen(false);
      dispatch(
        openAlert({
          message: `The user has been successfully created`,
          type: AlertTypes.Success,
        })
      );
    } catch (error) {
      setErrorMessage(error.response.data);
      dispatch(
        openAlert({
          message: 'An error occurred while creating a user.',
          type: AlertTypes.Error,
        })
      );
    }
  };

  useEffect(() => {
    if (isPopupOpen) {
      setErrorMessage('');
    }

    return () => {
      setErrorMessage('');
      setValues(INITIAL_STATE);
    };
  }, [isPopupOpen]);

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
      
      <Button3 onClick={() => setIsPopupOpen(true)}>
      Add expertise
    </Button3>

      <Modal isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} title="Add an expertise to your profile">
        <form onSubmit={onSubmit}>
     
        <Spacing bottom="xs" />
        <OurInput>
            <InputText name="name" label="Expertise*" placeholder="Expertise" value={values.fullName} onChange={onChange} />
         
        </OurInput>
        
        <Spacing bottom="lg" />
        <TableOfContentsContainer>
      <h2>Table of Contents</h2>
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
          
          {errorMessage && (
            <Spacing top="sm">
              <Text color="error">{errorMessage}</Text>
            </Spacing>
          )}
           
           {/* <Spacing top="lg" bottom="lg" /> */}
          {/* <Button color="primary">Create user</Button> */}
          
          <MyButton>
       
          <Button1 colored='#FF0505' border='1px solid #FF0505' background='#fff'>Cancel</Button1>
          <Button1 colored='#47586E' border='none'  background='var(--colors-button-disabled, #D9E8E4)'>save</Button1>
       
          </MyButton>
        
        </form>
      </Modal>
    </>
  );
};

export default AddExpertize;
