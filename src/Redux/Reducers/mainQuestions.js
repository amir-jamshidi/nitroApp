import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'

export const getMainQuestions = createAsyncThunk('mainQuestions/getMainQuestions', () => baseApi.get('questions').then(response => response.data))

const slice = createSlice({
    name: 'mainQuestions',
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getMainQuestions.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer