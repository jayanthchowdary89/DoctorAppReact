import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css"
import "./about.js"
import { Link } from 'react-router-dom';


const EmployeeDataTable = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    getDoctors();
  }, []);

  async function getDoctors() {
    try {
      const response = await axios.get("http://localhost:5089/api/doctors").then((response) => {
      setDoctors(response.data);
      });
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }

  return (
    <div class="contain">
        {doctors.map((doctors) => (
           <div class="row">
            <div class="col-md-6">
                
                <div class="profile-links">
                    <img src={doctors.dimg}></img>
                    <li><a href="#">Home</a></li>
                    <li><Link to="/about">About</Link></li>
                    <li><a href="#">My Appointments</a></li>
                    <li><Link to = {"/update/" + doctors.did}>Update</Link></li>
                </div>
            </div>

            <div class="col-md-6">
                <div class="deatils">
                    <div class="row">
                        <div class="col-1">
                          <h3><strong>Dr.{doctors.dname}</strong></h3><br></br><br></br>
                            <h5>Qualification</h5>
                            <p>{doctors.qualification}</p><br></br><br></br>
                            <h5>Specialization</h5>
                            <p>{doctors.specialization}</p><br></br><br></br>
                            <h5>Experience</h5>
                            <p>{doctors.experience}years</p>
                            </div>
                    </div>
                </div>
            </div>
           </div>
        ))}
    </div>
  );
};

export default EmployeeDataTable;
