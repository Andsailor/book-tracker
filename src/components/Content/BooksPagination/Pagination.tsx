import { useAppDispatch } from "../../../store/store";
import { setBookSearchStartIndex } from "../../../store/slices/booksSlice";

import { Pagination } from "react-bootstrap";

interface IBooksPaginationProps {
    totalBooksCount: number | string;
}

function BooksPagination({ totalBooksCount }: IBooksPaginationProps) {
    const dispatch = useAppDispatch();
    const items = [];
    const pages = Number(totalBooksCount) / 30;
    const number = 1;

    for (let i = 1; i <= pages; i++) {
        items.push(
            <Pagination.Item
                onClick={() => dispatch(setBookSearchStartIndex(30 * (i - 1)))}
                key={i}
                active={i === number}
            >
                {i}
            </Pagination.Item>
        );
    }

    return <Pagination>{items}</Pagination>;
}

export default BooksPagination;
