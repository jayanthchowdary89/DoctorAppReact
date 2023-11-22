import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css"
import { Link,useNavigate,useParams} from 'react-router-dom';

const EmployeeDataTable1 = () => {
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    getDoctors();
  }, []);

  async function getDoctors() {

    const token = localStorage.getItem("jwtToken")
    try {
      const response = await axios.get("http://localhost:5089/api/Doctors/GetDoctor/"+param.id,{
          headers:{
            'Authorization' : `Bearer ${token}`
          }
      });
      console.log(response.data);
      setDoctors(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  async function logoutalert() {
    var result = window.confirm("Are you sure you want to log out");
   
    if (result) {
      navigate("/");
    } else {
      navigate("/dochome");
    }
  }
 
  return (
    <div class="doclogbody">
        <div class="doclogcontaining">
         
 
            <div class="doclognavbar">
              <img src={doctors.dimg}></img>
              <li><Link to = "/doctorPage">Home</Link></li>
              {/* <li><Link to="/about">About</Link></li> */}
              <li><Link to = {"/ViewProfile/" + doctors.d_UserId}>My Profile</Link></li>
              <li><Link to={"/myappointment/"+doctors.dId}>My Appointments</Link></li>
              <li><Link to={"/update/" + doctors.dId}>Edit Profile</Link></li>
              <li><a onClick={logoutalert}>Log Out</a></li>
            </div>
 
 
                <div class="doclogcontent">
                  <h5><strong>About</strong></h5><br></br>
                  <p>{doctors.description}</p>
                </div>
              </div>
           
    </div>
  );
};

export default EmployeeDataTable1;

