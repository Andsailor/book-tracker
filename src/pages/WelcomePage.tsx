import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Book from "../components/Book/Book";

import "../styles/bootstrap-custom.css";

//! TODO
//? 1. Переадресация на главную страницу, если пользователь авторизован.

function WelcomePage() {
    const navigate = useNavigate();
    useEffect(() => {
        if (localStorage.getItem("email") !== null) {
            navigate("/main");
        }
    });
    return (
        <div className="pt-48 text-center">
            <Book></Book>
            <h1 className="text-lightest_pink">We love Books</h1>
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
                    className="w-auto"
                >
                    Skip registration
                </Button>{" "}
            </div>
        </div>
    );
}

export default WelcomePage;
