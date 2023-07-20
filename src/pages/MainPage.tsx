import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import SearchForm from "../components/NavBar/SearchForm";

//! TODO
//? 1. Продумать логику приватности и функционал, который будет доступен пользователю без регистрации.

function MainPage() {
    return (
        <div>
            <div>
                <NavBar />
                <div className="min-[768px]:hidden mt-3 w-full m-auto p-2">
                    <SearchForm />
                </div>
            </div>
            <Outlet />
        </div>
    );
}

export default MainPage;
