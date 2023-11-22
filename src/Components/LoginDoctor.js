import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "./LoginDoctor.css";

const LoginFormForDoc = ({onLogin}) => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate(); 
  const baseUrl = 'http://localhost:5089/api/Login/Doctor';

  const submitForm = async (event) => {
    event.preventDefault();
    try {
        const response = await axios.post(baseUrl, {
          username: username,
          password: password,
        });

        
        // Assuming the server responds with a token in the data
        const jwtToken = response.data.token;
        localStorage.setItem("jwtToken",jwtToken);

        alert(jwtToken);
        navigate('/doctorPage'); 
      } catch (error) {
        alert(error.message);
      }

      // onLogin();

    };

    // Perform actions with the form data (e.g., send it to an API)
    console.log('Username:', username);
    console.log('Password:', password);
    // Add your logic for form submission here
    
    return (
        <div className='not-dlf'>
      <h2>Doctor Login Form</h2>
      <form onSubmit={submitForm}>
        <div className='dlf'>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          /></div>
        <br />
        <div className='dlf'>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          /></div>
        <br />
        <div className='dlf-btn'>
        <button type="submit">Login</button></div>
      </form>
    </div>
  );
};


export default LoginFormForDoc;
