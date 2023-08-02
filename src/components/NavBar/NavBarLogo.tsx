import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";

import { setBooksToState } from "../../store/slices/booksSlice";

import { Navbar, Image } from "react-bootstrap";

import heart from "../../assets/heart.png";

function NavBarLogo() {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    return (
        <Navbar.Brand
            className="cursor-pointer"
            onClick={() => {
                dispatch(setBooksToState(null));
                navigate("/main");
            }}
        >
            <span className="text-lightest_pink text-2xl lg:text-3xl flex hover:text-light_pink transition-all ">
                <span className="mr-2 min-[768px]:hidden min-[992px]:block">
                    We
                </span>
                <Image
                    className=" min-[320px]:w-11 min-[320px]:h-9 min-[420px]:w-11 lg:w-10 lg:h-8"
                    src={heart}
                />
                <span className="ml-2 min-[768px]:hidden min-[992px]:block">
                    Books
                </span>
            </span>
        </Navbar.Brand>
    );
}

export default NavBarLogo;
