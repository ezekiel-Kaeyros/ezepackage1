import React, { FC } from 'react';
import { Cookies, setCookie } from '../../utils';

import { Root, StyledButton, Iframe, Link } from './style';

interface AnnouncementProps {
  setIsAnnouncementOpen: (isOpen: boolean) => void;
}

const Announcement: FC<AnnouncementProps> = ({ setIsAnnouncementOpen }) => {
  const onCloseClick = () => {
    setCookie(Cookies.Announcement_Disabled, 'true');
    setIsAnnouncementOpen(false);
  };

  return (
    <Root>
      <div>
        ☆ Welcome to EZE Platform {' '}☆
      </div>

      <StyledButton ghost color="white" onClick={onCloseClick}>
        ✕
      </StyledButton>
    </Root>
  );
};

export default Announcement;
