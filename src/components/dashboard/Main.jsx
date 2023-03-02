import { Link, Outlet } from "react-router-dom";
import SideBar from "./Sidebar";
import classes from "../../assets/styles/Main.module.css"
import Navbar from "./Navbar";
import { useState } from "react";

const Main = () => {
    const [menu, setMenu] = useState(false);
    return (
        <div className={classes.main}>
            <div className={classes.main_sidebar}>
                <SideBar menu={menu} setMenu={setMenu}/>
            </div>
            <div className={classes.main_content}>
                <Navbar menu={menu} setMenu={setMenu}/>
                <Outlet />
            </div>
        </div>
    );
}

export default Main;