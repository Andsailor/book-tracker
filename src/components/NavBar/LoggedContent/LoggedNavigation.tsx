import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "../../../styles/bootstrap-custom.css";

//!TODO
//? 1. Расположение иконок "к прочтению и прочитано" и их стилизация.

function LoggedNavigation() {
    const defaultStyle =
        "no-underline text-creamy md:text-xl min-[992px]:mx-3 lg:text-lg min-[1400px]:text-xl min-[1400px]:mx-6";
    const activeStyle = "border-b-2" + defaultStyle;
    return (
        <Nav className="min-[992px]:px-4 2xl:px-6 md:pt-4 min-[992px]:pt-0">
            <Nav.Item className="md:my-1 min-[992px]:my-0 ">
                <NavLink
                    className={({ isActive }) =>
                        isActive ? activeStyle : defaultStyle
                    }
                    to={"toread"}
                >
                    To read
                </NavLink>
            </Nav.Item>
            <Nav.Item className="md:my-4 min-[992px]:my-0">
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
