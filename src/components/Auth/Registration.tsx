import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../store/store";

import {
    setErrorMessage,
    setIsAccounCreated,
} from "../../store/slices/authSlice";

import AuthForm from "./Form/AuthForm";

function Registration() {
    const isAccountCreated = useAppSelector(
        (store) => store.auth.isAccountCreated
    );

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const createNewUser = async (email: string, password: string) => {
        const auth = getAuth();
        await createUserWithEmailAndPassword(auth, email, password)
            .then(() => {
                dispatch(setIsAccounCreated(true));
                setTimeout(() => {
                    navigate("/login");
                }, 2000);
            })
            .catch((error: { [key: string]: string }) => {
                if ("message" in error) {
                    dispatch(setErrorMessage(error.message));
                    navigate("/error");
                }
            })
            .finally(() => {
                setTimeout(() => {
                    dispatch(setIsAccounCreated(false));
                }, 2000);
            });
    };

    return (
        <>
            <AuthForm
                handleSubmit={createNewUser}
                title="Submit"
                pageTitle="Registration"
            />
            {isAccountCreated && (
                <div className="bg-light_pink max-w-sm mx-auto appear mt-8 h-12 rounded-md bg-opacity-70">
                    <div className="m-auto text-center p-2.5 text-lg font-bold">
                        Account has been created
                    </div>
                </div>
            )}
        </>
    );
}

export default Registration;
