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
import {MyButton, MyTextarea, Button1, Button3} from './style';

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

const INITIAL_STATE = {
  fullName: '',
  email: '',
  password: '',
  role: UserRole.Regular,
};

interface SettingsCreateUserProps {
  searchQuery: string;
}

const AddAbout: FC<SettingsCreateUserProps> = ({ searchQuery }) => {
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

  return (
    <>
      
    <Button3 onClick={() => setIsPopupOpen(true)}>
    Add About
    </Button3>
      <Modal isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} title="Modify your information">
        <form onSubmit={onSubmit}>
     
        <Spacing bottom="xs" />
        <MyTextarea>
        <Textarea value="Enter message..." label="Describe yourself in a few words. You can talk about your experience, your field of activity, your
            skills, your achievements or your previous job." borderColor="main" GreyColors/>
        </MyTextarea>
        <Spacing bottom="lg" />
      
          
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

export default AddAbout;
