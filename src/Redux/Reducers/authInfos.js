import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name: 'authInfos',
    initialState: {
        login: false,
        userInfo: null
    },
    reducers: {
        setIsLogin(state, action) {
            state.login = action.payload
        },
        setUserInfo: (state, action) => {
            state.userInfo = action.payload
        }
    }
})

export const { setIsLogin, setUserInfo } = slice.actions;
export default slice.reducer;