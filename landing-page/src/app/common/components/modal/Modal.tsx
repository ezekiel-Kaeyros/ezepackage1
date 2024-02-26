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

const CustomModal: React.FC<ModalPropsType & ModalProps> = ({
  children,
  title,
  isOpen,
  closeButtonTitle,
  validateButtonTitle,
  onClose,
  onValidateButton,
}) => {
  return (
    // eslint-disable-next-line react/no-children-prop
    <Modal backdrop="blur" isOpen={isOpen} onClose={onClose}>
      <ModalContent className="bg-cardDark overflow-y-scroll h-8/12 xl:h-[80vh] xl:max-w-2xl">
        {(onClose) => (
          <>
            <ModalHeader
              className="flex 
             flex-col gap-1"
            >
              {title}
            </ModalHeader>
            <ModalBody>{children}</ModalBody>
            <ModalFooter>
              {closeButtonTitle && (
                <Button variant="secondary" onClick={onClose}>
                  {closeButtonTitle}
                </Button>
              )}
              {validateButtonTitle && (
                <Button onClick={onValidateButton}>
                  {validateButtonTitle}
                </Button>
              )}
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
};

export default CustomModal;
