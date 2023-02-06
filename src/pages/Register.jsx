

import RegisterForm from 'components/RegisterForm/RegisterForm';
import style from './pages.module.css';

const Register = () => {
    return (
        <div className={style.pagesWrapp}>
            <RegisterForm />
        </div>
    )
}

export default Register