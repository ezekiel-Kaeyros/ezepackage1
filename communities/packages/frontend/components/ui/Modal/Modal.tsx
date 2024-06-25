import React, { FC, useRef } from 'react';
import Overlay from '../Overlay';
import { Root, Heading } from './style';
import { H2, Container, Button } from '../../ui';
import { CloseIcon } from '../../ui/icons';
import IconClose from '../.././../public/close-square.svg'
import { useClickOutside } from '../../../utils';
import { Screen, Spacing } from '../../../theme';
import Image from 'next/image';

export interface ModalProps {
  children?: React.ReactNode;
  isOpen: boolean;
  close?: () => void;
  title?: string;
  hideTitleBorder?: boolean;
  maxWidth?: Screen;
  hideCloseButton?: boolean;
  padding?: Spacing;
  hideHeading?: boolean;
  noBorder?: boolean;
}

const Modal: FC<ModalProps> = ({
  children,
  isOpen,
  title,
  hideTitleBorder,
  close,
  maxWidth,
  hideCloseButton,
  padding,
  hideHeading,
  noBorder,
}) => {
  const contentRef = useRef(null);
  useClickOutside(contentRef, isOpen, () => {
    close();
  });

  if (!isOpen) {
    return null;
  }

  return (
    <Overlay>
      <Root>
        <Container padding={padding} bgColor="white" bordered={!noBorder} maxWidth={maxWidth || 'modal'} ref={contentRef}>
          {!hideHeading && (
            <Heading hideTitleBorder={hideTitleBorder}>
              {/* <div /> */}
              <H2>{title}</H2>

              {!hideCloseButton && (
                <Button ghost onClick={close}>
                  <Image alt="close icon" src={IconClose}/>
                  {/* <CloseIcon /> */}
                </Button>
              )}
            </Heading>
          )}
          {children}
        </Container>
      </Root>
    </Overlay>
  );
};

export default Modal;
