import { useAppSelector, useAppDispatch } from "../../store/store";
import { v4 as uuidv4 } from "uuid";

import {
    removeBookFromReadList,
    setBookToReadList,
    setAboutBookPageContent,
} from "../../store/slices/booksSlice";

import BookCard from "./BookCard/BookCard";

import imageNotFound from "../../assets/noimg.jpg";

function BooksToRead() {
    const booksToReadList = useAppSelector((store) => store.books.booksToRead);

    const dispatch = useAppDispatch();

    return (
        <div className="mt-10">
            {booksToReadList.length > 0 ? (
                booksToReadList.map((item) => {
                    const id: string = uuidv4();
                    return (
                        <BookCard
                            routeLink="/main/result"
                            key={id}
                            modifyBooksToReadList={() =>
                                booksToReadList.includes(item)
                                    ? dispatch(removeBookFromReadList(item.id))
                                    : dispatch(setBookToReadList(item))
                            }
                            setAboutBookPageContent={() => {
                                dispatch(setAboutBookPageContent(item));
                            }}
                            title={item.volumeInfo.title}
                            starIcon={
                                booksToReadList.includes(item)
                                    ? "star"
                                    : "emptyStar"
                            }
                            authors={item.volumeInfo.authors}
                            subtitle={item.volumeInfo.subtitle}
                            categories={item.volumeInfo.categories}
                            image={
                                item.volumeInfo.imageLinks?.thumbnail ||
                                imageNotFound
                            }
                        />
                    );
                })
            ) : (
                <h1 className="m-auto text-creamy text-opacity-70 max-[500px]:text-lg text-2xl text-center">
                    You do not track any book yet
                </h1>
            )}
        </div>
    );
}

export default BooksToRead;
