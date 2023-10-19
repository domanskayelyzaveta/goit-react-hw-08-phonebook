import { createSlice } from '@reduxjs/toolkit';
import {
  currentUserThunk,
  loginThunk,
  logoutThunk,
  registerThunk,
} from './thunks';

const initialState = {
  userData: null,
  isLoading: false,
  error: null,
  token: null,
  isSignedIn: false,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      //------------ Registration ---------------

      .addCase(registerThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(registerThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isLoading = false;
        state.isSignedIn = true;
        state.token = action.payload.token;
        state.userData = action.payload.user;
      })
      .addCase(registerThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //------------- Log in ---------------

      .addCase(loginThunk.pending, (state, action) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(loginThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.userData = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //------------- Current user info ---------------

      .addCase(currentUserThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(currentUserThunk.fulfilled, (state, action) => {
        state.error = null;
        state.isSignedIn = true;
        state.isLoading = false;
        state.userData = action.payload;
      })
      .addCase(currentUserThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      //------------- Log out ---------------

      .addCase(logoutThunk.pending, state => {
        state.error = null;
        state.isLoading = true;
      })
      .addCase(logoutThunk.fulfilled, () => initialState)
      .addCase(logoutThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const usersReducer = userSlice.reducer;
