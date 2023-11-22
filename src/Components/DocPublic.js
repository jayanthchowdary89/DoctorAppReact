import React, { useEffect, useState } from 'react';
import axios from "axios";
// import "../App.css"
import "./about.js"
import { Link, Router, useParams } from 'react-router-dom';
import "./DocPublic.css";
// import "./Home.css";
import Header from './header.js';
import Footer from './footer.js';
 
const DoctorPublic = () => {
  const params = useParams();
    const [doctors, setDoctors] = useState([]);
   
    useEffect(() => {
      getDoctors();
    }, []);
 
    async function getDoctors() {
      try {
        const response = await axios.get("http://localhost:5089/api/doctors/"+ params.id 
        
          
        ).then((response) => {
          setDoctors(response.data);
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
 
    return (
        <div class="contain">
          <Header />
          {/* {doctors.map((doctors) =>( */}
            <div class="publicbody" >
                <div class="publiccontent">
            <div class="publicleft">
              <img src={doctors.dimg}></img><br></br><br></br><br></br><br></br>
              <h2>Dr.{doctors.dName}</h2><br></br>
              <h4>{doctors.specialization}</h4><br></br>
              <h4>{doctors.designation}</h4>
            </div>
            <div class="publicright">
                <div class="publicbox">
                <h3><strong>Dr.{doctors.dName}</strong></h3><hr></hr><br></br>
                <h4>Qualification</h4>
                <p>{doctors.qualification}</p><br></br>
                <h4>Specialization</h4>
                <p>{doctors.specialization}</p><br></br>
                <h4>Experience</h4>
                <p>{doctors.experience}years</p><br></br><br></br></div>
                <br></br><br></br>
                <div class="publicbox">
                <h3><strong>About</strong></h3><hr></hr><br></br>
                <p>{doctors.description}</p></div>
            </div>
            </div>
            </div>
          {/* ))} */}
           <div class="publicfooter">
    {/* <Footer/> */}
  </div>  
          </div>);};
 
export default DoctorPublic;
