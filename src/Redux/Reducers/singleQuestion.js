import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'
import { showToastSuccess } from './../../Configs/Toast';


export const getSingleQuestion = createAsyncThunk('singleQuestion/getSingleQuestion', (questionID) => baseApi.get(`questions/${questionID}`).then(response => response.data))
export const addNewAnswerFn = createAsyncThunk('singleQuestion/addNewQuestion', (values) => baseApi.post('questions/answer', values).then(response => response.data))

const slice = createSlice({
    name: 'singleQuestion',
    initialState: [],
    extraReducers: builder => {
        builder.addCase(getSingleQuestion.fulfilled, (state, action) => {
            return action.payload
        })
        builder.addCase(addNewAnswerFn.fulfilled, (state, action) => {
            showToastSuccess('پاسخ شما اضافه شد')
            state.answers.push(action.payload)
        })
    }
})

export default slice.reducer