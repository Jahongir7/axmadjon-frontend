import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo";
import classes from "../../assets/styles/Sidebar.module.css"
import { Icon } from '@iconify/react';
import useWindowDimensions from "./ScreenSize";

const SideBar = ({ menu, setMenu }) => {
    const { width } = useWindowDimensions();
    return (
        <>
            <div className={`${width > 880 ? classes.sidebar : classes.sidebar_mob} ${menu ? classes.menu_active : ""}`}>
                {width < 880 ? <Icon icon="fa:close" onClick={() => setMenu(!menu)} className={classes.align_right} width="24" height="24" /> : ""}
               {width>880 ?  <Logo /> : ""}
                <b>Asadbek Baxtiyarov</b>
                <p>Buxgalter</p>
                <ul>
                    <NavLink to="statistics" onClick={() => setMenu(!menu)} className={({ isActive }) =>
                        isActive ? classes.active : undefined
                    }>
                        <li>
                            <Icon icon="ooui:chart" width="24" height="24" /> Statistika
                        </li>
                    </NavLink>
                    <NavLink onClick={() => setMenu(!menu)} to="clients" className={({ isActive }) =>
                        isActive ? classes.active : undefined}>
                        <li>
                            <Icon icon="mdi:users-group" width="24" height="24" />  Mijozlar
                        </li>
                    </NavLink>

                    <NavLink onClick={() => setMenu(!menu)} to="client-add" className={({ isActive }) =>
                        isActive ? classes.active : undefined}>
                        <li>
                            <Icon icon="mingcute:user-add-fill" width="24" height="24" />  Mijoz qo'shish
                        </li>
                    </NavLink>
                    <NavLink onClick={() => setMenu(!menu)} to="buildings" className={({ isActive }) =>
                        isActive ? classes.active : undefined}>
                        <li>
                            <Icon icon="fluent-emoji:office-building" width="24" height="24" />  Binolar
                        </li>
                    </NavLink>
                    <NavLink onClick={() => setMenu(!menu)} to="building-add" className={({ isActive }) =>
                        isActive ? classes.active : undefined}>
                        <li>
                            <Icon icon="bi:building-add" width="24" height="24" />  Bino qo'shish
                        </li>
                    </NavLink>

                </ul>
            </div>
        </>
    );
}

export default SideBar;