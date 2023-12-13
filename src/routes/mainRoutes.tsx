import {Routes,Route } from "react-router-dom";
// Pages
import Login from "../pages/login";


export default function MainRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Login/>} />
        </Routes>
    );
}