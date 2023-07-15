import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.hook";

import { Navbar, Container, Image } from "react-bootstrap";

import heart from "../../assets/heart.png";

//! TODO
//? 1. Продумать UI навбара.
//? 2. Пока в голову приходят только вкладки по типу "избранное", "популярное"
//? 3. Реализовать логику выхода из аккаунта
//? 4. Подумать, как заставить страницу реагировать на изменение localstorage

function NavBar() {
    const navigate = useNavigate();
    const { logOut, isLoged, login } = useAuth();

    const loggedUserEmail = isLoged ? (
        <span className="text-lightest_pink text-xl">
            <span className="text-light_pink">{login}</span> |{" "}
            <span
                className="cursor-pointer text-pink hover:text-creamy transition-all duration-300"
                onClick={() => {
                    logOut();
                    window.location.reload();
                }}
            >
                Sign out
            </span>
        </span>
    ) : (
        <span
            onClick={() => navigate("/login")}
            className="text-lightest_pink text-xl cursor-pointer hover:text-pink  transition-all duration-300"
        >
            Sign in
        </span>
    );
    return (
        <Navbar expand="lg" className="bg-inherit">
            <Container>
                <Navbar.Brand
                    className="cursor-pointer"
                    onClick={() => navigate("/main")}
                >
                    <span className="text-lightest_pink text-3xl flex hover:text-light_pink transition-all">
                        <span className="mr-2">We</span>
                        <Image className="w-10" src={heart} />
                        <span className="ml-2">Books</span>
                    </span>
                </Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>{loggedUserEmail}</Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;
