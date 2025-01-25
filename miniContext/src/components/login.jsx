import React, { useState, useContext} from 'react'
import UserContext from '../context/UserContext'
function Login() {
    const {username, setUsername} = useState('')
    const {password, setpassword} = useState('')

    //give the value from the Usercontext
    const {setUser} = useContext(UserContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        setUser({username, password})
    }
    return (
        <div>
            <h2>Login</h2>
             
            <input 
                type="text" 
                placeholder='Username' 
                value = {username}
                onChange={(e) => setUsername(e.target.value) }
            />
            <input 
                type="text" 
                placeholder='password'
                value = {password} 
                onChange={(e) => setpassword(e.target.value) }
            />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login
