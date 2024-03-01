import { FC, useState, FormEvent, useEffect } from 'react';
import { Modal, Button, Text, Spacing, InputText, Select } from '../../ui';
import { openAlert, AlertTypes } from '../../../store/alert';
import { useQueryClient } from 'react-query';
import { UserRole } from '../../../constants';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import {Button3} from '../AddAbout/style';
import IconAddUser from '../../../public/community/profile/add.svg';
import Image from 'next/image';
import {DateWorkshop, Day, MyTextarea, MyButton, BtnAddMedia, Button1} from './style';
import Textarea from '../../ui/Textarea';
import AddMedia from '../../../public/profile/add-square (1).svg';


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

const AddTraining: FC<SettingsCreateUserProps> = ({ searchQuery }) => {
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
    
        Add training
      </Button3>

      <Modal isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} title="Add a training course">
        <form onSubmit={onSubmit}>
          
          <InputText name="name" label="Institute*" placeholder="Ex: Institute of...." value={values.fullName} onChange={onChange} />
          
          <Spacing bottom="sm" />

          <InputText name="name" label="Diploma*" placeholder="Ex: Master Degree" value={values.fullName} onChange={onChange} />
          <Spacing bottom="sm" />
         
          <InputText name="name" label="Field of study*" placeholder="Ex: Software engineering" value={values.fullName} onChange={onChange} />
          <Spacing bottom="sm" />
          <InputText name="name" label="Year of graduation*" placeholder="Ex: September 2021" value={values.fullName} onChange={onChange} />
          
         
         

        <h2>Medias</h2>
        <p>Add media such as images, documents, websites or presentations. </p>
        <BtnAddMedia>
        <Button>
          <Image alt="add media" src={AddMedia} />
           Add media</Button>
        </BtnAddMedia>
          
        {/*   {errorMessage && (
            <Spacing top="sm">
              <Text color="error">{errorMessage}</Text>
            </Spacing>
          )} */}
          
          <MyButton>
       
          <Button1 colored='#FF0505' border='1px solid #FF0505' background='#fff'>Cancel</Button1>
          <Button1 colored='#47586E' border='none'  background='var(--colors-button-disabled, #D9E8E4)'>save</Button1>
       
          </MyButton>
          
        </form>
        
      </Modal>
    </>
  );
};

export default AddTraining;
