import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts.slice';
import filterSlice from './contacts/filter.slice';

import authSlice from './authentication/authentication.slice';


export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
    auth: authSlice,
  },
});

// import { combineReducers, configureStore } from '@reduxjs/toolkit';

// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';

// import storage from 'redux-persist/lib/storage';
// import contactsSlice from './contacts.slice';
// import filterSlice from './filter.slice';

// const authPersistConfig = {
  // key: 'auth',
  // storage,
  // whitelist: ['token'],
// };

// const rootReducer = combineReducers({
//   contacts: contactsSlice,
//   filter: filterSlice,
// });

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//  // reducer: persistedReducer,
//   reducer: persistedReducer(authPersistConfig, ),
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });
// const persistor = persistStore(store);

// export { store, persistor };
