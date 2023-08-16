import { useNavigate } from "react-router-dom";

import logout from "../../../assets/logout.png";

interface ILoggedUserInfo {
    login: string | null;
    logOut: () => void;
}

function LoggedUserInfo({ login, logOut }: ILoggedUserInfo) {
    const navigate = useNavigate();
    return (
        <span className="text-lightest_pink text-lg d-flex items-center">
            <span className="text-light_pink mr-2">{login}</span> |{" "}
            <span
                className="cursor-pointer text-pink hover:text-creamy transition-all duration-300"
                onClick={() => {
                    logOut();
                    navigate("/");
                }}
            >
                <img className="w-6 ml-2" src={logout} alt="logout button" />
            </span>
        </span>
    );
}

export default LoggedUserInfo;
