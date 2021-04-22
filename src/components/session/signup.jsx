import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../actions/session_actions';

const SignupForm = () => {
    
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);
    window.errors = errors;
    
    const useInput = type => {
        const [value, setValue] = useState("");
        const input = <input value={value} onChange={e => setValue(e.target.value)} type={type} />;
        return [value, input];
    }
    
    const formatErr = msg => (
        <p className='error'>{msg}</p>
    )

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
            <label  className={'username' in errors ? 'red-border' : null}>
                Username
                {usernameInput}
            </label>
            {'username' in errors ? formatErr(errors.username) : null}
            <label  className={'email' in errors ? 'red-border' : null}>
                Email
                {emailInput}
            </label>
            {'email' in errors ? formatErr(errors.email) : null}
            <label className={'password' in errors ? 'red-border' : null}>
                Password
                {passwordInput}
            </label>
            {'password' in errors ? formatErr(errors.password) : null}
            <label className={'password2' in errors ? 'red-border' : null}>
                Re-type Password
                {password2Input}
            </label>
            {'password2' in errors ? formatErr(errors.password2) : null}
            <input type="submit"/>
        </form>
        </>
    )
}

export default SignupForm;

