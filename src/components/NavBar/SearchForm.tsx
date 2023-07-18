import { Form, Button } from "react-bootstrap";

function SearchForm() {
    return (
        <Form
            className="d-flex items-center md:w-8/12 md:ml-0 min-[992px]:w-4/12  min-[992px]:ml-7
        min-[1200px]:w-5/12 xl:w-5/12 2xl:ml-16 "
        >
            <Form.Control
                type="search"
                placeholder="Find book"
                className="me-2 lg:h-9 xl:h-10"
                aria-label="Search"
            />
            <Button className="lg:h-9 xl:h-10" variant="lighter-pink">
                Search
            </Button>
        </Form>
    );
}

export default SearchForm;
