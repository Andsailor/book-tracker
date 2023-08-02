import useAuth from "../../../hooks/useAuth.hook";

import { Button, Image } from "react-bootstrap";

import emptyStar from "../../../assets/emptystar.png";

interface IBookCard {
    key: string;
    title: string;
    image: string | undefined;
    authors: string[] | null;
    subtitle: string | null;
    categories: string[] | null;
}

//! TODO
//? 1. Логика добавления в список к прочтению.
//? 2. Изменение значка звёздочки при добавлении в список.
//? 3. Адаптация под мобилки.

function BookCard({ title, image, authors, subtitle, categories }: IBookCard) {
    const { isLogged } = useAuth();

    const author: string | string[] | null =
        authors && authors.length > 1
            ? authors.slice(0, 2).join(", ")
            : authors;

    const bookTitle =
        title && title.length > 100 ? title.slice(0, 100) + "..." : title;
    return (
        <div className="xl:flex justify-between w-full p-10 max-[1024px]:p-4 max-[1024px]:text-center border-pink border-opacity-50 border-b-2 text-white text-opacity-75 shadow-lg">
            <div className="block xl:flex">
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
                <Button className="w-20" variant="pink mx-2">
                    About
                </Button>
                {isLogged && (
                    <Image
                        className="transition-all w-8 ml-2 mb-1 cursor-pointer hover:w-9 hover:ml-1"
                        src={emptyStar}
                    />
                )}
            </div>
        </div>
    );
}

export default BookCard;
