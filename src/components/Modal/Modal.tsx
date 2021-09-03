import React, { ReactElement, ReactNode } from 'react';
import style from './modal.module.scss';

interface PropsType {
  active: boolean;
  setActive: (value: boolean) => void;
  children: ReactNode | null;
  onClose?: () => void;
}

const Modal = ({ active, setActive, children, onClose = (): void => {} }: PropsType): ReactElement => {
  const handlerClose = (): void => {
    setActive(false);
    onClose();
  };

  return (
    <div className={active ? [style.modal, style.active].join(' ') : style.modal} onClick={handlerClose}>
      <div
        className={active ? [style.content, style.active].join(' ') : style.content}
        onClick={(event): void => {
          event.stopPropagation();
        }}
      >
        {active ? children : null}
      </div>
    </div>
  );
};

Modal.defaultProps = {
  onClose: (): void => {},
};

export default Modal;
