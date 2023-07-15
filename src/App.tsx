import { Route, Routes, Link } from "react-router-dom";

import { LoginPage, RegisterPage, MainPage, WelcomePage } from "./pages/Pages";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";

import git from "./assets/logo.png";
import { Row, Col } from "react-bootstrap";

function App() {
    return (
        <Container className="bg-main font-mono h-screen relative p-0">
            <Row>
                <Col>
                    <Routes>
                        <Route path="/" element={<WelcomePage />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/main" element={<MainPage />} />
                        <Route
                            path="/registration"
                            element={<RegisterPage />}
                        />
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
                </Col>
            </Row>
        </Container>
    );
}

export default App;
