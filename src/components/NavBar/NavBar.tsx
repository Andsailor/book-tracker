import { useState } from "react";
import useAuth from "../../hooks/useAuth.hook";

import { Navbar, Container, Image } from "react-bootstrap";
import SearchForm from "./SearchForm";
import LoggedUserBurger from "./LoggedContent/LoggedUserBurger";
import NavBarLogo from "./NavBarLogo";

import logout from "../../assets/logout.png";

function NavBar() {
    const [hidden, setHidden] = useState(false);
    const { logOut, isLogged } = useAuth();

    const authorizedUserFormStyle =
        "max-[767px]:hidden md:w-8/12 md:ml-0 min-[992px]:w-5/12  min-[992px]:ml-7 min-[1200px]:w-3/8 xl:w-5/12 2xl:ml-16";
    const unauthorizedUserFormStyle =
        "max-[767px]:hidden md:w-8/12 md:ml-0 min-[992px]:w-6/12  min-[992px]:ml-0 min-[1200px]:w-7/12 xl:w-7/12";

    const style = isLogged
        ? authorizedUserFormStyle
        : unauthorizedUserFormStyle;

    return (
        <>
            <Navbar expand="lg" className="bg-inherit">
                <Container>
                    <NavBarLogo />
                    <div className={style}>
                        <SearchForm />
                    </div>
                    <LoggedUserBurger setHidden={setHidden} />
                    {!hidden && isLogged && (
                        <Image
                            onClick={() => {
                                logOut();
                                window.location.reload();
                            }}
                            className="w-10 max-[767px]:hidden min-[992px]:hidden"
                            src={logout}
                        />
                    )}
                </Container>
            </Navbar>
        </>
    );
}

export default NavBar;
