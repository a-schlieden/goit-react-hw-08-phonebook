import { NavLink } from 'react-router-dom';
//import css from './AuthNav.module.css';

const AuthMenu = () => {
    return (
        <div>
            <h3>Auth menu</h3>
            <ul>
                <li>
                    <NavLink to="/register">
                        Register
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/login">
                        Log In
                    </NavLink>
                </li>
            </ul>


        </div>
    );
};

export default AuthMenu