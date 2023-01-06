import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
    name: "authentication",
    initialState: {
        userToken: "",
        isLoading: false,
        isLogin: null,
    },
    reducers: {
        loginUser: (state, action) => {
            state.userToken = action.payload.accessToken;
            state.isLogin = true;
        },
        clearUser: (state, action) => {
            state.userid = "";
            state.userpw = "";
            state.isLogin = false;
        },
    },
});

export const { loginUser, clearUser } = authSlice.actions;
export default authSlice.reducer;
