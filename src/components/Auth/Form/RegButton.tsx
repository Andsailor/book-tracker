import { useNavigate } from "react-router-dom";

import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function RegButton() {
    const navigate = useNavigate();
    return (
        <Form.Group>
            <Form.Label className="mt-3 text-creamy">
                Have no account yet?
            </Form.Label>
            <Button
                onClick={() => navigate("/registration")}
                size="lg"
                className="w-100"
                variant="pink"
            >
                Create new account
            </Button>
        </Form.Group>
    );
}

export default RegButton;
