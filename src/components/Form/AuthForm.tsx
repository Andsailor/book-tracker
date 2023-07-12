import { useNavigate } from "react-router-dom";
import { useState } from "react";

import RegButton from "./RegButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Book from "../Book/Book";

import "../../styles/bootstrap-custom.css";

//! TODO
//? 2. Валидировать форму

interface IFormProps {
    title: string;
}

function AuthForm({ title }: IFormProps) {
    const navigate = useNavigate();
    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");

    return (
        <div className="p-44">
            <Book />
            <Form className="w-96 m-auto">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-creamy">
                        Email address
                    </Form.Label>
                    <Form.Control
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-creamy">Password</Form.Label>
                    <Form.Control
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        size="lg"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <div className="text-center mt-4">
                    <Button
                        type="submit"
                        className="w-1/2"
                        variant="light-pink"
                        size="lg"
                    >
                        {title}
                    </Button>{" "}
                    <Button
                        onClick={() => navigate("/")}
                        className="w-44"
                        variant="lighter-pink"
                        size="lg"
                    >
                        Back
                    </Button>
                </div>
                {title === "Login" && <RegButton />}
            </Form>
        </div>
    );
}

export default AuthForm;
