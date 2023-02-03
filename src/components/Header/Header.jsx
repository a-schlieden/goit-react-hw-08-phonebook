//import { NavLink } from "react-router-dom";
import style from './Header.module.css';

import AuthMenu from "components/AuthMenu/AuthMenu"
import MainMenu from "components/MainMenu/MainMenu"
import UserMenu from "components/UserMenu/UserMenu"
import { useSelector } from 'react-redux';

import { IsLoggedIn } from "../../redux/selectors"

const Header = () => {
    const IsLoggin = useSelector(IsLoggedIn)

    return (
        <header className={style.headerWrap} >
            <MainMenu />
            {IsLoggin ? <UserMenu /> : <AuthMenu />}
            {/* {IsLoggin ? 
           (<h3>User menu</h3>
            <UserMenu />) :
            (<h3>Auth menu</h3>
            <AuthMenu />)
            } */}
        </header>
    )
}

export default Header