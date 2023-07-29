import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [login, setLogin] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        setLogin(JSON.parse(localStorage.getItem("email") as string) as string);
    }, []);

    const logIn = (email: string, id: string) => {
        localStorage.setItem("email", JSON.stringify(email));
        localStorage.setItem("id", JSON.stringify(id));
    };

    const logOut = () => {
        localStorage.removeItem("email");
        localStorage.removeItem("id");
        navigate("/main");
    };

    return {
        isLogged: login !== null,
        logIn,
        logOut,
        login,
    };
};

export default useAuth;
