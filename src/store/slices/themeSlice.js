import { createSlice, createAction } from '@reduxjs/toolkit';

const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

export const defaultTheme = (localStorage.getItem('theme')) || preferredTheme;

localStorage.setItem('theme', defaultTheme);

const initialState = {
  theme: defaultTheme,
};

export const setTheme = createAction('theme/setTheme', (theme) => {
  localStorage.setItem('theme', theme);
  return {
    payload: theme,
  };
});

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(setTheme, (state, action) => {
      state.theme = action.payload;
    });
  },
});

export default themeSlice.reducer;
