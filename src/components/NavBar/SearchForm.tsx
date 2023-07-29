import { useState } from "react";
import { useAppDispatch } from "../../store/store";
import { useNavigate } from "react-router-dom";
import {
    setBookToSearch,
    setIsSkipSearching,
} from "../../store/slices/booksSlice";

import { Form, Button } from "react-bootstrap";

function SearchForm() {
    const [bookName, setBookName] = useState<string>("");
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <Form
            onSubmit={(e) => {
                e.preventDefault();
                dispatch(setIsSkipSearching(false));
                dispatch(setBookToSearch(bookName));
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
            <Button
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
