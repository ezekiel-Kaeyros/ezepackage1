import React from 'react';
import PostCreateButton from '../PostCreateButton';
import HomeImageIcon from '../../ui/icons/HomeImageIcon';
import HomeArticleIcon from '../../ui/icons/HomeArticleIcon';
import HomeVideoIcon from '../../ui/icons/HomVideoIcon';
import HomeEventIcon from '../../ui/icons/HomeEventIcon';
import { Root } from './style';

export default function PostActivity() {
  return (
    <Root>
      <HomeImageIcon />
      <HomeArticleIcon />
      <HomeVideoIcon />
      <HomeEventIcon />
    </Root>
  );
}
