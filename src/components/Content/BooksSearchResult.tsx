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
import { TransitionGroup } from "react-transition-group";

import { Spinner, Button } from "react-bootstrap";
import BookCard from "./BookCard/BookCard";
import TransitionWrapper from "../TransitionWrapper/TransitionWrapper";

import imageNotFound from "../../assets/noimg.jpg";

import type { ISearchParams, ISingleBook } from "../../types/types";

function BooksSearchResult() {
    const books = useAppSelector((store) => store.books.books);
    const bookName = useAppSelector((store) => store.books.bookName);
    const booksOrder = useAppSelector((store) => store.books.booksOrder);
    const isLoading = useAppSelector((store) => store.books.isLoading);
    const isError = useAppSelector((store) => store.books.isError);
    const searchIndex = useAppSelector((store) => store.books.searchStartIndex);
    const booksToReadList = useAppSelector((store) => store.books.booksToRead);
    const totalBooksCount = useAppSelector(
        (store) => store.books.totalBooksCount
    );

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
                    if ("items" in response.data) {
                        dispatch(
                            setMoreBooksToState(
                                response.data.items as ISingleBook[]
                            )
                        );
                    }
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
            <div>
                {books && (
                    <TransitionGroup>
                        {books.map((item, i) => {
                            const id: string = uuidv4();
                            return (
                                <TransitionWrapper key={i}>
                                    <BookCard
                                        setAboutBookPageContent={() =>
                                            dispatch(
                                                setAboutBookPageContent(item)
                                            )
                                        }
                                        modifyBooksToReadList={() =>
                                            booksToReadList.includes(item)
                                                ? dispatch(
                                                      removeBookFromReadList(
                                                          item.id
                                                      )
                                                  )
                                                : dispatch(
                                                      setBookToReadList(item)
                                                  )
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
                                            item.volumeInfo.imageLinks
                                                ?.thumbnail || imageNotFound
                                        }
                                    />
                                </TransitionWrapper>
                            );
                        })}
                    </TransitionGroup>
                )}
            </div>
        );
    return (
        <div className="pb-32 md:px-5 px-0 sm:px-10">
            {books && (
                <div className="text-left text-light_pink text-xl mt-3">
                    Books found: {totalBooksCount}
                </div>
            )}
            {totalBooksCount === 0 && (
                <div className="text-center max-[500px]:text-xl text-2xl text-light_pink mt-10">
                    Couldn't find book, please try again!
                </div>
            )}
            <div className="text-center max-[500px]:text-lg text-2xl text-creamy text-opacity-70 mt-10">
                {books === null && !isLoading && (
                    <span className="mt-10">
                        You do not search any book yet
                    </span>
                )}
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
                    hidden={
                        (books === null && !isLoading) || totalBooksCount == 0
                    }
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
