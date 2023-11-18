import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'


export const getSingleQuestion = createAsyncThunk('singleQuestion/getSingleQuestion', (questionID) => baseApi.get(`questions/${questionID}`).then(response => response.data))

const slice = createSlice({
    name: 'singleQuestion',
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getSingleQuestion.fulfilled, (state, action) => {

            return action.payload
        })
    }
})

export default slice.reducer