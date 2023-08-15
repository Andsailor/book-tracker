import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../store/store";
import useAuth from "../../hooks/useAuth.hook";

import { setErrorMessage } from "../../store/slices/authSlice";

import AuthForm from "./Form/AuthForm";

function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const { logIn } = useAuth();

    const signIn = async (email: string, password: string) => {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                logIn(
                    userCredential.user.email as string,
                    userCredential.user.uid
                );
                navigate("/main");
            })
            .catch((error: { [key: string]: string }) => {
                if ("message" in error) {
                    dispatch(setErrorMessage(error.message));
                    navigate("/error");
                }
            });
    };
    return <AuthForm handleSubmit={signIn} title="Login" pageTitle="Sign in" />;
}

export default Login;
