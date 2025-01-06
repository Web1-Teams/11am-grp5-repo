import React, { useEffect } from "react";
import './login.css';

const Login = () => {
    useEffect(() => {

        const loginButton = document.querySelector(".btn");
        if (loginButton) {
            loginButton.addEventListener("click", (event) => {
                event.preventDefault();

                const username = document.querySelector(".input-box input[type='text']").value;
                const password = document.getElementById("password").value;

                const storedUsername = localStorage.getItem("username");
                const storedPassword = localStorage.getItem("password");

                if (username === storedUsername && password === storedPassword) {
                    alert("You have successfully logged in!");
                    localStorage.setItem("loggedIn", "true");
                    window.location.href = "homePage.html";
                } else {
                    alert("Either the username or password is incorrect.");
                }
            });
        }
    }, []);

    return (
        <div className="body">
            <div className="wrapper">
                <form>
                    <h1>Log in</h1>
                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            required
                        />
                        <i className="bx bxs-user"></i>
                    </div>
                    <div className="input-box">
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>

                    </div>
                    <div className="remember-forgot">
                        <label>
                            <input type="checkbox" /> Remember Me
                        </label>
                        <a href="#">Forgot password?</a>
                    </div>
                    <button type="submit" className="btn">
                        Log in
                    </button>
                    <div className="register-link">
                        <p>
                            Don't have an account?{" "}
                            <a href="/register">Register</a>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
