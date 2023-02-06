
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { IsLoggedIn } from 'redux/selectors';


const PublicRoute = ({ component: Component, redirectTo = "/" }) => {
    const LoggedIn = useSelector(IsLoggedIn);
    return LoggedIn ? <Navigate to={redirectTo} /> : Component;
}
export default PublicRoute