import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth.hook";

import { Navbar, Image } from "react-bootstrap";
import LoggedUserInfo from "./LoggedUserInfo";
import LoggedNavigation from "./LoggedNavigation";

import signIn from "../../../assets/signin.png";

interface ILoggedUserBurger {
    setHidden: React.Dispatch<React.SetStateAction<boolean>>;
}

function LoggedUserBurger({ setHidden }: ILoggedUserBurger) {
    const navigate = useNavigate();
    const { isLogged, logOut, login } = useAuth();

    const loggedUserEmail = isLogged && (
        <LoggedUserInfo logOut={logOut} login={login} />
    );

    const loggedNavigation = isLogged ? <LoggedNavigation /> : null;

    const burgerMenu = isLogged ? (
        <>
            <Navbar.Toggle
                onClick={() => setHidden((value) => (value = !value))}
            />
            <Navbar.Collapse className="justify-end">
                {loggedNavigation}
                <Navbar.Text>{loggedUserEmail}</Navbar.Text>
            </Navbar.Collapse>
        </>
    ) : (
        <span
            onClick={() => navigate("/login")}
            className="text-lightest_pink text-xl cursor-pointer hover:text-pink transition-all duration-300 d-flex items-center"
        >
            <span className="max-[768px]:hidden min-[768px]:visible">
                Sign in
            </span>
            <Image
                className="min-[320px]:visible md:hidden w-10 h-10 ml-2"
                src={signIn}
                alt="log in icon"
            />
        </span>
    );
    return <>{burgerMenu}</>;
}

export default LoggedUserBurger;
