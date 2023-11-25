import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import baseApi from '../../Configs/Axios'
import { showToastError, showToastSuccess } from './../../Configs/Toast';


export const refetch = createAsyncThunk('singleQuestion/refetch', (questionID) => baseApi.get(`questions/${questionID}`).then(response => response.data))
export const getSingleQuestion = createAsyncThunk('singleQuestion/getSingleQuestion', (questionID) => baseApi.get(`questions/${questionID}`).then(response => response.data))
export const addNewAnswerFn = createAsyncThunk('singleQuestion/addNewQuestion', (values) => baseApi.post('questions/answer', values).then(response => response.data))
export const likeAnswer = createAsyncThunk('singleQuestion/likeAnswer', (values) => baseApi.post('questions/like', values).then(response => response.data))
export const saveQuestion = createAsyncThunk('singleQuestion/saveQuestion', (values) => baseApi.post('questions/save', values).then(response => response.data))
export const setTrueAnswer = createAsyncThunk('singleQuestion/setTrueAnswer', (values) => baseApi.post('questions/true/answer', values).then(response => response.status))

const slice = createSlice({
    name: 'singleQuestion',
    initialState: {
        loading: false,
        isError: false,
        question: {}
    },
    extraReducers: builder => {
        builder.addCase(getSingleQuestion.fulfilled, (state, action) => {
            state.loading = false
            state.question = action.payload
        })
        builder.addCase(refetch.fulfilled, (state, action) => {
            state.question = action.payload
        })
        builder.addCase(getSingleQuestion.pending, (state, action) => {
            state.loading = true
        })
        builder.addCase(addNewAnswerFn.fulfilled, (state, action) => {
            showToastSuccess('پاسخ شما اضافه شد')
            state.question.answers.push(action.payload)
        })
        builder.addCase(getSingleQuestion.rejected, (state, action) => {
            if (action.error.message.includes('404')) {
                state.loading = false
                state.isError = true
            }
        })
        builder.addCase(likeAnswer.fulfilled, (state, action) => {

        })
        builder.addCase(saveQuestion.fulfilled, (state, action) => {
            state.question.isSaveThis = !state.question.isSaveThis
            if (action.payload.message === 'save') {
                showToastSuccess('سوال در پنل شما ذخیره شد')
            } else if (action.payload.message === 'unsive') {
                showToastError('سوال از پنل شما حذف شد')
            }
        })
        builder.addCase(setTrueAnswer.fulfilled, (state, action) => {
            if (action.payload === 201) {
                showToastSuccess('پاسخ به عنوان پاسخ درست ثبت شد')

            } else if (action.payload === 202) {
                showToastError('این پاسخ قبلا ثبت شده')
            }
        })

    }
})

export default slice.reducer