import { ReactNode } from 'react';

export type ModalPropsType = {
  title?: string;
  children?: ReactNode;
  isOpen?: boolean;
  onClose?: any;
  closeButtonTitle?: string;
  validateButtonTitle?: string;
  // onValidateButton?: () => void;
  onValidateButton?: any;
  id?: any;
};
