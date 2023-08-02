import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import type { ISingleBook } from "../../types/types";

interface IBookSlice {
    bookName: string;
    books: null | ISingleBook[];
    booksOrder: string;
    searchStartIndex: number;
    isLoading: boolean;
    isError: boolean;
}

const initialState: IBookSlice = {
    bookName: "",
    searchStartIndex: 10,
    booksOrder: "relevance",
    books: null,
    isLoading: false,
    isError: false,
};

const bookSlice = createSlice({
    name: "books",
    initialState,
    reducers: {
        setBooksToState(state, action: PayloadAction<ISingleBook[] | null>) {
            state.books = action.payload;
        },
        setMoreBooksToState(state, action: PayloadAction<ISingleBook[]>) {
            if (state.books && action.payload) {
                state.books = state.books.concat(action.payload);
            }
        },
        setBooksOrder(state, action: PayloadAction<string>) {
            state.booksOrder = action.payload;
        },
        setIsLoading(state, action: PayloadAction<boolean>) {
            state.isLoading = action.payload;
        },
        setIsError(state, action: PayloadAction<boolean>) {
            state.isError = action.payload;
        },
        setBookNameToState(state, action: PayloadAction<string>) {
            state.bookName = action.payload;
        },
        setSearchStartIndex(state, action: PayloadAction<number>) {
            state.searchStartIndex = action.payload;
        },
    },
});

export const {
    setBooksToState,
    setIsLoading,
    setIsError,
    setBookNameToState,
    setSearchStartIndex,
    setMoreBooksToState,
    setBooksOrder,
} = bookSlice.actions;
export default bookSlice.reducer;
