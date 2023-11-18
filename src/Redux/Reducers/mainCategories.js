import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'


export const getMainCategories = createAsyncThunk('mainCategories/getMainCategories', () => baseApi.get('category').then(response => response.data))

const slice = createSlice({
    name: 'mainCategories',
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getMainCategories.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer;