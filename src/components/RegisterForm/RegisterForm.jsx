import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { register } from 'redux/authentication/authentication.thunk';
//import css from './RegisterForm.module.css';

const RegisterForm = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleChange = ({ target: { name, value } }) => {
        switch (name) {
            case 'name':
                return setName(value);
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
        dispatch(register({ name, email, password }));
        //form.reset();
        setName('');
        setEmail('');
        setPassword('');
    };

    return (
        <form onSubmit={handleSubmit} autoComplete="off">
            <label >
                Username
                <input type="text" name="name" value={name} onChange={handleChange} />
            </label>
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

export default RegisterForm