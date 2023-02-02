//import { NavLink } from "react-router-dom";
import style from './Header.module.css';

import AuthMenu from "components/AuthMenu/AuthMenu"
import MainMenu from "components/MainMenu/MainMenu"
import UserMenu from "components/UserMenu/UserMenu"



const Header = () => {
    return (
        <header className={style.headerWrap} >
            <MainMenu />
            {/* {isLoggedIn ? <UserMenu /> : <AuthMenu />} */}
            <h3>User menu</h3>
            <UserMenu />
            <h3>Auth menu</h3>
            <AuthMenu />
        </header>
    )
}

export default Header