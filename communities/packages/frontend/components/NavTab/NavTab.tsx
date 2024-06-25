/* eslint-disable @next/next/link-passhref */
import React, { FC, ReactNode } from 'react';
import { Icon, Line, Root } from './style';
import { ButtonLink } from '../ui';

export interface NavTabProps {
  icon: ReactNode;
  link: string;
  isActive?: boolean;
}

const NavTab: FC<NavTabProps> = ({ icon, link, isActive }) => {
  return (
    <ButtonLink href={`/${link}`}>
      <Root >
        {icon}
        {isActive && <Line />}
      </Root>
    </ButtonLink>
  );
};

export default NavTab;
