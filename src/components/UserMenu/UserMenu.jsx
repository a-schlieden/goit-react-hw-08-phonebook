
import { useDispatch, useSelector } from 'react-redux';
import { UsersName } from "../../redux/selectors"
import { logout } from 'redux/authentication/authentication.thunk';
import style from './UserMenu.module.css';

const UserMenu = () => {
    const userName = useSelector(UsersName)
    const dispatch = useDispatch()


    return (
        <div >
            <p>Welcome, {userName}</p>
            <button
                className={style.logutbtn}
                type="button"
                onClick={() => dispatch(logout())}
            >
                Logout
            </button>
        </div>
    );
};

export default UserMenu