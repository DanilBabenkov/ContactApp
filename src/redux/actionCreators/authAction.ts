import {createAsyncThunk} from "@reduxjs/toolkit";
import {apiConfig} from "../../api/apiConfig";

export const authAction = createAsyncThunk(
    'authAction',
    async (_, thunkAPI) => {
        try {
            const response = await apiConfig.get('/auth')
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Не правильно введены логин или пароль, попробуйте еще раз')
        }
    }
)

