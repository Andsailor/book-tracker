import { Route, Routes, Link } from "react-router-dom";

import {
    LoginPage,
    RegisterPage,
    MainPage,
    WelcomePage,
    ErrorPage,
} from "./pages/Pages";
import BooksToRead from "./components/Content/BooksToRead";
import BooksDone from "./components/Content/BooksDone";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import git from "./assets/logo.png";
import { Row, Col } from "react-bootstrap";

//!TODO
//? 1.Вложенный роутинг

function App() {
    return (
        <Container className="bg-main font-mono h-screen relative p-2">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />}>
                    <Route path="toread" element={<BooksToRead />} />
                    <Route path="done" element={<BooksDone />} />
                </Route>
                <Route path="/registration" element={<RegisterPage />} />
                <Route path="/error" element={<ErrorPage />} />
            </Routes>
            <footer className="p-2 fixed w-full left-0 bottom-0 flex justify-center">
                <Link to="https://github.com/Andsailor" target="_blank">
                    <Image
                        className="w-32 hover:drop-shadow-md"
                        src={git}
                        alt="github link"
                    />
                </Link>
            </footer>
        </Container>
    );
}

export default App;
