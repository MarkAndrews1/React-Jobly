import React, { useContext, useState } from "react";
import JoblyApi from "../api";
import UserContext from "../auth/UserContext";
import { useNavigate } from 'react-router-dom';
import "./ProfileForm.css";

function ProfileForm() {
  const { currUser, setCurrUser } = useContext(UserContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: currUser ? currUser.firstName : "",
    lastName: currUser ? currUser.lastName : "",
    email: currUser ? currUser.email : "",
    username: currUser ? currUser.username : "",
    password: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();
    let userData = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      email: formData.email,
      password: formData.password,
    };

    let username = formData.username;
    let updatedUser;

    try {
      updatedUser = await JoblyApi.saveProfile(username, userData);
      navigate('/')
    } catch (err) {
      console.log("Error saving user:", err);
    }

    setFormData((f) => ({ ...f, password: "" }));

    // setCurrUser(updatedUser);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData((f) => ({
      ...f,
      [name]: value,
    }));
  }

  return (
    <div className="ProfileForm-container">
      <h2>Change Your Profile</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="form-control"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="email"
            placeholder="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            className="form-control"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="submit-btn">Submit</button>
      </form>
    </div>
  );
}

export default ProfileForm;
