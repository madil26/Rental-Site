import React, { useState } from "react";
import './Register.css'
import axios from "axios";

export default function Register(props) {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = async () => {
    try {
      const apiUrl = 'http://localhost:8081/resorts';
      const response = await axios.post(`${apiUrl}/register`, formData);
      console.log('Registration successful:', response.data);
    } catch (error) {
      console.error('Registration failed:', error.message);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    registerUser();
  };

  return (
    <div className="login-page">
      <h1>Register</h1>
      <form className="form-register" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="inputfname">First Name</label>
          <input
            onChange={handleChange}
            value={formData.firstname}
            type="text"
            className="form-control"
            id="inputfname"
            name="firstname"
            placeholder="First Name"
          />
          <label htmlFor="inputlname">Last Name</label>
          <input
            onChange={handleChange}
            value={formData.lastname}
            type="text"
            className="form-control"
            id="inputlname"
            name="lastname"
            placeholder="Last Name"
          />

          <label htmlFor="inputEmail">Email</label>
          <input
            onChange={handleChange}
            value={formData.email}
            type="email"
            className="form-control"
            id="inputEmail"
            name="email"
            placeholder="Email"
          />

          <label htmlFor="inputPassword4">Password</label>
          <input
            onChange={handleChange}
            value={formData.password}
            type="password"
            className="form-control"
            id="inputPassword4"
            name="password"
            placeholder="Password"
          />
        </div>
        <div className="btn-submit">
          <button type="submit" className="btn-submit register">
            Register
          </button>

          <button
            type="button"
            className="btn-submit login"
            onClick={() => props.onFormSwitch('login')}
          >
            Sign In
          </button>
        </div>
      </form>
    </div>
  );
}