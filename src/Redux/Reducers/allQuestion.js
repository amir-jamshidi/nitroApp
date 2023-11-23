import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import baseApi from '../../Configs/Axios';

export const getAllQuestions = createAsyncThunk('allQuestions/getAllQuestions', () => baseApi.get('questions/all').then(response => response.data))

const slice = createSlice({
    name: 'allQuestions',
    initialState: {
        loading: false,
        allQuestions: []
    },
    extraReducers: builder => {
        builder.addCase(getAllQuestions.fulfilled, (state, action) => {
            state.loading = false
            state.allQuestions = action.payload
        })
        builder.addCase(getAllQuestions.pending, (state, action) => {
            state.loading = true
        })
    }

})

export default slice.reducer