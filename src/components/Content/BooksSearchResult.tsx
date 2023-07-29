import { useGetBookByNameQuery } from "../../store/booksApi";
import { useAppSelector } from "../../store/store";

import { Spinner, Button } from "react-bootstrap";
import BookCard from "./BookCard/BookCard";
import BooksPagination from "./BooksPagination/Pagination";

import imageNotFound from "../../assets/noimg.jpg";

//!TODO
//? 1. Заполнить карточки данными из АПИ

function BooksSearchResult() {
    const { bookToSearch, isSkipSearching, bookSearchStartIndex } =
        useAppSelector((state) => state.books);

    const bookSearchParams = {
        name: bookToSearch,
        startIndex: bookSearchStartIndex,
    };

    const { data, isLoading, isFetching } = useGetBookByNameQuery(
        bookSearchParams,
        {
            skip: isSkipSearching,
        }
    );

    console.log(data);

    const content =
        isLoading || isFetching ? (
            <div className="d-flex justify-center mt-52">
                <Spinner />
            </div>
        ) : (
            <div className="d-flex flex-wrap gap-5 justify-between mt-10">
                {data?.items.map((item) => (
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
        <div className="pb-32">
            <div className="text-center mt-3 text-2xl text-lightest_pink">
                Books at all:{" "}
                {data?.totalItems && data?.totalItems > 500
                    ? 500
                    : data?.totalItems}
            </div>
            {content}
            <div className="flex justify-center mt-14">
                {/* <Button
                    onClick={() => {
                        setMaxBooksToSearch(
                            (maxBooksToSearch) => maxBooksToSearch + 9
                        );
                    }}
                    variant="light-pink"
                    className="mt-14"
                >
                    Find More Books
                </Button> */}
                <BooksPagination
                    totalBooksCount={
                        data?.totalItems && data?.totalItems > 500
                            ? 500
                            : data?.totalItems
                    }
                />
            </div>
        </div>
    );
}

export default BooksSearchResult;
