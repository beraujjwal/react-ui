import { isRejectedWithValue } from '@reduxjs/toolkit';
import { Notification } from '../../utils/Notification';

/**
 * Log a warning and show a toast!
 */
export const errorLogging = () => (next) => (action) => {
  if (isRejectedWithValue(action)) {
    Notification.error({ message: action.payload });
  }

  return next(action);
};
