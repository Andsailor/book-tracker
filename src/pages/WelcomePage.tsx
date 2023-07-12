import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Book from "../components/Book/Book";

import "../styles/bootstrap-custom.css";

function WelcomePage() {
    const navigate = useNavigate();
    return (
        <div className="pt-48 text-center">
            <Book></Book>
            <h1 className="text-lightest_pink">We love Books</h1>
            <p className="text-xl text-lightest_pink">Book-tracking App</p>
            <div>
                <Button
                    size="lg"
                    onClick={() => navigate("/login")}
                    className="w-40"
                    variant="lighter-pink"
                >
                    Sign in
                </Button>{" "}
                <Button
                    size="lg"
                    onClick={() => navigate("/main")}
                    variant="pink"
                >
                    Skip registration
                </Button>{" "}
            </div>
        </div>
    );
}

export default WelcomePage;
