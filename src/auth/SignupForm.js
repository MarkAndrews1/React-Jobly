import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './SignupForm.css';

function SignupForm({signup}){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: "",
        firstName: "",
        lastName: "",
        email: "",
    });

    async function handleChange(evt){
        const {name, value} = evt.target
        setFormData(data => ({ ...data, [name]: value}))
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        let res = await signup(formData)
        if(res.success){
            navigate('/')
        } else{
            console.error("Error")
        }
    }

    return(
        <div className="SignupForm-container">
            <h2>Sign Up</h2>
            <div>
                <form onSubmit={handleSubmit}> 
                    <div className="form-group">
                        <input
                            name="username"
                            placeholder="Username"
                            value={formData.username}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="firstName"
                            placeholder="First Name"
                            value={formData.firstName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            name="lastName"
                            placeholder="Last Name"
                            value={formData.lastName}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="email"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            placeholder="Password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="form-control"
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form> 
            </div>
        </div>
    )
}

export default SignupForm;