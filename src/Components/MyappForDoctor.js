import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import './MyappForDoctor.css'; 

export default function MyappForDoctor() {
const AppdocUrl = "http://localhost:5089/api/Appointments/GetAppByDoc/"
const [Appointments,setAppointments] = useState([]);
const param = useParams();
const token = localStorage.getItem("jwtToken");

useEffect(() => {
GetappointmentByDocID();
},[])

const GetappointmentByDocID = async () => {
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
            <th>Patient Age</th>
            <th>Patient Contact</th>
            <th>Patient Name</th>
            <th>Medical History</th>
            <th>Gender</th>
            <th>Appointment Date</th>
            <th>Time Slot</th>
            <th>Appointment Fee</th>
          </tr>
        </thead>
        <tbody>
          {Appointments.map(appointment => (
            <tr key={appointment.aId}>
              <td>{appointment.aId}</td>
              <td>{appointment.patient.age}</td>
              <td>{appointment.patient.mobile}</td>
              <td>{appointment.patient.pName}</td>
              <td>{appointment.patient.medical_History}</td>
              <td>{appointment.patient.gender}</td>
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
