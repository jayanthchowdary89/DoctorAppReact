import React from 'react'
import { useEffect,useState } from 'react'
import {useParams,Link,useNavigate} from 'react-router-dom'
import axios from 'axios';



export default function ViewProfile() {
  const navigate=useNavigate(); 
const param = useParams();
const [currentDoctor,setCurrentDoctor] = useState([]);

    useEffect(()=>{

      getDoctors();

    },[])

    async function getDoctors() {

      const token = localStorage.getItem("jwtToken")
        try {
          const response = await axios.get("http://localhost:5089/api/Doctors/GetDoctor/"+param.id,{
            headers:{
              'Authorization' : `Bearer ${token}`
            }
          });
    
            setCurrentDoctor(response.data);
            console.log(response.data);
            if(response){
              console.log("got the response")
            }
          
        }
         catch (error) {
          if (error.response && error.response.status === 401) {
            // Handle 401 Unauthorized error
           alert("Unauthorised Access Please Login")
            // You can redirect the user to the login page or show a login modal here
            window.location.href = '/loginDoc';
          } else {
            // Handle other HTTP errors
            console.error(`HTTP error! Status: ${error.response ? error.response.status : 'unknown'}`);
            // Show an error message to the user
            alert('An error occurred while fetching data.PLEASE LOGIN AGAIN');
            window.location.href = '/loginDoc';
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
            <img src={currentDoctor.dimg} alt="I am a erripuk"></img>
            <li><Link to="/doctorPage">Home</Link></li>
            <li><Link to={"/about/" + param.id}>About</Link></li>
            <li><Link to ={"/myappointment/"+currentDoctor.dId}>My Appointments</Link></li>
            <li><Link to={"/update/" + currentDoctor.dId}>Edit Profile</Link></li>
            <li><a onClick = {handleLogout}>Logout</a></li>
          </div>
              <div className="doclogcontent">
                <h3><strong>Dr.{currentDoctor.d_UserId}</strong></h3><br></br><br></br>
                <h5>Qualification</h5>
                <p>{currentDoctor.qualification}</p><br></br><br></br>
                <h5>Specialization</h5>
                <p>{currentDoctor.specialization}</p><br></br><br></br>
                <h5>Experience</h5>
                <p>{currentDoctor.experience}years</p>
              </div>
      </div>
  </div>
    
  );
}
