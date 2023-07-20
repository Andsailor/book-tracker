import { Form, Button } from "react-bootstrap";

function SearchForm() {
    return (
        <Form className="d-flex w-full sm:hidden">
            <Form.Control
                type="search"
                placeholder="Find book"
                className="me-2"
                aria-label="Search"
            />
            <Button variant="lighter-pink">Search</Button>
        </Form>
    );
}

export default SearchForm;
