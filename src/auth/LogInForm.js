import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import './LoginForm.css'


function LogInForm({login}){
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: "",
        password: ""
    });

    async function handleChange(evt){
        const {name, value} = evt.target
        setFormData(data => ({ ...data, [name]: value}))
    }

    async function handleSubmit(evt){
        evt.preventDefault()
        let res = await login(formData)
        if(res.success){
            navigate('/')
        } else{
            console.error("Error")
        }
    }

    return(
        <div className="LogInForm-container">
            <h2>Log In</h2>
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
                            type="password"
                            placeholder="Password"
                            name="password"
                            className="form-control"
                            value={formData.password}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-btn">Submit</button>
                </form> 
            </div>
        </div>
    );
}
  
export default LogInForm;