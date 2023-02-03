
import { useDispatch, useSelector } from 'react-redux';
import { UsersName } from "../../redux/selectors"
import { logout } from 'redux/authentication/authentication.thunk';

const UserMenu = () => {
    const userName = useSelector(UsersName)
    const dispatch = useDispatch()


    return (
        <div >
            <h3>User menu</h3>
            <p >Welcome, {userName} </p>
            <button
                type="button"
                onClick={() => dispatch(logout())}
            >
                Logout
            </button>
        </div>
    );
};

export default UserMenu