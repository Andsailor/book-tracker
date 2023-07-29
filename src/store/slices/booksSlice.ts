import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

interface IBookSlice {
    bookToSearch: string;
    isSkipSearching: boolean;
    bookSearchStartIndex: number;
}

const initialState: IBookSlice = {
    bookToSearch: "",
    isSkipSearching: true,
    bookSearchStartIndex: 0,
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBookToSearch(state, action: PayloadAction<string>) {
            state.bookToSearch = action.payload;
        },
        setIsSkipSearching(state, action: PayloadAction<boolean>) {
            state.isSkipSearching = action.payload;
        },
        setBookSearchStartIndex(state, action: PayloadAction<number>) {
            state.bookSearchStartIndex =
                state.bookSearchStartIndex + action.payload;
        },
    },
});

export const { setBookToSearch, setIsSkipSearching, setBookSearchStartIndex } =
    bookSlice.actions;
export default bookSlice.reducer;
