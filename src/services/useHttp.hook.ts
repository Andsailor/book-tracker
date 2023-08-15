import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../store/store";

import { setIsLoading } from "../store/slices/booksSlice";

import { IAxiosGetBook, ISearchParams } from "../types/types";

export const useHttp = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const instance = axios.create({
        baseURL: `https://www.googleapis.com/books/v1/volumes`,
    });

    const getBooks = async (params: ISearchParams) => {
        try {
            dispatch(setIsLoading(true));
            const response = await instance.get<IAxiosGetBook>(
                `?q=${params.bookName}
                &startIndex=${params.startIndex}&orderBy=${
                    params.booksOrder as string
                }&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY as string}`
            );

            if (response.status === 200) {
                dispatch(setIsLoading(false));
                return response;
            }
        } catch (e) {
            navigate("/error");
        }
    };

    return {
        getBooks,
    };
};
