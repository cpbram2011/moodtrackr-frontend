import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {signup} from '../../actions/session_actions';

const SignupForm = () => {
    
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);
    window.errors = errors;
    
    const useInput = (type, prefill) => {
        const [value, setValue] = useState("");
        const input = <input 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        placeholder={prefill}
        type={type} />;
        return [value, input];
    }
    
    const formatErr = msg => (
        <p className='error'>{msg}</p>
    )

    const [username, usernameInput] = useInput("Text", "Username")
    const [email, emailInput] = useInput("Text", "Email")
    const [password, passwordInput] = useInput("Password", "Password")
    const [password2, password2Input] = useInput("Password", "Re-type password")

    const handleSubmit = e => {
        e.preventDefault();
        const user = {username, email, password, password2};
        dispatch(signup(user));

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label  className={'username' in errors ? 'red-border' : null}>
                
                {usernameInput}
            </label>
            {'username' in errors ? formatErr(errors.username) : null}
            <label  className={'email' in errors ? 'red-border' : null}>
                
                {emailInput}
            </label>
            {'email' in errors ? formatErr(errors.email) : null}
            <label className={'password' in errors ? 'red-border' : null}>
                {passwordInput}
            </label>
            {'password' in errors ? formatErr(errors.password) : null}
            <label className={'password2' in errors ? 'red-border' : null}>
                
                {password2Input}
            </label>
            {'password2' in errors ? formatErr(errors.password2) : null}
            <br /><br />
            <input type="submit" className='btn'/>
        </form>
        </>
    )
}

export default SignupForm;

