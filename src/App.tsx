import { Route, Routes, Link } from "react-router-dom";

import {
    LoginPage,
    RegisterPage,
    MainPage,
    WelcomePage,
    ErrorPage,
} from "./pages/Pages";
import AboutBook from "./components/Content/AboutBook";
import BooksToRead from "./components/Content/BooksToRead";
import BooksSearchResult from "./components/Content/BooksSearchResult";
import { Container, Image } from "react-bootstrap";

import git from "./assets/logo.png";

function App() {
    return (
        <Container className="bg-main font-mono min-h-screen relative p-2">
            <Routes>
                <Route path="/" element={<WelcomePage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/main" element={<MainPage />}>
                    <Route path="toread" element={<BooksToRead />} />
                    <Route path="result" element={<BooksSearchResult />} />
                    <Route path="result/:title" element={<AboutBook />} />
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
