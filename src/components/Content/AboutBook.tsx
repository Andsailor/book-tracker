import { useAppSelector } from "../../store/store";

import { Button, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

import imageNotFound from "../../assets/noimg.jpg";
import emptyStar from "../../assets/emptystar.png";
import star from "../../assets/star.png";

function AboutBook() {
    const book = useAppSelector((store) => store.books.aboutBookPageContent);
    const booksToReadList = useAppSelector((store) => store.books.booksToRead);

    const image = book?.volumeInfo.imageLinks?.thumbnail
        ? book?.volumeInfo.imageLinks.thumbnail
        : imageNotFound;
    const author: string | string[] | undefined =
        book?.volumeInfo.authors && book?.volumeInfo.authors.length > 1
            ? book?.volumeInfo.authors.slice(0, 2).join(", ")
            : book?.volumeInfo.authors;
    const description = book?.searchInfo.textSnippet;

    const rating = book?.volumeInfo.ratingsCount ? (
        <div className="-translate-y-1 ml-2">
            <div className="flex mt-2 relative">
                {renderRating(emptyStar, 5)}
                <div className="flex absolute">
                    {book?.volumeInfo.ratingsCount &&
                        renderRating(
                            star,
                            book?.volumeInfo.ratingsCount > 5
                                ? 5
                                : book?.volumeInfo.ratingsCount
                        )}
                </div>
            </div>
        </div>
    ) : (
        "unrated"
    );

    function renderRating(imgSrc: string, quantity: number) {
        const RatingStarsQuantity = [];
        for (let i = 0; i < quantity; i++) {
            RatingStarsQuantity.push(imgSrc);
        }

        return RatingStarsQuantity.map((item, i) => (
            <img className="w-8" key={i} src={item} alt="rating star" />
        ));
    }

    console.log(book);

    return (
        <>
            <div className="flex max-[768px]:p-5 flex-col max-[768px]:items-center md:flex-row justify-around md:p-2 md:pt-8 lg:p-10">
                <div className="w-2/4 md:w-5/12 lg:w-3/12">
                    <Image className="w-full h-full" src={image} />
                </div>
                <div className="md:w-6/12 lg:w-2/3 flex flex-col justify-between">
                    <p className="max-[425px]:text-md max-[768px]:text-center max-[768px]:mt-2 max-[768px]:text-xl md:text-xl lg:text-2xl font-bold text-pink flex justify-between items-start">
                        {book?.volumeInfo.title}
                        {book && booksToReadList.includes(book) && (
                            <img className="w-8 max-[425px]:w-6" src={star} />
                        )}
                    </p>
                    <p className="text-xl text-lightest_pink max-[768px]:text-sm max-[570px]:pl-3 max-[768px]:pl-8">
                        {" "}
                        Written by: {author}
                    </p>
                    <div className="text-lightest_pink lg:text-xl max-[570px]:pl-3 max-[768px]:pl-8">
                        <p>Category: {book?.volumeInfo.categories}</p>
                        <p>Pages: {book?.volumeInfo.pageCount}</p>
                        <p className="flex items-center ">Rating: {rating}</p>
                        <p className="text-lightest_pink md:text-md lg:text-lg">
                            Review: {description}
                        </p>
                    </div>
                    <div className="max-[768px]:text-center">
                        <Button variant="lighter-pink">
                            <Link
                                className="text-black no-underline"
                                target="_blank"
                                to={book?.volumeInfo.infoLink}
                            >
                                Book link
                            </Link>
                        </Button>
                        <Button
                            onClick={() => history.back()}
                            className="ml-2"
                            variant="pink"
                        >
                            Back
                        </Button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default AboutBook;
