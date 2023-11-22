import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Container, Alert, Button } from 'react-bootstrap';
import "./pupdate.css";
import "./doctorlog.css";
 
const PatientUpdate = () => {
  const [patients, setPatients] = useState([]);
  const navigate1 = useNavigate();
 
  // useEffect(() => {
  //   getPatients();
  // }, []);
 
  // async function getPatients() {
  //   try {
  //     const response = await axios.get("http://localhost:5277/api/patients");
  //     console.log(response.data);
  //     setPatients(response.data);
  //   } catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }
 
  // async function logoutalert() {
  //   var result = window.confirm("Are you sure you want to log out");
 
  //   if (result) {
  //     navigate1("/Homehead");
  //   } else {
  //     navigate1("/");
  //   }
  // }
 
 
  const editURL = "http://localhost:5089/api/patients/";
  const navigate = useNavigate();
  const param = useParams();
  const [patientId, setpatientId] = useState('');
  const [patientName, setName] = useState('');
  const [patientAge, setAge] = useState(0);
  const [patientDOB, setDOB] = useState('');
  const [patientUserId, setUserId] = useState('');
  const [patientGender, setGender] = useState('');
  const [patientEmail, setEmail] = useState('');
  const [patientPassword, setPassword] = useState('');
  const [patientMobile, setMobile] = useState(0);
  const [patientMedicalhistory, setMedicalhistory] = useState('');
  const token = localStorage.getItem("jwtToken")

  // const handleLogout = () => { 
  //   localStorage.removeItem("jwtToken");
  //   navigate("/"); }
 
  useEffect(() => {
    axios.get(editURL + param.id,{
      headers:{
        'Authorization' : `Bearer ${token}`
      }
    }).then((response) => {
      const patientData = response.data;
      setpatientId(patientData.pId);
      setName(patientData.pName);
      setAge(patientData.age);
      setDOB(patientData.dob)
      setUserId(patientData.p_UserId)
      setGender(patientData.gender);
      setEmail(patientData.email);
      setPassword(patientData.password);
      setMobile(patientData.mobile);
      setMedicalhistory(patientData.medical_History);
 
 
    }).catch(error => {
      alert("Error Ocurred getting patient detail:" + error);
    });
  }, []);
 
 
  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };
 
  const ageChangeHandler = (event) => {
    setAge(event.target.value);
  };
  const dobChangeHandler = (event) => {
    setDOB(event.target.value);
  };
  const genderChangeHandler = (event) => {
    setGender(event.target.value);
  };
  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };
  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };
  const mobileChangeHandler = (event) => {
    setMobile(event.target.value);
  };
  const medicalhistoryChangeHandler = (event) => {
    setMedicalhistory(event.target.value);
  };
 
 
  const submitActionHandler = (event) => {
    event.preventDefault();
    const headers={
      'Authorization' : `Bearer ${token}`
    }
    axios
      .put(editURL + param.id, {
        pId: patientId,
        pName: patientName,
        age: patientAge,
        gender: patientGender,
        dob: patientDOB,
        p_UserId: patientUserId,
        email: patientEmail,
        password: patientPassword,
        mobile: patientMobile,
        role: "Patient",
        medical_History: patientMedicalhistory,
      },{headers})
      .then((response) => {
        alert("Patient " + patientId + " updated!");
        navigate('/patientPage');
 
      }).catch(error => {
        alert("Error Ocurred updating employee:" + error);
      });
 
  };

  const handleLogout = () =>{
    localStorage.removeItem("jwtToken");
    navigate("/"); 
  }

 
  return (
    
      <div class="not-nothing">
        <div class="patlogbody">
          {/* {patients.map((patients) => ( */}
            <div class="patlogcontaining">
              <div class="patlognavbar">
              <li><Link to="/patientPage">Home</Link></li>
              <li><Link to ={"/PatientProfile/" + patientUserId}>My Profile</Link></li>
              <li><Link to={"/myappointmentPat/"+patientId}>My Appointments</Link></li>
              <li><Link to={"/history/" +patientUserId}>My medical history</Link></li>
              <li><Link to={"/BookAppointment/" + patientId}>Book Appointment</Link></li>
              <li><a onClick ={handleLogout}>Logout</a></li>
            </div>
 
 
            </div>
          {/* ))} */}
        </div>
        
          <Form onSubmit={submitActionHandler} id="data">
            <div class="content">
              <Form.Group controlId="form.id" className='nothing'>
                <Form.Label>Id</Form.Label>
                <Form.Control value={patientId} />
              </Form.Group>
              <Form.Group controlId="form.Name" className='nothing'>
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" value={patientName} onChange={nameChangeHandler} placeholder="Enter User Name" required />
              </Form.Group>
              <Form.Group controlId="form.Age" className='nothing'>
                <Form.Label>Age</Form.Label>
                <Form.Control type="text" value={patientAge} onChange={ageChangeHandler} placeholder="Enter Age" required />
              </Form.Group>
              <Form.Group controlId="form.dob" className='nothing'>
                <Form.Label>DateofBirth</Form.Label>
                <Form.Control type="text" value={patientDOB} onChange={dobChangeHandler} placeholder="Enter Date of birth" required />
              </Form.Group><br></br>
              <Form.Group controlId="form.Gender" className='nothing'>
                <Form.Label>Gender</Form.Label>
                <select type="text" value={patientGender} onChange={genderChangeHandler} placeholder="Enter Gender" required>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </Form.Group>
              <Form.Group controlId="form.Email" className='nothing'>
                <Form.Label>Email</Form.Label>
                <Form.Control type="text" value={patientEmail} onChange={emailChangeHandler} placeholder="Enter Email" required />
              </Form.Group>
              <Form.Group controlId="form.Password" className='nothing'>
                <Form.Label>Password</Form.Label>
                <Form.Control type="text" value={patientPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required />
              </Form.Group>
              <Form.Group controlId="form.Mobile" className='nothing'>
                <Form.Label>Mobile</Form.Label>
                <Form.Control type="text" value={patientMobile} onChange={mobileChangeHandler} placeholder="Enter Mobile" required />
              </Form.Group>
              <Form.Group controlId="form.MedReg" className='nothing'>
                <Form.Label>Medical history</Form.Label>
                <Form.Control type="text" value={patientMedicalhistory} onChange={medicalhistoryChangeHandler} placeholder="Enter Medical history" required />
              </Form.Group>
 
              <br></br>
              <Button type='submit'>Update Patient</Button>
              &nbsp;&nbsp;&nbsp;
              <Button onClick={() => navigate("/patienthome")}>Cancel</Button>
            </div>
          </Form>
        
      </div>
  
 
  );
}
export default PatientUpdate;