import classes from "../../assets/styles/Navbar.module.css"
import { Icon } from '@iconify/react';
import useWindowDimensions from "./ScreenSize";

const Navbar = ({setMenu, menu}) => {
    const {width} = useWindowDimensions();
    return (
        <div className={classes.navbar}>
          {width<880 ?  <Icon icon="mingcute:menu-fill" width="24" height="24" onClick={() => setMenu(!menu)}/> : <p></p>} 
            <div className={classes.icons}>
                <Icon icon="mdi:bell" width="24" height="24" />
                <Icon icon="bxs:exit" width="24" height="24" />
            </div>
        </div>);
}

export default Navbar;