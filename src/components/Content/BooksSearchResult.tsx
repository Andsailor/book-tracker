import { useAppDispatch, useAppSelector } from "../../store/store";
import { useHttp } from "../../services/useHttp.hook";
import {
    setMoreBooksToState,
    setSearchStartIndex,
} from "../../store/slices/booksSlice";

import { Spinner, Button } from "react-bootstrap";
import BookCard from "./BookCard/BookCard";

import imageNotFound from "../../assets/noimg.jpg";

import type { ISearchParams } from "../../types/types";

//! TODO:
//? 1. Перенаправление на главную страницу, если не выполняется поиск и массив книг пуст.

function BooksSearchResult() {
    const books = useAppSelector((store) => store.books.books);
    const bookName = useAppSelector((store) => store.books.bookName);
    const booksOrder = useAppSelector((store) => store.books.booksOrder);
    const isLoading = useAppSelector((store) => store.books.isLoading);
    const isError = useAppSelector((store) => store.books.isError);
    const searchIndex = useAppSelector((store) => store.books.searchStartIndex);

    const dispatch = useAppDispatch();
    const { getBooks } = useHttp();

    function getMoreBooks(params: ISearchParams) {
        getBooks({
            bookName: params.bookName,
            startIndex: params.startIndex,
            booksOrder: params.booksOrder,
        })
            .then((response) => {
                if (response) {
                    dispatch(setMoreBooksToState(response.data.items));
                }
            })
            .catch((e) => console.log(e))
            .finally(() => dispatch(setSearchStartIndex(searchIndex + 10)));
    }

    const content =
        isLoading && !isError && !books ? (
            <div className="d-flex justify-center mt-52">
                <Spinner />
            </div>
        ) : (
            <div className="d-flex flex-wrap gap-5 justify-between mt-10">
                {books &&
                    books.map((item) => (
                        <BookCard
                            key={item.id}
                            title={item.volumeInfo.title}
                            authors={item.volumeInfo.authors}
                            subtitle={item.volumeInfo.subtitle}
                            categories={item.volumeInfo.categories}
                            image={
                                item.volumeInfo.imageLinks?.thumbnail ||
                                imageNotFound
                            }
                        />
                    ))}
            </div>
        );
    return (
        <div className="pb-32 md:px-5">
            <div>{}</div>
            {content}
            <div className="mt-5 text-center">
                <Button
                    onClick={() => {
                        getMoreBooks({
                            bookName,
                            startIndex: searchIndex,
                            booksOrder,
                        });
                    }}
                    size="lg"
                    variant="lighter-pink"
                    disabled={isLoading}
                >
                    {isLoading ? "Loading..." : "load more"}
                </Button>
            </div>
        </div>
    );
}

export default BooksSearchResult;
