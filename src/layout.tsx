import NavBar from "./navbar.tsx";
import Footer from "./footer.tsx";
import {Outlet} from "react-router-dom";

export default function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <Footer />
        </>
    )
}