import { FC } from 'react';
import { useRouter } from 'next/router';
import { Messages } from '../../../components/Messages';
// import { isAuthorized, redirectToHome } from '../../../utils';
import { GetServerSideProps } from 'next';
import Seo from '../../../components/Seo';
import LayoutCommunities from '../../../components/Layout/CommuntiesLayout';
import { useDispatchAuth } from '../../../utils/useDispatchAuth';

const MessagesPage: FC = () => {
  const router = useRouter();
  const userId = router.query.id as string;

  useDispatchAuth();

  return (
    <LayoutCommunities hideRightSidebar containerMaxWidth="md" marginTop="none">
      <Seo title="Messages" />
      <Messages userId={userId} />
    </LayoutCommunities>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ req }) => {
  // const isAuth = await isAuthorized(req);
  // if (!isAuth) {
  //   return redirectToHome();
  // }

  return { props: {} };
};

export default MessagesPage;
