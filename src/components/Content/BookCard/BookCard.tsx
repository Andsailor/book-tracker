import useAuth from "../../../hooks/useAuth.hook";

import { Link } from "react-router-dom";
import { Button, Image } from "react-bootstrap";

import emptyStar from "../../../assets/emptystar.png";
import star from "../../../assets/star.png";

interface IBookCard {
    key: string;
    title: string;
    image: string | undefined;
    starIcon: "star" | "emptyStar";
    authors: string[] | null;
    subtitle: string | null;
    categories: string[] | null;
    description?: string;
    modifyBooksToReadList?: () => void;
    setAboutBookPageContent: () => void;
    routeLink?: string;
}

function BookCard({
    title,
    image,
    authors,
    subtitle,
    categories,
    modifyBooksToReadList,
    setAboutBookPageContent,
    starIcon,
    routeLink,
}: IBookCard) {
    const { isLogged } = useAuth();

    const author: string | string[] | null =
        authors && authors.length > 1
            ? authors.slice(0, 2).join(", ")
            : authors;

    const bookTitle =
        title && title.length > 100 ? title.slice(0, 100) + "..." : title;

    const routerLinkForAboutButton = routeLink
        ? `${routeLink}/${title}`
        : title;
    return (
        <div className="xl:flex justify-between w-full p-10 max-[1024px]:p-4 max-[1024px]:text-center border-pink border-opacity-50 border-b-2 text-white text-opacity-75 shadow-lg">
            <div className="block lg:flex">
                <div>
                    <Image
                        className="w-28 max-[1024px]:m-auto max-[1024px]:w-1/2 max-[1024px]:mb-4"
                        src={image}
                        alt="book cover image"
                    />
                </div>
                <div className="ml-10 max-[1024px]:ml-0 max-w-3xl">
                    <p className="text-2xl font-bold text-pink max-[400px]:text-lg">
                        {bookTitle}
                    </p>
                    {subtitle && (
                        <p className="text-lg max-[400px]:text-sm">
                            {subtitle}
                        </p>
                    )}
                    {authors && (
                        <p className="max-[400px]:text-sm">author: {author}</p>
                    )}
                    {categories && (
                        <p className="max-[400px]:text-sm">
                            category: {categories}
                        </p>
                    )}
                </div>
            </div>
            <div className="d-flex justify-end items-end max-[1024px]:justify-center max-[1024px]:mt-8">
                <Button
                    onClick={setAboutBookPageContent}
                    className="w-20"
                    variant="pink mx-2"
                >
                    <Link
                        className="text-creamy no-underline"
                        to={routerLinkForAboutButton}
                    >
                        About
                    </Link>
                </Button>
                {isLogged && (
                    <Image
                        onClick={() =>
                            typeof modifyBooksToReadList !== "undefined" &&
                            modifyBooksToReadList()
                        }
                        className="transition-all w-8 ml-2 mb-1 cursor-pointer hover:w-9 hover:ml-1"
                        src={starIcon === "star" ? star : emptyStar}
                    />
                )}
            </div>
        </div>
    );
}

export default BookCard;
