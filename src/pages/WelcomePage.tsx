import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import BookIcon from "../components/BookIcon/BookIcon";

import "../styles/bootstrap-custom.css";

function WelcomePage() {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.getItem("email") !== null) {
            navigate("/main");
        }
    });

    return (
        <div className="max-[768px]:pt-28 pt-48 text-center appear">
            <BookIcon />
            <h1 className="text-lightest_pink mt-4">We love Books</h1>
            <p className="text-xl text-lightest_pink">Book-tracking App</p>
            <div>
                <Button
                    size="lg"
                    onClick={() => navigate("/login")}
                    className="w-auto"
                    variant="lighter-pink"
                >
                    Sign in
                </Button>{" "}
                <Button
                    size="lg"
                    onClick={() => navigate("/main")}
                    variant="pink"
                    className="w-auto lg:hover:none max-[356px]:mt-4"
                >
                    Skip registration
                </Button>{" "}
            </div>
        </div>
    );
}

export default WelcomePage;
