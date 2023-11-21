import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import baseApi from "../../Configs/Axios";

export const getMe = createAsyncThunk('authInfos/getMe', () => baseApi.get('auth/me').then(response => response.data))

const slice = createSlice({
    name: 'authInfos',
    initialState: {
        login: false,
        userInfo: null,
        questions: [],
        saveQuestions: []
    },
    reducers: {
        setIsLogin(state, action) {
            state.login = action.payload
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        }
    }
    ,
    extraReducers: builder => {
        builder.addCase(getMe.fulfilled, (state, action) => {
            state.login = true;
            state.questions = action.payload.questions
            state.userInfo = action.payload.userInfo
            state.saveQuestions = action.payload.saveQuestions
        })
    }
})

export const { setIsLogin, setUserInfo } = slice.actions;
export default slice.reducer;