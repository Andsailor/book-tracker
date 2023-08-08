import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import type { ISingleBook } from "../../types/types";

interface IBookSlice {
    bookName: string;
    books: null | ISingleBook[];
    booksToRead: ISingleBook[];
    booksOrder: string;
    searchStartIndex: number;
    isLoading: boolean;
    isError: boolean;
    aboutBookPageContent: ISingleBook | null;
}

const initialState: IBookSlice = {
    bookName: "",
    books: null,
    booksToRead: [],
    booksOrder: "relevance",
    searchStartIndex: 10,
    isLoading: false,
    isError: false,
    aboutBookPageContent: null,
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
        setBookToReadList(state, action: PayloadAction<ISingleBook>) {
            state.booksToRead = state.booksToRead.concat(action.payload);
        },
        removeBookFromReadList(state, action: PayloadAction<string>) {
            if (state.booksToRead.length > 0) {
                state.booksToRead = state.booksToRead.filter(
                    (item) => item.id !== action.payload
                );
            }
        },
        setAboutBookPageContent(state, action: PayloadAction<ISingleBook>) {
            state.aboutBookPageContent = action.payload;
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
    setBookToReadList,
    removeBookFromReadList,
    setAboutBookPageContent,
} = bookSlice.actions;
export default bookSlice.reducer;
