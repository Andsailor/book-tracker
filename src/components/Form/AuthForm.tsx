import { useNavigate } from "react-router-dom";
import { useState } from "react";
import useValidation from "../../hooks/useValidation.hook";

import RegButton from "./RegButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Book from "../Book/Book";

import "../../styles/bootstrap-custom.css";

//! TODO
//? 2. Валидировать форму

interface IFormProps {
    title: string;
    pageTitle: string;
    handleSubmit: (email: string, password: string) => void;
}

function AuthForm({ title, handleSubmit, pageTitle }: IFormProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { validated, setValidated } = useValidation();

    return (
        <div className="pt-44 max-w-sm m-auto">
            <Book />
            <h1 className="text-center mt-2 text-lightest_pink">{pageTitle}</h1>
            <Form
                validated={validated}
                onSubmit={(e) => {
                    setValidated(false);
                    e.preventDefault();
                    handleSubmit(email, password);
                }}
            >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className="text-creamy">
                        Email address
                    </Form.Label>
                    <Form.Control
                        className="valid:bg-creamy"
                        required
                        value={email}
                        onChange={(e) => {
                            setValidated(true);
                            setEmail(e.target.value);
                        }}
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-creamy">Password</Form.Label>
                    <Form.Control
                        className="valid:bg-creamy"
                        required
                        value={password}
                        onChange={(e) => {
                            setValidated(true);
                            setPassword(e.target.value);
                        }}
                        size="lg"
                        type="password"
                        placeholder="Password"
                    />
                </Form.Group>
                <div className=" mt-4 flex justify-between">
                    <Button
                        type="submit"
                        className="w-3/6"
                        variant="light-pink"
                        size="lg"
                    >
                        {title}
                    </Button>{" "}
                    <Button
                        onClick={() => navigate("/")}
                        className="w-5/12"
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
