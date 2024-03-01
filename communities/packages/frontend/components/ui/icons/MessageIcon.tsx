import React, { FC } from 'react';
import theme from '../../../theme';

interface MessageIconProps {
  width?: string;
  isActive?: boolean;
}

const MessageIcon: FC<MessageIconProps> = ({ width, isActive }) => {
  const DEFAULT_WIDTH = '32';
  const ACTIVE_COLOR = theme.colors.general.link;

  return (
    <svg width={width || DEFAULT_WIDTH} height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M2.66699 17.8693V9.89601C2.66699 6.21601 5.65366 3.24268 9.33366 3.24268H22.667C26.347 3.24268 29.3337 6.21601 29.3337 9.89601V19.2027C29.3337 22.8693 26.347 25.8427 22.667 25.8427H20.667C20.2537 25.8427 19.8537 26.0427 19.6003 26.376L17.6003 29.0293C16.7203 30.2027 15.2803 30.2027 14.4003 29.0293L12.4003 26.376C12.187 26.0827 11.707 25.8427 11.3337 25.8427H9.33366C5.65366 25.8427 2.66699 22.8693 2.66699 19.2027V17.8693Z"
        fill={isActive ? ACTIVE_COLOR : '#A3ADBB'}
      />
      <path
        d="M22.6663 12.2427H9.33301C8.78634 12.2427 8.33301 11.7893 8.33301 11.2427C8.33301 10.696 8.78634 10.2427 9.33301 10.2427H22.6663C23.213 10.2427 23.6663 10.696 23.6663 11.2427C23.6663 11.7893 23.213 12.2427 22.6663 12.2427Z"
        fill={isActive ? ACTIVE_COLOR : '#A3ADBB'}
      />
      <path
        d="M17.333 18.9097H9.33301C8.78634 18.9097 8.33301 18.4563 8.33301 17.9097C8.33301 17.363 8.78634 16.9097 9.33301 16.9097H17.333C17.8797 16.9097 18.333 17.363 18.333 17.9097C18.333 18.4563 17.8797 18.9097 17.333 18.9097Z"
        fill={isActive ? ACTIVE_COLOR : '#A3ADBB'}
      />
    </svg>
  );
};

export default MessageIcon;
