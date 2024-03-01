import React, { FC } from 'react';
import theme from '../../../theme';

interface HomeIconProps {
  width?: string;
  color?: string;
  isActive?: boolean;
}

const HomeIcon: FC<HomeIconProps> = ({ width, isActive }) => {
  const DEFAULT_WIDTH = '18';
  const DEFAULT_COLOR = '#A3ADBB';
  const ACTIVE_COLOR = '#015E44';

  return (
    <svg
      width={width || DEFAULT_WIDTH}
      height="33"
      viewBox="0 0 32 33"
      fill={(isActive && ACTIVE_COLOR) || DEFAULT_COLOR}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        opacity="0.4"
        d="M26.72 9.66975L19.04 4.29641C16.9467 2.82975 13.7333 2.90975 11.72 4.46975L5.03999 9.68308C3.70665 10.7231 2.65332 12.8564 2.65332 14.5364V23.7364C2.65332 27.1364 5.41332 29.9097 8.81332 29.9097H23.1867C26.5867 29.9097 29.3467 27.1497 29.3467 23.7497V14.7097C29.3467 12.9097 28.1867 10.6964 26.72 9.66975Z"
        fill={(isActive && ACTIVE_COLOR) || DEFAULT_COLOR}
      />
      <path
        d="M16 25.5762C15.4533 25.5762 15 25.1228 15 24.5762V20.5762C15 20.0295 15.4533 19.5762 16 19.5762C16.5467 19.5762 17 20.0295 17 20.5762V24.5762C17 25.1228 16.5467 25.5762 16 25.5762Z"
        fill={(isActive && ACTIVE_COLOR) || DEFAULT_COLOR}
      />
    </svg>
  );
};

export default HomeIcon;
