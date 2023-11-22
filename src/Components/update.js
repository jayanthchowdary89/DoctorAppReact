import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import { Form, Button, Container, Alert } from 'react-bootstrap';
import "./update.css";

const EmployeeForm = () => {
  const navigate1 = useNavigate();
  const [doctors,setDoctors] = useState([]);
  const editURL = "http://localhost:5089/api/Doctors/";
  const navigate = useNavigate();
  const param = useParams();
  const [docId, setDocId] = useState('');
  const [docName, setName] = useState('');
  const [docAge, setAge] = useState(0);
  const [docGender, setGender] = useState('');
  const [docUserId, setUserId] = useState('');
  const [docEmail, setEmail] = useState('');
  const [docPassword, setPassword] = useState('');
  const [docMobile, setMobile] = useState('');
  const [docMegicalregistration, setMedicalreg] = useState(0);
  const [docSpecialization, setSpecialization] = useState('');
  const [docImg, setImg] = useState('');
  const [docExperience, setExperience] = useState(0);
  const [docDescription, setDescription] = useState('');
  const [docDesignation, setDesignation] = useState('');
  const [docQualification, setQualification] = useState('');
  const token = localStorage.getItem("jwtToken")

  useEffect(() => {
    axios.get(editURL + param.id,{
      headers:{
        'Authorization' : `Bearer ${token}`
      }
    }).then((response) => {
      const docData = response.data;
      setDocId(docData.dId);
      setName(docData.dName);
      setAge(docData.age);
      setGender(docData.gender);
      setUserId(docData.d_UserId);
      setEmail(docData.email);
      setPassword(docData.password);
      setMobile(docData.mobile);
      setMedicalreg(docData.medical_Registration);
      setSpecialization(docData.specialization);
      setExperience(docData.experience);
      setImg(docData.dimg);
      setDescription(docData.description);
      setDesignation(docData.designation);
      setQualification(docData.qualification);


    }).catch(error => {
      alert("Error Ocurred getting doctor detail:" + error);
    });
  }, []);


  const nameChangeHandler = (event) => {
    setName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setAge(event.target.value);
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
  const medicalregistrationChangeHandler = (event) => {
    setMedicalreg(event.target.value);
  };
  const specializationChangeHandler = (event) => {
    setSpecialization(event.target.value);
  };
  const experienceChangeHandler = (event) => {
    setExperience(event.target.value);
  };
  const designationChangeHandler = (event) => {
    setDesignation(event.target.value);
  };
  const descriptionChangeHandler = (event) => {
    setDescription(event.target.value);
  };
  const qualificationChangeHandler = (event) => {
    setQualification(event.target.value);
  };


  const submitActionHandler = (event) => {
    event.preventDefault();
   const headers={
      'Authorization' : `Bearer ${token}`
    }
    axios
      .put(editURL + param.id, {
        dId: docId,
        dName: docName,
        age: docAge,
        gender: docGender,
        d_UserId: docUserId,
        email: docEmail,
        password: docPassword,
        mobile: docMobile,
        medical_Registration: docMegicalregistration,
        specialization: docSpecialization,
        experience: docExperience,
        dimg: docImg,
        description: docDescription,
        designation: docDesignation,
        qualification: docQualification,
        role:"Doctor"
      },{headers})
      .then((response) => {
        alert("Doctor " + docId + " updated!");
        navigate('/doctorPage');

      }).catch(error => {
        alert("Error Ocurred updating employee:" + error);
      });

  };
  async function logoutalert() {
    var result = window.confirm("Are you sure you want to log out");

    if (result) {
      navigate1("/");
    } else {
      // navigate1("");
    }
  };
  return (

    <div class="not-edho">
      <div class="doclogbody">
        {/* {doctors.map((doctors) => ( */}
          <div class="doclogcontaining">

            <div class="doclognavbar">
              <img src={docImg}></img>
              <li><Link to="/doctorPage">Home</Link></li>
              <li><Link to={"/about/" + docUserId}>About</Link></li>
              <li><Link to={"/myappointment/"+docId}>My Appointments</Link></li>
              {/* <li><Link to={"/update/" + docId}>Update</Link></li> */}
              <li><a onClick={logoutalert}>Log Out</a></li>
            </div>


          </div>
        {/* ))} */}
      </div>
      <Form onSubmit={submitActionHandler} id="data">
        <div class="content">
          <Form.Group controlId="form.id" className='edho'>
            <Form.Label>Id</Form.Label>
            <Form.Control value={docId} />
          </Form.Group>
          <Form.Group controlId="form.Name" className='edho'>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" value={docName} onChange={nameChangeHandler} placeholder="Enter User Name" required />
          </Form.Group>
          <Form.Group controlId="form.Age" className='edho'>
            <Form.Label>Age</Form.Label>
            <Form.Control type="text" value={docAge} onChange={ageChangeHandler} placeholder="Enter Age" required />
          </Form.Group><br></br>
          <Form.Group controlId="form.Gender" className='edho'>
            <Form.Label>Gender</Form.Label>
            <select type="text" value={docGender} onChange={genderChangeHandler} placeholder="Enter Gender" required>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </Form.Group>
          <Form.Group controlId="form.Email" className='edho'>
            <Form.Label>Email</Form.Label>
            <Form.Control type="text" value={docEmail} onChange={emailChangeHandler} placeholder="Enter Email" required />
          </Form.Group>
          <Form.Group controlId="form.Password" className='edho'>
            <Form.Label>Password</Form.Label>
            <Form.Control type="text" value={docPassword} onChange={passwordChangeHandler} placeholder="Enter Password" required />
          </Form.Group>
          <Form.Group controlId="form.Mobile" className='edho'>
            <Form.Label>Mobile</Form.Label>
            <Form.Control type="text" value={docMobile} onChange={mobileChangeHandler} placeholder="Enter Mobile" required />
          </Form.Group>
          <Form.Group controlId="form.MedReg" className='edho'>
            <Form.Label>Megical registration</Form.Label>
            <Form.Control type="text" value={docMegicalregistration} onChange={medicalregistrationChangeHandler} placeholder="Enter Medical Registration" required />
          </Form.Group>
          <Form.Group controlId="form.Specialization" className='edho'>
            <Form.Label>Specialization</Form.Label>
            <Form.Control type="text" value={docSpecialization} onChange={specializationChangeHandler} placeholder="Enter Specialization" required />
          </Form.Group>
          <Form.Group controlId="form.Exp" className='edho'>
            <Form.Label>Experience</Form.Label>
            <Form.Control type="text" value={docExperience} onChange={experienceChangeHandler} placeholder="Enter Experience" required />
          </Form.Group>
          <Form.Group controlId="form.Description" className='edho'>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" value={docDescription} onChange={descriptionChangeHandler} placeholder="Enter Description" required />
          </Form.Group>
          <Form.Group controlId="form.Designation" className='edho'>
            <Form.Label>Designation</Form.Label>
            <Form.Control type="text" value={docDesignation} onChange={designationChangeHandler} placeholder="Enter Designation" required />
          </Form.Group>
          <Form.Group controlId="form.Qualification" className='edho'>
            <Form.Label>Qualification</Form.Label>
            <Form.Control type="text" value={docQualification} onChange={qualificationChangeHandler} placeholder="Enter Qualification" required />
          </Form.Group>
          <br></br>
          <Button type='submit'>Update Employee</Button>
          &nbsp;&nbsp;&nbsp;
          <Button onClick={() => navigate("/doctorPage")}>Cancel</Button>
        </div>
      </Form>

    </div>

  );
}
export default EmployeeForm;
