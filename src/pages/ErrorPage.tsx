import { useAppSelector, useAppDispatch } from "../store/store";

import { setErrorMessage } from "../store/slices/authSlice";

import { Button } from "react-bootstrap";

import errorImage from "../assets/error.png";

function ErrorPage() {
    const errorMessage = useAppSelector((store) => store.auth.errorMessage);
    const dispatch = useAppDispatch();

    const defaultErrorMessage = (
        <>
            <span className="mb-3">Possible reasons:</span>
            <p className="mb-2">1. Server side problems.</p>
            <p className="mb-2">2. Google API connection problems.</p>
            <p>3. Poor internet connection.</p>
        </>
    );

    const authErrorMessage = (
        <>
            <p className="text-pink">
                Reason: {errorMessage?.slice(22, -2).toUpperCase()}
            </p>
        </>
    );

    return (
        <div className="text-center p-4 max-[768px]:mt-12 md:p-24">
            <img
                className="w-40 animated m-auto"
                src={errorImage}
                alt="error image"
            />
            <h1 className="text-pink text-lg md:text-md mt-3 md:mt-5">
                Oups, something went wrong...
            </h1>
            <div className="text-lg md:text-2xl text-lightest_pink">
                {errorMessage === null && defaultErrorMessage}
                {errorMessage !== null && authErrorMessage}
            </div>
            <p className="text-center text-lightest_pink">
                If you faced any unexpectable type of error, please let me know
                it. My contact information can be found in my github.
            </p>
            <Button
                className="mt-3"
                onClick={() => {
                    dispatch(setErrorMessage(null));
                    history.back();
                }}
                variant="pink"
            >
                Try again
            </Button>
        </div>
    );
}

export default ErrorPage;
