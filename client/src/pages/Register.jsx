import { useState } from "react"
import { Link , useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux';
import TitleBar from "../components/TitleBar";

const Register = () => {

    const [firstName, setFirstName] = useState ('')
    const [lastName, setLastName] = useState ('')
    const [email, setEmail] = useState ('')
    const [password, setPassword] = useState ('')

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const onChangeFirstNameHandler = (event) => {
        setFirstName (event.target.value);
    }

    const onChangeLastNameHandler = (event) => {
        setLastName (event.target.value);
    }

    const onChangePasswordHandler = (event) => {
        setPassword (event.target.value);
    }

    const onChangeEmailHandler = (event) => {
        setEmail (event.target.value);
    }

    const onSubmitFormHandler = (event) => {
        event.preventDefault(); 
        dispatch({
            type: 'REGISTER',
            payload:{
                lastName: lastName , 
                firstName: firstName, 
                email: email,
                password: password
            } })
        setFirstName('')
        setLastName('')
        setEmail('')
        setPassword('')
        navigate('/')
    }

    return(
        <>
        <TitleBar/>
        <div className="register-container">
            <form onSubmit={ onSubmitFormHandler }>
                <h2> Create an account </h2>
                <input 
                    type='text'
                    name='firstName'
                    value={ firstName }
                    placeholder = 'First name'
                    onChange = {onChangeFirstNameHandler}
                /> <br/>
                <input 
                    type='text'
                    name='lastName'
                    value={ lastName }
                    placeholder = 'Last name'
                    onChange = {onChangeLastNameHandler}
                /><br/>
                <input 
                    type='email'
                    name='email'
                    value={ email }
                    placeholder = 'Email'
                    onChange = {onChangeEmailHandler}
                /><br/>
                <input 
                    type='password'
                    name='password'
                    value={ password }
                    placeholder = 'Password'
                    onChange = {onChangePasswordHandler}
                /><br/>
                <button type="submit"> Create account </button>
                <p> Already have an account? &nbsp;
                    <Link to = "/"> Login </Link> 
                </p>     
            </form>
        </div>
        </>
    )
}

export default Register;