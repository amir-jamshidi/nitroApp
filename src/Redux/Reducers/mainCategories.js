import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'


export const getMainCategories = createAsyncThunk('mainCategories/getMainCategories', () => baseApi.get('category').then(response => response.data))

const slice = createSlice({
    name: 'mainCategories',
    initialState: {
        loading: false,
        mainCategories: []
    },
    extraReducers: builder => {
        builder.addCase(getMainCategories.fulfilled, (state, action) => {
            state.loading = false
            state.mainCategories = action.payload
        })
        builder.addCase(getMainCategories.pending, (state, action) => {
            state.loading = true
        })
    }
})

export default slice.reducer;