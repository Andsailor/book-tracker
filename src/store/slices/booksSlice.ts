import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

import type { ISingleBook } from "../../types/types";

interface IBookSlice {
    bookName: string;
    books: null | ISingleBook[];
    booksToRead: ISingleBook[];
    booksOrder: string;
    totalBooksCount: number | null;
    searchStartIndex: number;
    aboutBookPageContent: ISingleBook | null;
    isLoading: boolean;
    isError: boolean;
}

const initialState: IBookSlice = {
    bookName: "",
    books: null,
    booksToRead: [],
    booksOrder: "relevance",
    totalBooksCount: null,
    searchStartIndex: 10,
    aboutBookPageContent: null,
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
        setTotalBooksCount(state, action: PayloadAction<number>) {
            state.totalBooksCount = action.payload;
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
    setTotalBooksCount,
} = bookSlice.actions;
export default bookSlice.reducer;
