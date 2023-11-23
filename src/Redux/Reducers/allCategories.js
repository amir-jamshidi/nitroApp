import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../Configs/Axios';

export const getAllCategories = createAsyncThunk('allCategories/getAllCategories', () => baseApi.get('category/all').then(response => response.data))

const slice = createSlice({
    name: 'allCategories',
    initialState: {
        loading: false,
        allCategories: []
    },
    extraReducers: builder => {
        builder.addCase(getAllCategories.fulfilled, (state, action) => {
            state.loading = false
            state.allCategories = action.payload
        })
        builder.addCase(getAllCategories.pending, (state, action) => {
            state.loading = true;
        })
    }
})

export default slice.reducer