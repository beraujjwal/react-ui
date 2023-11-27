import { createAsyncThunk, createAction, createSlice } from '@reduxjs/toolkit';
import { deleteToken, deleteUser, readToken, persistUser } from '../../utils/localStorage';
import { userRefreshToken } from '../actions/userAction'

const initialState = {
  token: readToken(),
};

export const doLogout = createAsyncThunk('auth/doLogout', (payload, { dispatch }) => {
    deleteToken();
    deleteUser();
    dispatch(setUser(null));
});

export const setUser = createAction('user/setUser', (newUser) => {
    persistUser(newUser);
    return {
        payload: newUser,
    };
});

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(doLogout.fulfilled, (state) => {
        state.token = '';
      });

    builder
      .addCase(userRefreshToken.pending, (state) => {
        state.status = "loading";
      })
      .addCase(userRefreshToken.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
      })
      .addCase(userRefreshToken.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
