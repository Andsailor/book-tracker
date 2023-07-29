import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { ISingleBook, IGetBooksQueryParams } from "../types/types";

interface IFetchedBooks {
    items: ISingleBook[];
    kind: string;
    totalItems: number;
}

export const booksApi = createApi({
    reducerPath: "booksApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://www.googleapis.com/books/v1/",
    }),
    endpoints: (builder) => ({
        getBookByName: builder.query<IFetchedBooks, IGetBooksQueryParams>({
            query: (params: IGetBooksQueryParams) =>
                `volumes?q=${params.name}&startIndex=${
                    params.startIndex
                }&maxResults=${30}&key=${
                    // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
                    import.meta.env.VITE_GOOGLE_BOOKS_API_KEY
                }`,
        }),
    }),
});

export const { useGetBookByNameQuery } = booksApi;
