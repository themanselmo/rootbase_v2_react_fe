import { useState } from "react"
import { post } from "../util/requests"

function Login() {
    const [formData, setFormData] = useState({
        name: '',
        emailAddress: '',
        firstName: '',
        lastName: '',
        password: '',
    })

    const [loggingIn, setLoggingIn] = useState(true)

    const handleFormDataChange = (e: React.ChangeEvent<any>) => {
        setFormData(prevState => ({...prevState, [e.target.name]: e.target.value}))
    }

    const handleLogin = () => {
        post('/login', {
            emailAddress: formData.emailAddress,
            password: formData.password
        }).then(data => console.log(data))
        // navigate to landing page

    }

    const handleSignUp = () => {
        post('/organizations', formData)
        .then(data => console.log(data))
        // navigate to landing page
    }

    if (loggingIn) {
        return (
            <div className='login-form'>
                <p>please log in</p>
                <label>Email Address</label>
                <input onChange={handleFormDataChange} name='emailAddress' value={formData.emailAddress}/>
                <label>Password</label>
                <input onChange={handleFormDataChange} name='password' value={formData.password}/>
                <button onClick={handleLogin}>submit</button>
                <button onClick={() => setLoggingIn(false)}>sign up</button>
            </div>
        )
    } else {
        return (
            <div className='login-form'>
                <p>please sign up</p>
                <label>Garden Name</label>
                <input onChange={handleFormDataChange} name='name' value={formData.name}/>
                <label>Email Address</label>
                <input onChange={handleFormDataChange} name='emailAddress' value={formData.emailAddress}/>
                <label>First Name</label>
                <input onChange={handleFormDataChange} name='firstName' value={formData.firstName}/>
                <label>Last Name</label>
                <input onChange={handleFormDataChange} name='lastName' value={formData.lastName}/>
                <label>Password</label>
                <input onChange={handleFormDataChange} name='password' value={formData.password}/>
                <button onClick={handleSignUp}>submit</button>
                <button onClick={() => setLoggingIn(true)}>log in</button>
            </div>
        )
    }
}

export default Login