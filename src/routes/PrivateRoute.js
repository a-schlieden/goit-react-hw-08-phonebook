
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { IsLoggedIn, IsRefreshing } from 'redux/selectors';


const PrivateRoute = ({ component: Component, redirectTo = "/" }) => {
    const LoggedIn = useSelector(IsLoggedIn);
    const refreshing = useSelector(IsRefreshing);
    const IsRedirect = !refreshing && !LoggedIn;
    return IsRedirect ? <Navigate to={redirectTo} /> : Component;
}
export default PrivateRoute