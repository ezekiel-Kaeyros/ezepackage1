import {
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalProps,
  Modal,
} from '@nextui-org/react';
import React from 'react';
import { ModalPropsType } from './modal';
import { Button } from '../button/Button';
import { usePathname } from 'next/navigation';

const CustomModal: React.FC<ModalPropsType & ModalProps> = ({
  children,
  title,
  isOpen,
  closeButtonTitle,
  validateButtonTitle,
  onClose,
  onValidateButton,
  id,
}) => {
  const pathname = usePathname();
  const lang1 = pathname.split('/');

  return (
    // eslint-disable-next-line react/no-children-prop
    <Modal backdrop="blur" isOpen={isOpen} onOpenChange={onClose}>
      {/* <ModalContent className="bg-cardDark overflow-y-scroll h-8/12 xl:h-[80vh] xl:max-w-2xl"> */}
      <ModalContent className="white h-8/12 xl:h-40 xl:max-w-2xl p-5">
        {/* {(onClose) => (
          <> */}
            {title && (
              <ModalHeader
                className="flex 
              flex-col gap-1"
              >
                {title}
              </ModalHeader>
            )}
            <ModalBody>
              {/* <div>
                <h1 className="font-medium text-xl text-red-600">
                  Are You sure you want to delete this client?
                </h1>
              </div> */}
              {children}
            </ModalBody>
            <ModalFooter>
              {closeButtonTitle && (
                <Button
                  className="bg-[lightgray] text-black rounded-md"
                  onClick={onClose}
                >
                  {closeButtonTitle}
                </Button>
              )}
              {validateButtonTitle && (
                <Button
                  className="bg-[lightgray] text-black rounded-md"
                  onClick={() => {
                    onValidateButton(lang1[4]);
                  }}
                >
                  {validateButtonTitle}
                </Button>
              )}
            </ModalFooter>
          {/* </>
        )} */}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
