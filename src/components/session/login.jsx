import React, {useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {login} from '../../actions/session_actions';

const LoginForm = () => {
    const dispatch = useDispatch();
    const errors = useSelector(state => state.errors.session);


    const useInput = (type, prefill) => {
        const [value, setValue] = useState("");
        const input = <input 
        value={value} 
        onChange={e => setValue(e.target.value)} 
        type={type} 
        placeholder={prefill}

        />;
        return [value, input];
    }

    const formatErr = msg => (
        <p className='error'>{msg}</p>
    )

    const [email, emailInput] = useInput("Text", "Email")
    const [password, passwordInput] = useInput("Password", "Password")

    const handleSubmit = e => {
        e.preventDefault();
        const user = {email, password};
        dispatch(login(user));

    }

    return (
        <>
        <form onSubmit={handleSubmit}>
            <label className={'email' in errors ? 'red-border' : null}>
                
                {emailInput}
            </label>
            {'email' in errors ? formatErr(errors.email) : null}

            <label className={'password' in errors ? 'red-border' : null}>
                
                {passwordInput}
            </label>
            {'password' in errors ? formatErr(errors.password) : null}
            <br /><br />
            <input type="submit" className='btn'/>
        </form>
        </>
    )
}

export default LoginForm;

