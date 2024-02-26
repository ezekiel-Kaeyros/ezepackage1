'use client'
import { useState } from 'react';
import LeftInsights from './left/LeftInsights';
import RightInsights from './rigth/RightInsights';
import { DivWrapInsignPage, DivInsideWrapInsignPage } from './style';
import cubeActive from '../../public/3dcube.svg';
import cubeNotActive from '../../public/3dcube2.svg';
import peopleNotActive from '../../public/people2.svg';
import peopleActive from '../../public/people.svg';
import document from '../../public/document.svg';

const Insights = () => {

    const [state,setState]=useState<string>('1')
    const UpdateState=(id:string)=>{
        setState(id)
    }
    const MenuLeftArray: any[] = [
      { id: '1', title: 'Overview', state, UpdateState, img1: cubeActive, img2: cubeNotActive },
      { id: '2', title: 'Your Community', state, UpdateState, img1: peopleActive, img2: peopleNotActive },
      { id: '3', title: 'Content', state, UpdateState, img1: document, img2: document },
    ];
  return (
    <DivWrapInsignPage>
      <DivInsideWrapInsignPage>
        <LeftInsights data={MenuLeftArray} />
        <RightInsights step={state} UpdateState={UpdateState} />
      </DivInsideWrapInsignPage>
    </DivWrapInsignPage>
  );
};
export default Insights;
