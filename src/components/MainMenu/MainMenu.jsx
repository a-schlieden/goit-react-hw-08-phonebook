import { NavLink } from 'react-router-dom';
//import { useAuth } from 'hooks';


const MainMenu = () => {
    //const { isLoggedIn } = useAuth();

    return (
        <nav>
            <NavLink to="/">
                Home
            </NavLink>
            {/* {isLoggedIn && ( */}
            <NavLink to="/contacts">
                Contacts
            </NavLink>
            {/* )} */}
        </nav>
    );
};

export default MainMenu