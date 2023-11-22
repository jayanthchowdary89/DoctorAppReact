import React from 'react'
import { useEffect,useState } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import axios from 'axios';



export default function PatientProfile() {
  const navigate=useNavigate(); 
const param = useParams();
const [currentPatient,setCurrentPatient] = useState([]);

    useEffect(()=>{

      getDoctors();

    },[])

    async function getDoctors() {

      const token = localStorage.getItem("jwtToken")
        try {
          const response = await axios.get("http://localhost:5089/api/Patients/GetPatient/"+param.id,{
            headers:{
              'Authorization' : `Bearer ${token}`
            }
          });
    
            setCurrentPatient(response.data);
            console.log(response.data);
            if(response){
              console.log("got the response")
            }
          
        }
         catch (error) {
          if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized error
            console.error('Unauthorized access. Redirecting to login...');
            // You can redirect the user to the login page or show a login modal here
            window.location.href = '/loginDoc';
          } else {
            // Handle other HTTP errors
            console.error(`HTTP error! Status: ${error.response ? error.response.status : 'unknown'}`);
            // Show an error message to the user
            alert('An error occurred while fetching data. PLEASE LOGIN AGAIN');
            window.location.href = '/login';
          }
        }
      }

      const handleLogout = () =>{
        localStorage.removeItem("jwtToken");
        navigate("/"); 
      }

  return (

    <div className="doclogbody">
    {/* {currentDoctor.map((doctors) => ( */}
      <div className="doclogcontaining">
        

          <div className="doclognavbar" >
            
            <li><Link to="/patientPage">Home</Link></li>
            <li><Link to ="#">My Appointments</Link></li>
            <li><Link to={"/history/" + currentPatient.p_UserId}>My medical history</Link></li>
            <li><Link to={"/BookAppointment/" + currentPatient.pId}>Book Appointment</Link></li>
            <li><Link to={"/pupdate/" + currentPatient.pId}>Edit Profile</Link></li>
            <li><button onClick = {handleLogout}>Logout</button></li>
          </div>
              <div className="doclogcontent">
                <h3><strong>{currentPatient.p_UserId}</strong></h3><br></br><br></br>
                <h5>Age</h5>
                <p>{currentPatient.age}</p><br></br><br></br>
                <h5>Mobile</h5>
                <p>{currentPatient.mobile}</p><br></br><br></br>
                <h5>Email</h5>
                <p>{currentPatient.email}</p><br></br><br></br>
              </div>
      </div>
  </div>
    
  );
}