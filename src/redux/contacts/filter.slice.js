import { createSlice } from "@reduxjs/toolkit";
import { ContactsFilterInitState } from "./filter.initstate";

const filterSlice = createSlice({
    name: 'filter',
    initialState: ContactsFilterInitState,
    reducers: {
        setFilter: (state, action) => {
            state.filter = action.payload;
        }
    },
})

export const { setFilter } = filterSlice.actions;
export default filterSlice.reducer;