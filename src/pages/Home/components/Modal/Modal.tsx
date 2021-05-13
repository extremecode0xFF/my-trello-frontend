import React, { ReactElement } from 'react';
import style from './modal.module.scss';

interface PropsType {
  active: boolean;
  setActive: (value: boolean) => void;
  children: ReactElement | null;
}

const Modal = ({ active, setActive, children }: PropsType): ReactElement => (
  <div className={active ? [style.modal, style.active].join(' ') : style.modal} onClick={(): void => setActive(false)}>
    <div
      className={active ? [style.content, style.active].join(' ') : style.content}
      onClick={(event): void => {
        event.stopPropagation();
      }}
    >
      {children}
    </div>
  </div>
);

export default Modal;
