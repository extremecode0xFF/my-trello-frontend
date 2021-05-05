import React from 'react';
import style from './modal.module.scss';

interface PropsType {
  active: boolean;
}

const Modal = ({ active }: PropsType): React.ReactElement => {
  // eslint-disable-next-line no-console
  console.log(active);
  return (
    <div className={style.modal}>
      <div className={style.modal__content} />
    </div>
  );
};

export default Modal;
