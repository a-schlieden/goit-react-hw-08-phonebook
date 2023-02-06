
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
            <hr />
            {IsLoggin ? <UserMenu /> : <AuthMenu />}
        </header>
    )
}

export default Header