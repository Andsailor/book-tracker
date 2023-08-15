import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IAuthSlice {
    errorMessage: string | null;
    isAccountCreated: boolean;
}

const initialState: IAuthSlice = {
    errorMessage: null,
    isAccountCreated: false,
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setErrorMessage(state, action: PayloadAction<string | null>) {
            state.errorMessage = action.payload;
        },
        setIsAccounCreated(state, action: PayloadAction<boolean>) {
            state.isAccountCreated = action.payload;
        },
    },
});

export const { setErrorMessage, setIsAccounCreated } = authSlice.actions;
export default authSlice.reducer;
