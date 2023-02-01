import { createSlice } from "@reduxjs/toolkit";
import { STATUS } from "constants/constants";
import { ContactsInitState } from "./contacts.initstate";
import { fetchContacts } from './contacts.thunk'
import { addContact } from './contacts.thunk'
import { deleteContact } from './contacts.thunk'

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: ContactsInitState,
    reducers: {},
    extraReducers: {
        [fetchContacts.pending]: (state) => {
            state.contacts.status = STATUS.loading
        },
        [fetchContacts.fulfilled]: (state, action) => {
            state.contacts.status = STATUS.success;
            state.contacts.items = action.payload;
        },
        [fetchContacts.rejected]: (state) => {
            state.contacts.status = STATUS.error;
        },
        //
        [addContact.pending]: (state) => {
            state.contacts.status = STATUS.loading
        },
        [addContact.fulfilled]: (state, action) => {
            state.contacts.status = STATUS.success;
            state.contacts.items.push(action.payload);
        },
        [addContact.rejected]: (state) => {
            state.contacts.status = STATUS.error;
        },
        //
        [deleteContact.pending]: (state) => {
            state.contacts.status = STATUS.loading
        },
        [deleteContact.fulfilled]: (state, action) => {
            state.contacts.status = STATUS.success;
            const delContactId = state.contacts.items.findIndex(
                contact => contact.id === action.payload.id
            );
            state.contacts.items.splice(delContactId, 1);
        },
        [deleteContact.rejected]: (state) => {
            state.contacts.status = STATUS.error;
        },
    }
})

export default contactsSlice.reducer;
