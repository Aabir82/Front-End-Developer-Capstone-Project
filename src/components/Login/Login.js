import React from "react";
import "./Login.css";

function Login() {
    return (
        <>
           
            <form className="login-form">
            <label><p>Username:</p>
                    <input type="text" maxLength={30} />
                </label>
                <label><p>Password:</p>
                    <input type="password" maxLength={30} />
                </label><br></br>
                <button type="button">Login</button>
                </form>
            
        </>
    )
}

export default Login;