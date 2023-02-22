import classes from "../../assets/styles/Navbar.module.css"
import { Icon } from '@iconify/react';

const Navbar = () => {
    return (
        <div className={classes.navbar}>
            <div className={classes.icons}>
                <Icon icon="mdi:bell" width="24" height="24" />
                <Icon icon="bxs:exit" width="24" height="24" />
            </div>
        </div>);
}

export default Navbar;