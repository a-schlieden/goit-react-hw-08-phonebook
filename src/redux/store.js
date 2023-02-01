
import { configureStore } from '@reduxjs/toolkit';
import contactsSlice from './contacts/contacts.slice';
import filterSlice from './contacts/filter.slice';

export const store = configureStore({
  reducer: {
    contacts: contactsSlice,
    filter: filterSlice,
  },
});