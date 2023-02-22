import { Link, Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import classes from "../../assets/styles/Main.module.css"
import Navbar from "./Navbar";

const Main = () => {
    return (
        <div className={classes.main}>
            <div className={classes.main_sidebar}>
                <SideBar />
            </div>
            <div className={classes.main_content}>
                <Navbar />
                <Outlet />
            </div>
        </div>
    );
}

export default Main;