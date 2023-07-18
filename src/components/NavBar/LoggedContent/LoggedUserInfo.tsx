import logout from "../../../assets/logout.png";

interface ILoggedUserInfo {
    login: string | null;
    logOut: () => void;
}

function LoggedUserInfo({ login, logOut }: ILoggedUserInfo) {
    return (
        <span className="text-lightest_pink text-xl d-flex items-center">
            <span className="text-light_pink mr-2">{login}</span> |{" "}
            <span
                className="cursor-pointer text-pink hover:text-creamy transition-all duration-300"
                onClick={() => {
                    logOut();
                    window.location.reload();
                }}
            >
                <img className="w-6 ml-2" src={logout} alt="logout button" />
            </span>
        </span>
    );
}

export default LoggedUserInfo;
