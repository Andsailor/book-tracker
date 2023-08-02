import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

import AuthForm from "./Form/AuthForm";

//! TODO
//? 1. Возможно, понадобится обработать ошибку и вывести на экран.
//? 2. Показать пользователю, что регистрация прошла успешно.

function Registration() {
    const navigate = useNavigate();

    const createNewUser = async (email: string, password: string) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                navigate("/login");
            })
            .catch((e) => console.log(e));
    };

    return (
        <AuthForm
            handleSubmit={createNewUser}
            title="Submit"
            pageTitle="Registration"
        />
    );
}

export default Registration;