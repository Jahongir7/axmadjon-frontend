import { NavLink } from "react-router-dom";
import Logo from "../../assets/images/logo";
import classes from "../../assets/styles/Sidebar.module.css"
import { Icon } from '@iconify/react';

const SideBar = () => {
    return (
        <div className={classes.sidebar}>
            <Logo />
            <b>Asadbek Baxtiyarov</b>
            <p>Buxgalter</p>
            <ul>
                <NavLink to="statistics" className={({ isActive }) =>
                    isActive ? classes.active : undefined
                }>
                    <li>
                        <Icon icon="ooui:chart" width="24" height="24" /> Statistika
                    </li>
                </NavLink>
                <NavLink to="clients" className={({ isActive }) =>
                    isActive ? classes.active : undefined}>
                    <li>
                        <Icon icon="mdi:users-group" width="24" height="24" />  Mijozlar
                    </li>
                </NavLink>

                <NavLink to="client-add" className={({ isActive }) =>
                    isActive ? classes.active : undefined}>
                    <li>
                        <Icon icon="mingcute:user-add-fill" width="24" height="24" />  Mijoz qo'shish
                    </li>
                </NavLink>
                <NavLink to="buildings" className={({ isActive }) =>
                    isActive ? classes.active : undefined}>
                    <li>
                        <Icon icon="fluent-emoji:office-building" width="24" height="24" />  Binolar
                    </li>
                </NavLink>
                <NavLink to="building-add" className={({ isActive }) =>
                    isActive ? classes.active : undefined}>
                    <li>
                        <Icon icon="bi:building-add" width="24" height="24" />  Bino qo'shish
                    </li>
                </NavLink>

            </ul>
        </div>
    );
}

export default SideBar;