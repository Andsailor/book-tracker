import { useNavigate } from "react-router-dom";

import { Navbar, Image } from "react-bootstrap";

import heart from "../../assets/heart.png";

function NavBarLogo() {
    const navigate = useNavigate();

    return (
        <Navbar.Brand
            className="cursor-pointer"
            onClick={() => {
                navigate("/main");
            }}
        >
            <span className="text-lightest_pink text-2xl lg:text-3xl flex hover:text-light_pink transition-all ">
                <span className="mr-2 min-[768px]:hidden min-[1200px]:block">
                    We
                </span>
                <Image
                    className=" min-[320px]:w-11 min-[320px]:h-9 min-[420px]:w-11 lg:w-10 lg:h-8"
                    src={heart}
                />
                <span className="ml-2 min-[768px]:hidden min-[1200px]:block">
                    Books
                </span>
            </span>
        </Navbar.Brand>
    );
}

export default NavBarLogo;
