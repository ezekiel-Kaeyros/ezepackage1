import React, { FC, useState, useEffect, Fragment } from 'react';
import { useSelector } from 'react-redux';
import Image from 'next/image';

import { Button, Link, P, Spacing } from '../ui';
import Follow from '../Follow';
import theme from '../../theme';
import {BlockInsight , BlockOverview , BlockCommunity , BlockContent, ContentInsight} from './style';
import { RootState } from '../../store';
import Iconinsights from '../../public/InsightsCard/chart.svg';
import Iconoverview from '../../public/InsightsCard/3dcube.svg';
import Iconcommunity from '../../public/InsightsCard/people.svg';
import Iconcontent from '../../public/InsightsCard/document-copy.svg';







const InsightsCard = () => {
  const [color, setColor] = useState('');
  const authUser = useSelector((state: RootState) => state.auth.user);
 

  return (
    <Fragment>
        <ContentInsight>
            <BlockInsight>
                <Image alt="" src={Iconinsights}/>
                <span>Insights</span>
            </BlockInsight>
            <BlockOverview>
                <Image alt="" src={Iconoverview}/>
                <span>Overview</span>
            </BlockOverview>
            <BlockCommunity>
                <Image alt="" src={Iconcommunity}/>
                <span>Your Community</span>
            </BlockCommunity>
            <BlockContent>
                <Image alt="" src={Iconcontent}/>
                <span>Content</span>
            </BlockContent>
        </ContentInsight>
        
   </Fragment>

          
     
   
    
      
 
   

  
    
        
  

  );
};
export default InsightsCard;


