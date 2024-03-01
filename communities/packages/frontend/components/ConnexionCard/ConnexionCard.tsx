import React, { FC, Fragment, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';
import {
  Root,
  Item,
  Title,
  DescriptStat,
  OtherButton,
  Statistique,
  Img,
  ListConnexion
} from './style';
import addsquareIcon from '../../public/profile/add-square.svg'
import editIcon from '../../public/profile/edit.svg'
//import { Button, Link, P, Spacing } from '../ui';
import { RootState } from '../../store';
import DocumentIcon from '../../public/connexionCard/document-text.svg';
import TeacherIcon from '../../public/connexionCard/teacher.svg';
import MonitorIcon from '../../public/connexionCard/monitor.svg';
import PeopleIcon from '../../public/connexionCard/people.svg';

const ConnexionCard = () => {
  const authUser = useSelector((state: RootState) => state.auth.user);
//  const [profile, setProfile] = useState(initialSettingProfile);

  return (


      <Root>
       
      
            <Title>Connexion page</Title>
            
   
         <ListConnexion>
         <OtherButton background='rgba(230, 236, 252, 0.50)'>
              <Img><Image alt="icon card" src={DocumentIcon} /></Img>
              <DescriptStat>
                <Statistique>0</Statistique>
                <Item>Articles post</Item> 
              </DescriptStat>
          </OtherButton>
          <OtherButton background='rgba(230, 232, 211, 0.50)'>
              
              <Img>
              <Image alt="icon card" src={TeacherIcon} />
              </Img>
              <DescriptStat>
                <Statistique>0</Statistique>
                Certifications
              </DescriptStat>
          </OtherButton>
          <OtherButton background='rgba(237, 233, 233, 0.50)'>
              <Img><Image alt="icon card" src={MonitorIcon} /></Img>
              <DescriptStat>
                <Statistique>0</Statistique>
                Online courses
              </DescriptStat>
          </OtherButton>
          <OtherButton background='rgba(255, 230, 239, 0.50)'>
              <Img><Image alt="icon card" src={PeopleIcon} /></Img>
              <DescriptStat>
              <Statistique>3</Statistique>
              Communities
              </DescriptStat>
          </OtherButton>
         </ListConnexion>

          {/* {authUser && <Spacing top="md"></Spacing>} */}
      </Root>
  )
};
export default ConnexionCard;

