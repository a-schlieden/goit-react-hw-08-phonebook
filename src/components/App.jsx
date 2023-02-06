import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import PublicRoute from '../routes/PublicRoute';
import PrivateRoute from '../routes/PrivateRoute';
import { Loader } from 'components/Loader/Loader';
import Layout from './Layout/Layout';
import Home from 'pages/Home';
import { refreshUser } from 'redux/authentication/authentication.thunk'

const Register = lazy(() => import('pages/Register'));
const Login = lazy(() => import('pages/Login'));
const MyContacts = lazy(() => import('pages/Contacts'));



export function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch])
  return (

    <div>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
              path="/register"
              element={
                <PublicRoute
                  redirectTo='/contacts'
                  component={<Register />
                  }
                />}
            />
            <Route
              path="/login"
              element={
                <PublicRoute
                  redirectTo='/contacts'
                  component={<Login />}
                />}
            />
            <Route
              path="/contacts"
              element={
                <PrivateRoute
                  redirectTo='/login'
                  component={<MyContacts />}
                />}
            />
            <Route path="*" element={<Home />} />
          </Route>
        </Routes>
      </Suspense>
      <ToastContainer
        position="top-right"
        autoClose={1500}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}
