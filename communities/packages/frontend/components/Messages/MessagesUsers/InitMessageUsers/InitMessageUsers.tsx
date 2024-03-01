import { FC, useState } from 'react';
import Image from 'next/image';
import { MyButton, Button1 } from './style';
import PlusBtn from '../../../../public/plus-btn.svg';
import ModalOverlay from '../../../ui/ModalOverlay';
import Search from '../../../Search';
import { useRouter } from 'next/router';

const InitMessageUsers: FC = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const router = useRouter();

  const onSearchItemClick = (user: any) => {
    router.push(`/communities/messages/${user._id}`, undefined, { shallow: true });
    setIsPopupOpen(false);
  };

  return (
    <>
      <Image style={{ cursor: 'pointer' }} src={PlusBtn} alt="EZE-edit-message" onClick={() => setIsPopupOpen(true)} />

      <ModalOverlay isOpen={isPopupOpen} close={() => setIsPopupOpen(false)} title="Your Friends">
        {/* Search bar */}
        <div style={{ position: 'relative', height: '20vh' }}>
          <Search
            backgroundColor={1}
            onlyUsers
            onItemClick={(user: any) => onSearchItemClick(user)}
            placeholder="Type a name of a member"
          />
        </div>

        <MyButton>
          <Button1 onClick={() => setIsPopupOpen(false)} colored="#FF0505" border="1px solid #FF0505" background="#fff">
            Cancel
          </Button1>
        </MyButton>
      </ModalOverlay>
    </>
  );
};

export default InitMessageUsers;
