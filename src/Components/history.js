import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./doctorlog.css";
 
 
import { Link, useNavigate, useParams } from 'react-router-dom';
 
const PatientDataTable1 = () => {
  const [patients, setpatients] = useState([]);
  const navigate = useNavigate();
  const param = useParams();
  const token = localStorage.getItem("jwtToken");
 
  useEffect(() => {
    getpatients();
  }, []);
 
  async function getpatients() {
    try {
      const response = await axios.get("http://localhost:5089/api/Patients/GetPatient/"+param.id,{
        headers:{
          'Authorization' : `Bearer ${token}`
        }
      });
      console.log(response.data);
      setpatients(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
 
  async function logoutalert() {
    var result = window.confirm("Are you sure you want to log out");
 
    if (result) {
      navigate("/");
    } else {
      navigate("/history");
    }
  }
 
  return (
    <div class="patlogbody">
      {/* {patients.map((patients) => ( */}
        <div class="patlogcontaining">
         
            <div class="patlognavbar">
            <li><Link to="/patientPage">Home</Link></li>
              <li><Link to ={"/PatientProfile/" + patients.p_UserId}>My Profile</Link></li>
              <li><Link to={"/myappointmentPat/"+patients.pId}>My Appointments</Link></li>
              <li><Link to={"/BookAppointment/" + patients.pId}>Book Appointment</Link></li>
              <li><Link to={"/pupdate/" + patients.pId}>Edit Profile</Link></li>
              <li><a onClick={logoutalert}>Log Out</a></li>
            </div>

          <div class="patlogcontent">
            <h5><strong>Medical History</strong></h5><br></br>
            <p>{patients.medical_History}</p>
          </div>
        </div>
      {/* ))} */}
    </div>
  );
};
 
export default PatientDataTable1;