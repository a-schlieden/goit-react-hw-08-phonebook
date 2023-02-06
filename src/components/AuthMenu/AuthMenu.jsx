import { NavLink } from 'react-router-dom';
//import css from './AuthNav.module.css';

const AuthMenu = () => {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        LogIn
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default AuthMenu