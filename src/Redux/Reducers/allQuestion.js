import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../Configs/Axios';

export const getAllQuestions = createAsyncThunk('allQuestions/getAllQuestions', () => baseApi.get('questions/all').then(response => response.data))

const slice = createSlice({
    name: 'allQuestions',
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getAllQuestions.fulfilled, (state, action) => {
            return action.payload
        })
    }
})

export default slice.reducer