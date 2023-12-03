import React from 'react'
import './Register.css'
import { useState } from 'react';
import axios from 'axios';

export default function Login() {
    const [formData, setFormData] = useState({
      email: '',
      password: ''
    });
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const loginUser = async () => {
      try {
        const apiUrl = 'http://localhost:8081/resorts';
        const response = await axios.post(`${apiUrl}/login`, formData);
        console.log(response.data);
      } catch (error) {
        console.error('Login failed:', error.message);
      }
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      loginUser();
    };
  
    return (
      <div className="login-page">
        <h1>Login</h1>
        <form className="form-register" onSubmit={handleSubmit}>
          <div className="form-row">
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
              Login
            </button>
  
            <button type="button" className="btn-submit login">
              Register
            </button>
          </div>
        </form>
      </div>
    );
  }
