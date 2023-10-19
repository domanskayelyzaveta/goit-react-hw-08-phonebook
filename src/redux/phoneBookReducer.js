import { createSlice } from '@reduxjs/toolkit';
import {
  requestAddContactThunk,
  requestDeleteContactThunk,
  requestPhoneBookThunk,
} from './thunks';

const initialState = {
  contacts: [],
  isLoading: true,
  filter: '',
  error: null,
};

const phoneBookSlice = createSlice({
  name: 'phoneBook',
  initialState,
  reducers: {
    onFilterChange: (state, action) => {
      state.filter = action.payload;
    },
  },
  extraReducers: builder => {
    builder

      //------------ Get All Contacts -------------------

      .addCase(requestPhoneBookThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestPhoneBookThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = action.payload;
      })
      .addCase(requestPhoneBookThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //--------------- Add New Contact -------------------

      .addCase(requestAddContactThunk.pending, state => {
        state.isLoading = true;
      })
      .addCase(requestAddContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = [...state.contacts, action.payload];
      })
      .addCase(requestAddContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })

      //-------------- Delete Contact -------------------

      .addCase(requestDeleteContactThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(requestDeleteContactThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.contacts = state.contacts.filter(
          contact => contact.id !== action.payload.id
        );
      })
      .addCase(requestDeleteContactThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const phoneBookReducer = phoneBookSlice.reducer;
export const { onFilterChange } = phoneBookSlice.actions;
