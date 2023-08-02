import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { useNavigate } from "react-router-dom";
import type { ISearchParams } from "../../types/types";

import {
    setBooksToState,
    setBookNameToState,
    setBooksOrder,
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
            .then(
                (response) =>
                    response && dispatch(setBooksToState(response.data.items))
            )
            .catch((e) => console.log(e));
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
            className="d-flex w-full sm:hidden"
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
                className="p-2 h-10 rounded-md bg-lightest_pink border-1 border-lightest_pink "
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
