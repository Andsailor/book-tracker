import { NavLink } from "react-router-dom";

import { Nav } from "react-bootstrap";

import "../../../styles/bootstrap-custom.css";

function LoggedNavigation() {
    const defaultStyle =
        "no-underline text-creamy text-xl min-[992px]:mx-3 min-[1400px]:mx-6 hover:text-lightest_pink max-[1024px]:hover:text-pink";
    const activeStyle = "text-pink border-b-2 " + defaultStyle;

    return (
        <Nav className="min-[992px]:px-4 2xl:px-6 md:pt-4 min-[992px]:pt-0">
            <Nav.Item className="max-[991px]:mt-2 min-[992px]:my-0 ">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                    to={"toread"}
                >
                    To read
                </NavLink>
            </Nav.Item>
            <Nav.Item className="min-[320px]:my-2 min-[992px]:my-0">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                    to={"done"}
                >
                    Done
                </NavLink>
            </Nav.Item>
        </Nav>
    );
}

export default LoggedNavigation;
