import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth.hook";

import { Navbar, Container, Image } from "react-bootstrap";
import SearchForm from "./SearchForm";
import LoggedUserBurger from "./LoggedContent/LoggedUserBurger";

import heart from "../../assets/heart.png";
import logout from "../../assets/logout.png";

//! TODO
//? 1. Продумать UI навбара.
//? 2. Пока в голову приходят только вкладки по типу "избранное", "популярное"
//? 3. Рефакторинг, дробление на более маленькие частицы

function NavBar() {
    const [hidden, setHidden] = useState(false);
    const navigate = useNavigate();
    const { logOut, isLogged } = useAuth();

    return (
        <>
            <Navbar expand="lg" className="bg-inherit">
                <Container>
                    <Navbar.Brand
                        className="cursor-pointer"
                        onClick={() => navigate("/main")}
                    >
                        <span className="text-lightest_pink md:text-2xl lg:text-3xl flex hover:text-light_pink transition-all">
                            <span className="mr-2 md:hidden min-[992px]:block">
                                We
                            </span>
                            <Image
                                className=" md:w-11 md:h-9 lg:w-10 lg:h-8"
                                src={heart}
                            />
                            <span className="ml-2 md:hidden min-[992px]:block">
                                Books
                            </span>
                        </span>
                    </Navbar.Brand>
                    <SearchForm />
                    <LoggedUserBurger setHidden={setHidden} />
                    {!hidden && isLogged && (
                        <Image
                            onClick={() => {
                                logOut();
                                window.location.reload();
                            }}
                            className="w-8 min-[992px]:hidden"
                            src={logout}
                        />
                    )}
                </Container>
            </Navbar>
            <Outlet />
        </>
    );
}

export default NavBar;
