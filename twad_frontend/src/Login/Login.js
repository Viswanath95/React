import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import { users } from './Userdetails';

function Login() {
    console.log(users);
    let navigate = useNavigate();
    const[data, setData] = useState({username: '', password: ''});
    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
   
    const submitForm = (e) => {
        e.preventDefault();
        const validUser = users.find(valid => (valid.FirstName === data.username
            && valid.PasswordHash === data.password));
        if(validUser) {
            navigate("/dashboard");
        }else {
            console.log("Invalid username and password");
        }
    }

    return(
        <div className="Login">
        <form action="" onSubmit={submitForm}>
        <div className="form-inner">
            <h2>Login</h2>
        <div className="form-group">
            <label htmlFor="name">Username:</label>
            <input type="text" name="username" id="name" placeholder="Enter username"
            value={data.username}
            onChange={changeHandler}/>
        </div>
        <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input type="password" name="password" id="password" placeholder="Enter password"
            value={data.password} 
            onChange={changeHandler} /></div>
        <div>
        <button type="submit">LOGIN</button>
        </div>
        </div>
        </form>
        </div>
    )
}

export default Login;