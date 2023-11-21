import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../Configs/Axios';

export const getAllCategories = createAsyncThunk('allCategories/getAllCategories', () => baseApi.get('category/all').then(response => response.data))

const slice = createSlice({
    name: 'allCategories',
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer