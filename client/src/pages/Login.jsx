import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import TitleBar from "../components/TitleBar"

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [email, setEmail] =useState ('');
    const [password, setPassword] =useState ('');

    const onChangeEmailHandler = (event) => {
        setEmail (event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        setPassword (event.target.value);
    }

    const validateForm = () => {
        return (email=== 'user@gmail.com' && password ==='123')
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
/*         dispatch({
            type: 'LOGIN',
            payload:{
                email: email,
                password: password
            } }) */
        setEmail('')
        setPassword('')
        navigate('/rooms')
    }

        return(
            <>
            <TitleBar/>
            <div className="login-container">
                <form className="login-form" onSubmit={onSubmitFormHandler}>
                    <h2> Log in </h2>
                    {/* <label htmlFor='email' >email:</label> */}
                    <input 
                        type='text'
                        name='email'
                        value={email }
                        placeholder = 'email'
                        onChange = { onChangeEmailHandler}
                    /><br/>
                   {/*  <label htmlFor='password' >Password:</label> */}
                    <input 
                        type='password'
                        name='password'
                        placeholder='password'
                        value={ password }
                        onChange = { onChangePasswordHandler}
                    /><br/>
                    <button
                        type="submit"
                        disabled={!validateForm()}>
                            Login
                    </button>
                    <p> Don`t have an account? &nbsp;
                        <Link to = "/register"> Register </Link>
                    </p>
                </form> <br/>
            </div>
            </>
        )
}

export default Login;