

import RegisterForm from 'components/RegisterForm/RegisterForm';
import style from './pages.module.css';

const Register = () => {
    return (
        <div className={style.pagesWrapp}>
            <h2>Register Page</h2>
            <RegisterForm />
        </div>
    )
}

export default Register