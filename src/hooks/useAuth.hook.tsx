import { useEffect, useState } from "react";

//! TODO
//? 1. Реализовать хук авторизации, который будет проверять, авторизован пользователь, или нет.

const useAuth = () => {
    const [login, setLogin] = useState<string | null>("");
    console.log(login);
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
    };

    return {
        isLoged: login !== null,
        logIn,
        logOut,
        login,
    };
};

export default useAuth;
