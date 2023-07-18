import { useNavigate } from "react-router-dom";

import { Navbar } from "react-bootstrap";
import LoggedUserInfo from "./LoggedUserInfo";
import LoggedNavigation from "./LoggedNavigation";

import useAuth from "../../../hooks/useAuth.hook";

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
            className="text-lightest_pink text-xl cursor-pointer hover:text-pink  transition-all duration-300"
        >
            Sign in
        </span>
    );
    return <>{burgerMenu}</>;
}

export default LoggedUserBurger;
