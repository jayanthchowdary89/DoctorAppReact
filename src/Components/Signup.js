import React, { useRef, useState } from 'react';
import {useNavigate} from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import "./Signup.css";


const PatientForm = () => {
  const baseURL = "http://localhost:5089/api/Patients";
  const navigate = useNavigate();

  const [enteredPName, setPName] = useState('');
  const [enteredPAge, setPAge] = useState(0);
  const [enteredGender, setPGender] = useState('Male');
  const [enteredDOB, setDOB] = useState('');
  const [enteredPUserId, setPUserId] = useState('');
  const [enteredEmail, setEmail] = useState('');
  const [enteredPassword, setPassword] = useState('');
  const [enteredMobile, setMobile] = useState('');
  const[enteredMedicalhistory,setMedicalhistory] = useState('');
  const [confirmPassword,setConfirmPassword] = useState('');
  
  
  const PNameChangeHandler = (event) => {
    setPName(event.target.value);
  };

  const PAgeChangeHandler = (event) => {
    setPAge(event.target.value);
  };
  const PGenderChangeHandler = (event) => {
    setPGender(event.target.value);
  };
  const DOBChangeHandler = (event) => {
    setDOB(event.target.value);
  };
  const PUserIdChangeHandler = (event) => {
    setPUserId(event.target.value);
  };
  const EmailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const PasswordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const MobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };

  const PasswordConfirmHandler = (event) => {
    setConfirmPassword(event.target.value);
  };


  const ValidateDate = () =>{
    if(enteredPassword == confirmPassword )
    return true;
  return false;

  }

  const submitActionHandler = (event) => {
    if(ValidateDate()){

    event.preventDefault();
    axios
      .post(baseURL, {
        pName: enteredPName,
        age: enteredPAge,
        gender : enteredGender,
        dob : enteredDOB,
        p_UserId : enteredPUserId,
        email : enteredEmail,
        password : enteredPassword,
        mobile : enteredMobile,
        role : "Patient",
        medical_History : enteredMedicalhistory
      })
      .then((response) => {
        alert("Patient "+ enteredPName +" added!");
        // navigate("/read");
      }).catch((error) => {
        if (error.response && error.response.status === 409) {
          // Username conflict, display a message to the user
          alert("Username Already Taken");
        } else {
          // Handle other errors
          console.error('Error:', error.message);
        }
      })
      
      // .catch(error => { 
      //   alert("error==="+error);
      // });

    }
    else{
      alert("Password and Confirm password must be same")
    }
  };

  const cancelHandler = () =>{
    //reset the values of input fields
    setPName('');
    setPAge('');
    setPGender('');
    setDOB('');
    setPUserId('');
    setEmail('');
    setPassword('');
    setMobile('');
    navigate("/");

  }
    return(  
    //   <Alert variant='primary'>
    //   <Container>
    //   <Form onSubmit={submitActionHandler}>
    //     <Form.Group controlId="form.PName">
    //         <Form.Label>Name</Form.Label>
    //         <Form.Control type="text" value={enteredPName} onChange={PNameChangeHandler} placeholder="Enter Your Name" required/>
    //     </Form.Group>
    //     <Form.Group  controlId="form.PAge">
    //         <Form.Label>Age</Form.Label>
    //         <Form.Control type="text" value={enteredPAge} onChange={PAgeChangeHandler} placeholder="Enter Age" required/>
    //     </Form.Group>
    //     <Form.Group  controlId="form.PGender">
    //         <Form.Label>Gender</Form.Label>
    //         <select type="text" value={enteredGender} onChange={PGenderChangeHandler} placeholder="Select Gender" required>
    //           <option value="Male">Male  </option>
    //           <option value="Female">Female</option>
    //           <option value="Other">Other</option>
    //         </select> 
    //     </Form.Group>
    //     <Form.Group  controlId="form.PDOB">
    //         <Form.Label>Date of Birth</Form.Label>
    //         <Form.Control type="date" value={enteredDOB} onChange={DOBChangeHandler} placeholder="Enter Date of Birth" required/>
    //     </Form.Group>
    //     <Form.Group  controlId="form.P_UserId">
    //         <Form.Label>User Id</Form.Label>
    //         <Form.Control type="text" value={enteredPUserId} onChange={PUserIdChangeHandler} placeholder="Enter User Name" required/>
    //     </Form.Group>
    //     <Form.Group  controlId="form.Email">
    //         <Form.Label>Email</Form.Label>
    //         <Form.Control type="text" value={enteredEmail} onChange={EmailChangeHandler} placeholder="Enter Email Id" required/>
    //     </Form.Group>
    //     <Form.Group  controlId="form.Password">
    //         <Form.Label>Password</Form.Label>
    //         <Form.Control type="text" value={enteredPassword} onChange={PasswordChangeHandler} placeholder="Enter Password" required/>
    //     </Form.Group>
    //     <Form.Group  controlId="form.Mobile">
    //         <Form.Label>Mobile</Form.Label>
    //         <Form.Control type="text" value={enteredMobile} onChange={MobileChangeHandler} placeholder="Enter Mobile number" required/>
    //     </Form.Group>
    //     <br></br>
    //     <Button type='submit'>Sign Up</Button>
    //     &nbsp;&nbsp;&nbsp;
    //     <Button type='submit' onClick={()=>cancelHandler()}>Cancel</Button>
    //   </Form>
      
    // </Container> 
    // </Alert>
    
    <div class ="registerbody">
        <div className='not-simply'>
      <div className='simply'>
        <label>Name</label>
        <input type="text" value={enteredPName} onChange={PNameChangeHandler} placeholder="Enter Your Name" required />
      </div>
      <div className='simply'>
        <label>Age</label>
        <input type="text" value={enteredPAge} onChange={PAgeChangeHandler} placeholder="Enter Age" required />
      </div>
      <div className='simply'>
        <label>Gender</label>
        <select type="text" value={enteredGender} onChange={PGenderChangeHandler} required>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </select>
      </div>
      <div className='simply'>
        <label>Date of Birth</label>
        <input type="date" value={enteredDOB} onChange={DOBChangeHandler} placeholder="Enter Date of Birth" required />
      </div>
      <div className='simply'>
        <label>User Id</label>
        <input type="text" value={enteredPUserId} onChange={PUserIdChangeHandler} placeholder="Enter User Name" required />
      </div>
      <div className='simply'>
        <label>Email</label>
        <input type="text" value={enteredEmail} onChange={EmailChangeHandler} placeholder="Enter Email Id" required />
      </div>
      <div className='simply'>
        <label>Password</label>
        <input type="password" value={enteredPassword} onChange={PasswordChangeHandler} placeholder="Enter Password" required />
      </div>
      <div className='simply'>
        <label>Confirm Password</label>
        <input type="password" value={confirmPassword} onChange={PasswordConfirmHandler} placeholder="Enter Password" required />
      </div>
      <div className='simply'>
        <label>Mobile</label>
        <input type="text" value={enteredMobile} onChange={MobileChangeHandler} placeholder="Enter Mobile number" required />
      </div>
      <br />
      <div class="buttonbody">
      <div className='buttons'>
      <button type='submit' onClick={submitActionHandler}>Sign In</button>
      <button onClick={cancelHandler}>Cancel</button></div></div>
    </div>
    </div>
    
    );
}
export default PatientForm;