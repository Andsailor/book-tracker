import { useState } from "react";

const useValidation = () => {
    const [validated, setValidated] = useState(false);
    return {
        validated,
        setValidated,
    };
};

export default useValidation;
