import { configureStore } from '@reduxjs/toolkit';
import { usersReducer } from './usersReducer';
import { phoneBookReducer } from './phoneBookReducer';
import storage from 'redux-persist/lib/storage';

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

const userPersistConfig = {
  key: 'user',
  storage,
  whitelist: ['contacts', 'token'],
};

const store = configureStore({
  reducer: {
    user: persistReducer(userPersistConfig, usersReducer),
    phoneBook: phoneBookReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
export default store;
