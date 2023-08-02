import axios from "axios";
import { ISingleBook, ISearchParams } from "../types/types";
import { setIsLoading, setIsError } from "../store/slices/booksSlice";
import { useAppDispatch } from "../store/store";

interface IAxiosGetBook {
    data: {
        items: ISingleBook[];
    };
}

export const useHttp = () => {
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
                    params.booksOrder
                }&key=${import.meta.env.VITE_GOOGLE_BOOKS_API_KEY as string}`
            );

            if (response.status === 200) {
                dispatch(setIsLoading(false));
                return response;
            }
        } catch (e) {
            dispatch(setIsError(true));
            console.log(e);
        }
    };

    return {
        getBooks,
    };
};
