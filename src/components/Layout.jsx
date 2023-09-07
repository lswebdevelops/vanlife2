import { Outlet } from "react-router-dom";
import Header from "./Heades";

const Layout = () => {
    return (
        <>
        <Header />
        <h1>This is the layout</h1>
        <Outlet />

        </>
    )
}

export default Layout;
