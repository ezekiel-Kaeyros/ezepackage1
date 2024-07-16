import { FC } from 'react';
import Seo from '../components/Seo';
import { NotFound } from '../components/ui';
import ComingSoon from './commingSoon';

const NotFoundPage: FC = () => {
  return (
    <>
      <Seo title="Not Found" />
      {/* <NotFound message="we can't find the page you're looking for" /> */}
      <ComingSoon />
    </>
  );
};

export default NotFoundPage;
