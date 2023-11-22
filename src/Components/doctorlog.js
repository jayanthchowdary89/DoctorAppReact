import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./doctorlog.css";
import "./about.js";
import { Link, useNavigate } from 'react-router-dom';
const DoctorPersonalProfile = () => {
  // const [doctors, setDoctors] = useState([]);
  const [count, setCount] = useState(0);
  const [doctors, setDoctors] = useState([]);
  const navigate = useNavigate();

  const GetDocURl = "http://localhost:5089/api/Doctors/GetCurrent";

  useEffect(() => {
    getUsername();
    console.log("page reloaded");
  }, []);

  const getUsername = async () => {

    const token = localStorage.getItem("jwtToken")
    try {

      const response = await axios.get(GetDocURl, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });

      setDoctors(response.data);
      console.log(response.data);
      // getDoctors();
    } catch (error) {
      console.log(error);
    }

    // .then((response)=>{
    //   setDoctors(response.data);
    //   console.log(response.data,doctors);
    //   getDoctors()

  }
  // async function getDoctors() {
  //   try {
  //     console.log(doctors,"hii");
  //     const response = await axios.get(`http://localhost:5089/api/Doctors/${doctors.d_UserId}`);

  //       setCurrentDoctor(response.data);
  //       console.log(response.data);
  //       if(response){
  //         console.log("got the response")
  //       }

  //   }
  //    catch (error) {
  //     console.error("Error fetching data:", error);
  //   }
  // }

  async function logoutalert() {
    var result = window.confirm("Are you sure you want to log out");

    if (result) {
      localStorage.removeItem("jwtToken");
      navigate("/");
    } else {
      navigate("/doctorPage");
    }
  }

  return (
    <div className="doclogbody">
      {/* {currentDoctor.map((doctors) => ( */}
      <div className="doclogcontaining">

        <div className="doclognavbar" >
          <img src={doctors.dimg}></img>

          <h2 className='userid'>{doctors.dName}</h2>
          {/* <li><Link to="/dochome">Home</Link></li> */}
          <li><Link to={"/ViewProfile/" + doctors.d_UserId}>My Profile</Link></li>
          <li><Link to={"/about/" + doctors.d_UserId}>About</Link></li>
          <li><Link to={"/myappointment/" + doctors.dId}>My Appointments</Link></li>
          <li><Link to={"/update/" + doctors.dId}>Edit Profile</Link></li>
          <li><a onClick={logoutalert}>Log Out</a></li>

        </div>
        <div className='tagbox'>
          <div className='tag'>
            <h1><strong>Hello {doctors.dName} !!</strong></h1>
            <p style={{ marginTop: "30px" }}>Hope Your Day is Going Well!</p>
            <p>Please check your appointments and proceed with the same</p></div>
          <div className='tag'><h3>The best way to find yourself is to lose yourself in the service of others.</h3></div>
          <div className='tag'><h2><strong>HAPPY TREATING !!</strong></h2></div>
        </div>
      </div>
    </div>
  );
};

export default DoctorPersonalProfile;