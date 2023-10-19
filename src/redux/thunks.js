import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContact,
  deleteContact,
  fetchCurrentUser,
  fetchLogin,
  fetchLogout,
  fetchPhoneBook,
  fetchRegister,
  setToken,
} from 'service/Api';

//---------------registration------------------//

export const registerThunk = createAsyncThunk(
  'user/registerThunk',
  async (userData, thunkAPI) => {
    try {
      const response = await fetchRegister(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//---------------login------------------//

export const loginThunk = createAsyncThunk(
  'user/loginThunk',
  async (userData, thunkAPI) => {
    try {
      const response = await fetchLogin(userData);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//--------------- logout ------------------//

export const logoutThunk = createAsyncThunk(
  'user/logoutThunk',
  async (_, thunkAPI) => {
    try {
      await fetchLogout();
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//--------------- current user info ------------------//

export const currentUserThunk = createAsyncThunk(
  'user/currentThunk',
  async (_, thunkAPI) => {
    const token = thunkAPI.getState().user.token;
    try {
      if (!token) {
        return thunkAPI.rejectWithValue();
      }
      setToken(token);
      const response = await fetchCurrentUser();
      console.log(response);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
  // -------------- або через condition ---------------
  // {
  //   condition: (_, thunkAPI) => {
  //     const token = thunkAPI.getState().user.token;

  //     if (!token) {
  //       return true;
  //     }
  //     return false;
  //   },
  // }
);

//-------------- get all Contacts -------------//

export const requestPhoneBookThunk = createAsyncThunk(
  'phoneBook/fetchPhoneBook',
  async (_, thunkAPI) => {
    try {
      const response = await fetchPhoneBook();
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//--------------- add Contacts ------------------//

export const requestAddContactThunk = createAsyncThunk(
  'phoneBookThunk/addContact',
  async (newContact, thunkAPI) => {
    try {
      const response = await addContact(newContact);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//--------------- delete Contacts ------------------//

export const requestDeleteContactThunk = createAsyncThunk(
  'phoneBookThunk/deleteContact',
  async (id, thunkAPI) => {
    try {
      const response = await deleteContact(id);
      return response;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

//////////коротший варіант///////////////

// export const registerThunk = createAsyncThunk('user/registerThunk', userData =>
//   fetchRegister(userData)
// );

// export const loginThunk = createAsyncThunk('user/loginThunk', userData =>
//   fetchLogin(userData)
// );

// export const requestPhoneBookThunk = createAsyncThunk(
//   'phoneBook/fetchPhoneBook',
//   () => fetchPhoneBook()
// );

// export const requestAddContactThunk = createAsyncThunk(
//   'phoneBookThunk/addContact',
//   newContact => addContact(newContact)
// );

// export const requestDeleteContactThunk = createAsyncThunk(
//   'phoneBookThunk/deleteContact',
//   id => deleteContact(id)
// );
