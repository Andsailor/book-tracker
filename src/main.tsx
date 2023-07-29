import ReactDOM from "react-dom/client";
import { Provider } from "react-redux/es/exports";
import { BrowserRouter } from "react-router-dom";
import "./firebase.tsx";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

import App from "./App.tsx";

import { store } from "../src/store/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
);
