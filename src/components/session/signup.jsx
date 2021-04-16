import React, {useState} from 'react';
import {useDispatch} from 'react-redux';
import {signup} from '../../actions/session_actions';

const SignupForm = () => {
    
    const dispatch = useDispatch();

    const useInput = type => {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }

    const [username, usernameInput] = useInput("Text")
    const [email, emailInput] = useInput("Text")
    const [password, passwordInput] = useInput("Password")
    const [password2, password2Input] = useInput("Password")

    const handleSubmit = e => {
        e.preventDefault();
        const user = {username, email, password, password2};
        dispatch(signup(user));

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            username
            {usernameInput}
            email
            {emailInput}
            password
            {passwordInput}
            re-type password
            {password2Input}
            <input type="submit"/>
        </form>
        </>
    )
}

export default SignupForm;

