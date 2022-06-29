import React, { useState } from 'react';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import './Login.css';
//import { users } from './Userdetails';

function Login() {
    let navigate = useNavigate();
    const[data, setData] = useState({username: '', password: ''});
    const changeHandler = (e) => {
        setData({...data, [e.target.name] : e.target.value})
    }
   
    /*const submitForm = (e) => {
        e.preventDefault();
        const validUser = users.find(valid => (valid.FirstName === data.username
            && valid.PasswordHash === data.password));
        if(validUser) {
            navigate("/dashboard");
        }else {
            console.log("Invalid username and password");
        }
    }*/

    const loginPage = (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://192.168.5.25:8080/api/auth/signin',
            data: {
                username: data.username,
                password: data.password
            }
        })
        .then((response) => {
            console.log(response.data);
            sessionStorage.setItem('Token', response.data.tokenType + " " + response.data.accessToken);
            if(response.data.accessToken === '' || response.data.accessToken === null ) {
                navigate("/");
            }else {
                navigate("/dashboard");
            }
        }, (error) => {
            console.log(error);
          });
    }

    return(
        <div className="Login">
        <form action="" onSubmit={loginPage}>
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