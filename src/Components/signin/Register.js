import { useState } from 'react';
import './register.css';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);



    const handleSubmit = (event) => {
        event.preventDefault();

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address!");
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
        if (!passwordRegex.test(password)) {
            alert("The password must contain at least 8 characters, including an uppercase letter, a lowercase letter, a number, and a special character!");
            return;
        }

        if (username && email && password && agreeTerms) {
            localStorage.setItem("username", username);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);

            alert("The account has been created successfully!");

            window.location.href = "index.html";
        } else {
            alert("Please fill in all fields and agree to the terms and conditions.");
        }
    };

    return (
        <div className="bod">
            <div className="wrapper">
                <form onSubmit={handleSubmit}>
                    <h1>Registration</h1>

                    <div className="input-box">
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <i className="bx bxs-user"></i>
                    </div>

                    <div className="input-box">
                        <input
                            type="email"
                            placeholder="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                        <i className="bx bxs-envelope"></i>
                    </div>

                    <div className="input-box">
                        <input
                            id="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                        <i className="bx bxs-lock-alt"></i>
                    </div>

                    <div className="remember-forgot">
                        <label>
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={() => setAgreeTerms(!agreeTerms)}
                                required
                            />
                            I agree to <a href="#">the terms & conditions</a>
                        </label>
                    </div>

                    <button type="submit" className="btn">Register</button>

                    <div className="register-link">
                        <p>Already have an account? <a href="/login">Log in</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
