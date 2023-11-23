import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'

export const getMainQuestions = createAsyncThunk('mainQuestions/getMainQuestions', () => baseApi.get('questions').then(response => response.data))

const slice = createSlice({
    name: 'mainQuestions',
    initialState: {
        loading: false,
        mainQuestions: []
    },

    extraReducers: builder => {
        builder.addCase(getMainQuestions.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(getMainQuestions.fulfilled, (state, action) => {
            state.loading = false
            state.mainQuestions = action.payload
        })
    }
})

export default slice.reducer