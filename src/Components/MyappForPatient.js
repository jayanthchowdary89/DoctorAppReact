import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './MyappForPatient.css'; 

export default function MyappForPatient() {
const AppdocUrl = "http://localhost:5089/api/Appointments/GetAppByPat/"
const [Appointments,setAppointments] = useState([]);
const param = useParams();

useEffect(() => {
GetappointmentByPatID();
},[])

const GetappointmentByPatID = async () => {
  const token = localStorage.getItem("jwtToken");
    try{


        const resopnse = await axios.get(AppdocUrl+param.id,{
          headers:{
            'Authorization' : `Bearer ${token}`
          }
        })

        setAppointments(resopnse.data);

    }catch(error){
        console.log(error);

    }
}



  return (
    <div>
       <div>
      <h2>Appointments Table</h2>
      <table className='appointments-table'>
        <thead>
          <tr>
            <th>Appointment ID</th>
            <th>Doctor Contact</th>
            <th>Specialization</th>
            <th>Doctor Name</th>
            <th>Appointment Date</th>
            <th>Time Slot</th>
            <th>Appointment Fee</th>
          </tr>
        </thead>
        <tbody>
          {Appointments.map(appointment => (
            <tr key={appointment.aId}>
              <td>{appointment.aId}</td>
              <td>{appointment.doctor.mobile}</td>
              <td>{appointment.doctor.specialization}</td>
              {/* <td>{appointment.dId}</td>
              <td>{appointment.pId}</td> */}
              <td>{appointment.doctor.dName}</td>
              <td>{appointment.appointment_Date}</td>
              <td>{appointment.time_slot}</td>
              <td>{appointment.appointment_Fee}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
}
