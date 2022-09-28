import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IContacts, IContactSlice} from "../../types/contactType";
import {contactAction} from "../actionCreators/contactAction";

const initialState: IContactSlice = {
    contacts: [],
    isLoading: false,
    error: ''
}

export const contactsSlice = createSlice({
    name: "contacts",
    initialState,
    reducers: {},
    extraReducers: {
        [contactAction.pending.type]: (state) => {
            state.isLoading = true
        },
        [contactAction.fulfilled.type]: (state, action: PayloadAction<IContacts[]>) => {
            state.isLoading = false
            state.contacts = action.payload
        },
        [contactAction.rejected.type]: (state, action: PayloadAction<string>) => {
            state.isLoading = false
            state.error = action.payload
        }
    }
})

export default contactsSlice.reducer
