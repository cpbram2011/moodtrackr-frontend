import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {login} from '../../actions/session_actions';

const LoginForm = () => {
    
    const dispatch = useDispatch();

    const useInput = type => {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

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
            email
            {emailInput}
            password
            {passwordInput}
            <input type="submit"/>
        </form>
        </>
    )
}

export default LoginForm;

