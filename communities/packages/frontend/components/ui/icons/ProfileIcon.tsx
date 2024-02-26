import React, { FC } from 'react';
import theme from '../../../theme';

interface ProfileIconProps {
  width?: string;
  color?: string;
}

const ProfileIcon: FC<ProfileIconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = '32';
  const DEFAULT_COLOR = theme.colors.general.textSecondary;

  return (
    <svg width={width || DEFAULT_WIDTH} height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M15.9997 16.576C19.6816 16.576 22.6663 13.5912 22.6663 9.90934C22.6663 6.22744 19.6816 3.24268 15.9997 3.24268C12.3178 3.24268 9.33301 6.22744 9.33301 9.90934C9.33301 13.5912 12.3178 16.576 15.9997 16.576Z"
        fill="#A3ADBB"
      />
      <path
        d="M15.9999 19.9097C9.31988 19.9097 3.87988 24.3897 3.87988 29.9097C3.87988 30.283 4.17322 30.5763 4.54655 30.5763H27.4532C27.8265 30.5763 28.1199 30.283 28.1199 29.9097C28.1199 24.3897 22.6799 19.9097 15.9999 19.9097Z"
        fill="#B2BBC6"
      />
    </svg>
  );
};

export default ProfileIcon;
