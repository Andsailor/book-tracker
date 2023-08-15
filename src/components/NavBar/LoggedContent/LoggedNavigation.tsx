import { useAppSelector } from "../../../store/store";

import { NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

function LoggedNavigation() {
    const booksToReadList = useAppSelector((store) => store.books.booksToRead);

    const defaultStyle =
        "relative no-underline text-creamy min-[992px]:text-lg min-[992px]:mx-4 min-[1999px]:mx-3 min-[1400px]:mx-6 hover:text-lightest_pink max-[1024px]:hover:text-pink";
    const activeStyle = "text-pink border-b-2 " + defaultStyle;

    return (
        <Nav className="min-[992px]:px-2 2xl:px-2 md:pt-4 min-[992px]:pt-0">
            <Nav.Item className="max-[991px]:mt-2 min-[992px]:my-0">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                    to={"result"}
                >
                    All books
                </NavLink>
            </Nav.Item>
            <Nav.Item className="min-[320px]:my-2 min-[992px]:my-0">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                    to={"toread"}
                >
                    To read
                    {booksToReadList.length > 0 && (
                        <span className="text-center border-pink bg-pink text-creamy text-sm w-5 h-5 border-2 rounded-full absolute bottom-1.5 right--1">
                            {booksToReadList.length}
                        </span>
                    )}
                </NavLink>
            </Nav.Item>
        </Nav>
    );
}

export default LoggedNavigation;
