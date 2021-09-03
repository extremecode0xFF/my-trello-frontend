import { store, ReactNotificationOptions } from 'react-notifications-component';

const notification: ReactNotificationOptions = {
  title: 'Error',
  message: 'message',
  type: 'danger',
  insert: 'top',
  container: 'bottom-left',
  animationIn: ['animate__animated', 'animate__fadeIn'],
  animationOut: ['animate__animated', 'animate__fadeOut'],
  dismiss: {
    duration: 5000,
    onScreen: true,
  },
};

export const showErrorNotification = (message: string): void => {
  store.addNotification({ ...notification, message });
};
