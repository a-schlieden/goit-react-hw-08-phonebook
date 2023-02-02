import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from 'redux/authentication/authentication.thunk';
//import css from './RegisterForm.module.css';

const LoginForm = () => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'email':
                return setEmail(value);
            case 'password':
                return setPassword(value);
            default:
                return;
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        dispatch(login({ email, password }));
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label >
                Email
                <input type="email" name="email" value={email} onChange={handleChange} />
            </label>
            <label>
                Password
                <input type="password" name="password" value={password} onChange={handleChange} />
            </label>
            <button type="submit">Register</button>
        </form>
    );
};

export default LoginForm