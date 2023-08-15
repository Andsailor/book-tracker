import { useNavigate } from "react-router-dom";
import { useState } from "react";

import RegButton from "./RegButton";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import BookIcon from "../../BookIcon/BookIcon";

import "../../../styles/bootstrap-custom.css";

interface IFormProps {
    title: string;
    pageTitle: string;
    handleSubmit: (email: string, password: string) => void;
}

function AuthForm({ title, handleSubmit, pageTitle }: IFormProps) {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [validated, setValidated] = useState(false);

    return (
        <div className="max-[1024px]:pt-12 pt-44 max-w-sm m-auto appear">
            <BookIcon />
            <h1 className="text-center mt-3 text-lightest_pink">{pageTitle}</h1>
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
                        Email address. <br />
                        <span className="text-light_pink">
                            Test: test@gmail.com
                        </span>
                    </Form.Label>
                    <Form.Control
                        className="valid:bg-creamy"
                        required
                        value={email}
                        onFocus={() => setValidated(true)}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                        size="lg"
                        type="email"
                        placeholder="Enter email"
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className="text-creamy">
                        Password. <br />
                        <span className="text-light_pink">Test: qwerty</span>
                    </Form.Label>
                    <Form.Control
                        className="valid:bg-creamy"
                        required
                        value={password}
                        onFocus={() => {
                            setValidated(true);
                        }}
                        onChange={(e) => {
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
