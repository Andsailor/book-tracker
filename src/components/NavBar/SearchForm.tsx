import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";
import type { ISearchParams, ISingleBook } from "../../types/types";

import {
    setBooksToState,
    setBookNameToState,
    setBooksOrder,
    setTotalBooksCount,
} from "../../store/slices/booksSlice";

import { Form, Button } from "react-bootstrap";
import { useHttp } from "../../services/useHttp.hook";

function SearchForm() {
    const [bookName, setBookName] = useState<string>("");
    const booksOrder = useAppSelector((store) => store.books.booksOrder);

    const { getBooks } = useHttp();
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    function handleSubmit(params: ISearchParams): void {
        dispatch(setBooksToState(null));
        dispatch(setBookNameToState(bookName));
        getBooks({
            bookName: params.bookName,
            startIndex: params.startIndex,
            booksOrder: params.booksOrder,
        })
            .then((response) => {
                if (response && "items" in response.data) {
                    dispatch(
                        setBooksToState(response?.data.items as ISingleBook[])
                    );
                    if ("totalItems" in response.data) {
                        dispatch(
                            setTotalBooksCount(
                                Number(response?.data.totalItems)
                            )
                        );
                    }
                }
            })
            .catch(() => {
                navigate("/error");
            })
            .finally(() => {
                setBookName("");
            });
    }

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                handleSubmit({
                    bookName: bookName,
                    startIndex: 0,
                    booksOrder: booksOrder,
                });
            }}
            className="d-flex w-full sm:hidden relative"
        >
            <Form.Control
                type="search"
                placeholder="Find book"
                className="me-2"
                aria-label="Search"
                value={bookName}
                onChange={(e) => setBookName(e.target.value)}
            />
            <select
                onChange={(e) => dispatch(setBooksOrder(e.target.value))}
                className="max-[400px]:w-8   min-[992px]:w-26 p-2 h-10 text-sm rounded-md bg-lightest_pink border-1 border-lightest_pink absolute right-24"
            >
                <option value="relevance">Relevance</option>
                <option value="newest">Newest</option>
            </select>
            <Button
                disabled={!bookName}
                className="ml-2"
                type="submit"
                onClick={() => {
                    if (bookName.length !== 0) {
                        navigate("result");
                    }
                }}
                variant="lighter-pink"
            >
                Search
            </Button>
        </Form>
    );
}

export default SearchForm;
