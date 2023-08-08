import { useAppDispatch, useAppSelector } from "../../store/store";
import { useHttp } from "../../services/useHttp.hook";
import {
    setMoreBooksToState,
    setSearchStartIndex,
    setBookToReadList,
    removeBookFromReadList,
    setAboutBookPageContent,
} from "../../store/slices/booksSlice";
import { v4 as uuidv4 } from "uuid";

import { Spinner, Button } from "react-bootstrap";
import BookCard from "./BookCard/BookCard";

import imageNotFound from "../../assets/noimg.jpg";

import type { ISearchParams, ISingleBook } from "../../types/types";

//! TODO:
//? 1. Перенаправление на главную страницу, если не выполняется поиск и массив книг пуст.

function BooksSearchResult() {
    const books = useAppSelector((store) => store.books.books);
    const bookName = useAppSelector((store) => store.books.bookName);
    const booksOrder = useAppSelector((store) => store.books.booksOrder);
    const isLoading = useAppSelector((store) => store.books.isLoading);
    const isError = useAppSelector((store) => store.books.isError);
    const searchIndex = useAppSelector((store) => store.books.searchStartIndex);
    const booksToReadList = useAppSelector((store) => store.books.booksToRead);

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
                    dispatch(
                        setMoreBooksToState(
                            response.data.items as ISingleBook[]
                        )
                    );
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
                    books.map((item) => {
                        const id: string = uuidv4();
                        return (
                            <BookCard
                                setAboutBookPageContent={() =>
                                    dispatch(setAboutBookPageContent(item))
                                }
                                modifyBooksToReadList={() =>
                                    booksToReadList.includes(item)
                                        ? dispatch(
                                              removeBookFromReadList(item.id)
                                          )
                                        : dispatch(setBookToReadList(item))
                                }
                                starIcon={
                                    booksToReadList.includes(item)
                                        ? "star"
                                        : "emptyStar"
                                }
                                key={id}
                                title={item.volumeInfo.title}
                                authors={item.volumeInfo.authors}
                                subtitle={item.volumeInfo.subtitle}
                                categories={item.volumeInfo.categories}
                                image={
                                    item.volumeInfo.imageLinks?.thumbnail ||
                                    imageNotFound
                                }
                            />
                        );
                    })}
            </div>
        );
    return (
        <div className="pb-32 md:px-5">
            <div className="text-center mt-10 text-2xl text-creamy text-opacity-70">
                {books === null &&
                    !isLoading &&
                    "You do not search any book yet"}
            </div>
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
                    hidden={books === null && !isLoading}
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
