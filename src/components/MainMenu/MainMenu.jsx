
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { IsLoggedIn } from "../../redux/selectors"

const MainMenu = () => {

    const IsLoggin = useSelector(IsLoggedIn)

    return (
        <nav>
            <ul>
                <li>
                    <NavLink to="/" >
                        Home
                    </NavLink>
                </li>
                {IsLoggin && (
                    <li>
                        <NavLink to="/contacts">
                            Contacts
                        </NavLink>
                    </li>
                )}
            </ul>
        </nav>

    );
};

export default MainMenu