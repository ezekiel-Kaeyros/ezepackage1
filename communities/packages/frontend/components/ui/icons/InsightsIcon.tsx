import React, { FC } from 'react';
import theme from '../../../theme';

interface InsightsIconProps {
  width?: string;
  color?: string;
}

const InsightsIcon: FC<InsightsIconProps> = ({ width, color }) => {
  const DEFAULT_WIDTH = '32';
  const DEFAULT_COLOR = theme.colors.general.textSecondary;

  return (
    <svg width={width || DEFAULT_WIDTH} height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        opacity="0.4"
        d="M21.587 3.24268H10.4137C5.56033 3.24268 2.66699 6.13601 2.66699 10.9893V22.1493C2.66699 27.016 5.56033 29.9093 10.4137 29.9093H21.5737C26.427 29.9093 29.3203 27.016 29.3203 22.1627V10.9893C29.3337 6.13601 26.4403 3.24268 21.587 3.24268Z"
        fill="#A3ADBB"
      />
      <path
        d="M9.17383 25.7761C8.62716 25.7761 8.17383 25.3228 8.17383 24.7761V22.0161C8.17383 21.4694 8.62716 21.0161 9.17383 21.0161C9.72049 21.0161 10.1738 21.4694 10.1738 22.0161V24.7761C10.1738 25.3361 9.72049 25.7761 9.17383 25.7761Z"
        fill="#A3ADBB"
      />
      <path
        d="M16 25.776C15.4533 25.776 15 25.3227 15 24.776V19.2427C15 18.696 15.4533 18.2427 16 18.2427C16.5467 18.2427 17 18.696 17 19.2427V24.776C17 25.336 16.5467 25.776 16 25.776Z"
        fill="#B2BBC6"
      />
      <path
        d="M22.8271 25.7762C22.2805 25.7762 21.8271 25.3229 21.8271 24.7762V16.4829C21.8271 15.9362 22.2805 15.4829 22.8271 15.4829C23.3738 15.4829 23.8271 15.9362 23.8271 16.4829V24.7762C23.8271 25.3362 23.3871 25.7762 22.8271 25.7762Z"
        fill="#A3ADBB"
      />
      <path
        d="M23.827 8.33598C23.827 8.26931 23.8003 8.18931 23.787 8.12264C23.7736 8.06931 23.7603 8.00264 23.747 7.94931C23.7203 7.89598 23.6803 7.85598 23.6536 7.80264C23.6136 7.74931 23.5736 7.68264 23.5203 7.64264C23.507 7.62931 23.507 7.61598 23.4936 7.61598C23.4536 7.58931 23.4136 7.57598 23.3736 7.54931C23.3203 7.50931 23.2536 7.46931 23.187 7.44264C23.1203 7.41598 23.0536 7.41598 22.987 7.40264C22.9336 7.38931 22.8936 7.37598 22.8403 7.37598H18.9336C18.387 7.37598 17.9336 7.82931 17.9336 8.37598C17.9336 8.92264 18.387 9.37598 18.9336 9.37598H20.6003C17.427 12.7093 13.427 15.056 8.93363 16.1893C8.4003 16.3226 8.06697 16.8693 8.2003 17.4026C8.30697 17.856 8.7203 18.1626 9.17363 18.1626C9.25363 18.1626 9.33363 18.1493 9.41363 18.136C14.1736 16.9493 18.427 14.4826 21.827 10.9893V12.2826C21.827 12.8293 22.2803 13.2826 22.827 13.2826C23.3736 13.2826 23.827 12.8293 23.827 12.2826V8.37598C23.827 8.36264 23.827 8.34931 23.827 8.33598Z"
        fill="#A3ADBB"
      />
    </svg>
  );
};

export default InsightsIcon;