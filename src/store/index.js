import { configureStore } from '@reduxjs/toolkit';
import { errorLogging } from './middlewares/errorLogging';
import rootReducer from './slices';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(errorLogging),
});
