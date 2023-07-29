import useAuth from "../../../hooks/useAuth.hook";

import { Button, Card } from "react-bootstrap";

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
        title && title.length > 60 ? title.slice(0, 60) + "..." : title;
    return (
        <div>
            <Card
                style={{
                    width: "24rem",
                    minHeight: "34rem",
                    backgroundColor: "rgba(250, 250, 250, .2)",
                }}
            >
                <Card.Img
                    className="max-w-sm max-h-60 p-2"
                    variant="top"
                    src={image}
                />
                <Card.Body>
                    <Card.Title>
                        <span className="text-lg bold">{bookTitle}</span>
                    </Card.Title>
                    <Card.Title>
                        {categories && (
                            <span className="text-sm">
                                <span className="text-base bold text-light_pink">
                                    Category:
                                </span>{" "}
                                {categories}
                            </span>
                        )}
                    </Card.Title>
                    <Card.Title>
                        {subtitle && (
                            <span className="text-sm">
                                <span className="text-base bold text-light_pink">
                                    About:
                                </span>{" "}
                                {subtitle}
                            </span>
                        )}
                    </Card.Title>
                    <Card.Text>
                        {authors && (
                            <span>
                                <span className="bold text-light_pink">
                                    Author:{" "}
                                </span>
                                {author}
                            </span>
                        )}
                    </Card.Text>
                    <div className="absolute bottom-5 w-11/12 d-flex justify-between">
                        <Button variant="lighter-pink">Go somewhere</Button>
                        {isLogged && (
                            <button>
                                <img
                                    className="w-10"
                                    src={emptyStar}
                                    alt="add to read list button"
                                />
                            </button>
                        )}
                    </div>
                </Card.Body>
            </Card>
        </div>
    );
}

export default BookCard;
