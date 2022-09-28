import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiConfig} from "../../api/apiConfig";
import {IContacts, IUser} from "../../types/contactType";

export const contactAction = createAsyncThunk(
    'contactAction',
    async (_: string = '', thunkAPI) => {
        try {
            const response = await apiConfig.get<IContacts[]>(`/users`, {
                params: {
                    "q": _
                }
            })
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)

export const removeContactAction = createAsyncThunk(
    'contactAction',
    async (id: number, thunkAPI) => {
        try {
            await apiConfig.delete<IContacts[]>(`/users/${id}`)
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)

export const addContactAction = createAsyncThunk(
    'contactAction',
    async (user: IUser, thunkAPI) => {
        try {
            await apiConfig.post<IContacts[]>('/users', user)
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)

export const updateContactAction = createAsyncThunk(
    'contactAction',
    async (user: IUser, thunkAPI) => {
        try {
            await apiConfig.put<IContacts[]>(`/users/${user.id}`, user)
        } catch (e) {
            return thunkAPI.rejectWithValue('Error')
        }
    }
)



