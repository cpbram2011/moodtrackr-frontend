import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../actions/session_actions';

const LoginForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);


    const useInput = type => {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    const formatErr = msg => (
        <p className='error'>{msg}</p>
    )

    const [email, emailInput] = useInput("Text")
    const [password, passwordInput] = useInput("Password")

    const handleSubmit = e => {
        e.preventDefault();
        const user = {email, password};
        dispatch(login(user));

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className={'email' in errors ? 'red-border' : null}>
                Email
                {emailInput}
            </label>
            {'email' in errors ? formatErr(errors.email) : null}

            <label className={'password' in errors ? 'red-border' : null}>
                Password
                {passwordInput}
            </label>
            {'password' in errors ? formatErr(errors.password) : null}

            <input type="submit"/>
        </form>
        </>
    )
}

export default LoginForm;

