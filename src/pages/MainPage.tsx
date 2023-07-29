import { Outlet } from "react-router-dom";

import NavBar from "../components/NavBar/NavBar";
import SearchForm from "../components/NavBar/SearchForm";

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
