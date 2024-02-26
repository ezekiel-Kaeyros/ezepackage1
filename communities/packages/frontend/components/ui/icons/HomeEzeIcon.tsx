import React, { FC } from 'react';
import theme from '../../../theme';

interface HomeEzeIconProps {
  width?: string;
  color?: string;
}

const HomeEzeIcon: FC<HomeEzeIconProps> = ({ width }) => {
  const DEFAULT_WIDTH = '22';

  return (
    <svg width="80" height="80" viewBox="0 0 87 59" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10.5195 21.3291C10.5195 24.0534 8.23941 26.2618 5.42675 26.2618C2.61409 26.2618 0.333984 24.0534 0.333984 21.3291C0.333984 18.6049 2.61409 16.3965 5.42675 16.3965C8.23941 16.3965 10.5195 18.6049 10.5195 21.3291Z"
        fill="white"
      />
      <path
        d="M0.870383 32.7931C0.870383 30.0764 3.03049 27.8741 5.69511 27.8741C8.35974 27.8741 10.5198 30.0764 10.5198 32.7931V44.8172C10.5198 47.5339 8.35974 49.7362 5.69511 49.7362C3.03049 49.7362 0.870383 47.5339 0.870383 44.8172V32.7931Z"
        fill="white"
      />
      <path
        d="M22.3133 5.46551C22.3133 8.48403 19.9132 10.931 16.9525 10.931C13.9918 10.931 11.5916 8.48403 11.5916 5.46551C11.5916 2.44699 13.9918 0 16.9525 0C19.9132 0 22.3133 2.44699 22.3133 5.46551Z"
        fill="white"
      />
      <path
        d="M12.1271 16.943C12.1271 14.2263 14.2872 12.024 16.9518 12.024C19.6164 12.024 21.7765 14.2263 21.7765 16.943V44.8171C21.7765 47.5338 19.6164 49.7361 16.9518 49.7361C14.2872 49.7361 12.1271 47.5338 12.1271 44.8171V16.943Z"
        fill="white"
      />
      <path
        d="M34.1065 21.5888C34.1065 24.4563 31.8264 26.781 29.0137 26.781C26.2011 26.781 23.921 24.4563 23.921 21.5888C23.921 18.7212 26.2011 16.3965 29.0137 16.3965C31.8264 16.3965 34.1065 18.7212 34.1065 21.5888Z"
        fill="white"
      />
      <path
        d="M24.4575 32.7931C24.4575 30.0764 26.6177 27.8741 29.2823 27.8741C31.9469 27.8741 34.107 30.0764 34.107 32.7931V44.8172C34.107 47.5339 31.9469 49.7362 29.2823 49.7362C26.6177 49.7362 24.4575 47.5339 24.4575 44.8172V32.7931Z"
        fill="white"
      />
      <path
        d="M34.1064 58.5761C29.3416 55.7694 23.4376 54.1087 17.0441 54.1087C11.5007 54.1087 6.32532 55.3571 1.94136 57.5185C6.0378 54.0413 11.4759 51.9224 17.443 51.9224C23.9932 51.9224 29.906 54.4756 34.1064 58.5761Z"
        fill="white"
      />
      <path
        d="M54.4271 49.5338H45.9159C43.214 49.5338 41.3113 49.0437 40.208 48.0634C39.1273 47.0593 38.5869 45.3021 38.5869 42.7917V24H54.4271V28.4469H43.2815V34.4359H51.0834L50.7457 38.8828H43.2815V42.4331C43.2815 43.4372 43.4954 44.1306 43.9232 44.5131C44.351 44.8956 45.1278 45.0869 46.2537 45.0869H54.4271V49.5338Z"
        fill="white"
      />
      <path
        d="M69.5401 49.5338H59.0362C57.8879 49.5338 56.9985 49.2828 56.368 48.7807C55.7601 48.2547 55.4561 47.5255 55.4561 46.5931C55.4561 45.6607 55.8277 44.6805 56.5707 43.6524L64.609 33.0731H56.5707V29.0566H69.8778V32.6069L60.2859 45.5172H69.5401V49.5338Z"
        fill="white"
      />
      <path
        d="M86.5806 40.389H75.3337C75.3337 42.2538 75.6039 43.6166 76.1443 44.4772C76.7072 45.3379 77.8218 45.7683 79.488 45.7683C80.5688 45.7683 81.3681 45.4097 81.886 44.6924C82.4038 43.9513 82.6628 43.246 82.6628 42.5766H86.6144C86.6144 45.1347 85.9614 47.0115 84.6555 48.2069C83.372 49.4023 81.6608 50 79.5218 50C77.4052 50 75.7615 49.6772 74.5907 49.0317C72.1814 47.7168 70.9768 44.2262 70.9768 38.56C70.9768 35.189 71.6636 32.7264 73.0371 31.1724C74.4106 29.5945 76.5046 28.8055 79.3191 28.8055C84.2051 28.8055 86.6482 31.6864 86.6482 37.4483C86.6482 38.0699 86.6256 39.0501 86.5806 40.389ZM75.4351 37.1972H82.6628C82.6628 35.6193 82.3813 34.4717 81.8184 33.7545C81.2555 33.0372 80.3886 32.6786 79.2178 32.6786C78.0695 32.6786 77.1463 33.0492 76.4483 33.7903C75.7728 34.5076 75.4351 35.6432 75.4351 37.1972Z"
        fill="white"
      />
    </svg>
  );
};

export default HomeEzeIcon;