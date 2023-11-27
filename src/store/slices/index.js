import userReducer from './userSlice';
import themeReducer from './themeSlice';
import authReducer from './authSlice';

const rootReducer = {
  auth: authReducer,
  user: userReducer,
  theme: themeReducer,
};

export default rootReducer
