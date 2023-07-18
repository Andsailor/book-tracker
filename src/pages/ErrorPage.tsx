import useValidation from "../hooks/useValidation.hook";

function ErrorPage() {
    const { errorCode } = useValidation();
    console.log(errorCode);
    return (
        <div>
            Oups...
            {errorCode}
        </div>
    );
}

export default ErrorPage;
