import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IAuthState {
    login: string;
    password: string;
    token: string;
}

const initialState: IAuthState = {
    login: "",
    password: "",
    token: "",
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        logIn(state, action: PayloadAction<IAuthState>) {
            state.login = action.payload.login;
            state.password = action.payload.password;
            state.token = action.payload.token;
        },
        logOut(state) {
            state.login = "";
            state.password = "";
            state.token = "";
        },
    },
});

export const { logIn, logOut } = authSlice.actions;
