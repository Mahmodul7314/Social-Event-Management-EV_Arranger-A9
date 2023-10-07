import { Outlet } from "react-router-dom";
import Navbar from "../components/Header/Navbar";
import Footer from "../components/SharedComponents/Footer";


const MainLayout = () => {
    return (
        <div>
            <div className="max-w-screen-xl px-10 mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
            </div>
           
        </div>
    );
};

export default MainLayout;