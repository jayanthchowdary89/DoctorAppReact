import logo from './logo.svg';
import './App.css';
import EmployeeDataTable from './Components';
import {BrowserRouter,Routes,Route,Navigate,Link} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeDataTable1 from './Components/about';
import EmployeeForm from './Components/update';
import PatientDataTable from './Components/patient';
import PatientUpdate from './Components/pupdate';
import PatientDataTable1 from './Components/history';
import PatientForm from './Components/Signup';
import Home from './Components/home';
import DoctorPublic from './Components/DocPublic';
import LoginForm from './Components/Login1';
import LoginFormForDoc from './Components/LoginDoctor';
import DoctorPersonalProfile from './Components/doctorlog';
import ViewProfile from './Components/ViewProfile';
import PatientProfile from './Components/PatientProfile';
import { useState } from 'react';
import BookAppointment from './Components/BookAppointment';
import MyappForDoctor from './Components/MyappForDoctor';
import MyappForPatient from './Components/MyappForPatient';
function App() {

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Perform authentication logic
    setIsAuthenticated(true);
  };
  return (
    <div className="App">
      <Routes>

      {/* <Route path="/loginDoc">
          <LoginFormForDoc onLogin={handleLogin} />
        </Route> */}



        <Route path = "/"  element={ <Home/>}></Route>
        <Route path = "/myappointment/:id"  element={<MyappForDoctor/>}></Route>
        <Route path = "/myappointmentPat/:id"  element={<MyappForPatient/>}></Route>
        <Route path = "/patientPage" element = {<PatientDataTable/>}></Route>
        <Route path = "/pupdate/:id" element = {<PatientUpdate/>}></Route>
        <Route path = "/about/:id" element={<EmployeeDataTable1/>}></Route>
        <Route path = "/history/:id" element={<PatientDataTable1/>}></Route>
        <Route path ="/update/:id" element={<EmployeeForm/>}></Route>
        <Route path = "/register" element={<PatientForm/>}></Route>
        <Route path = "/profile/:id" element={<DoctorPublic/>}></Route>
        <Route path='/login' element={<LoginForm/>}></Route>
        <Route path='/loginDoc' element={<LoginFormForDoc/>}></Route>
        <Route path='/doctorPage' element={<DoctorPersonalProfile/>}/>
        <Route path ='/ViewProfile/:id' element={<ViewProfile/>}></Route>
        <Route path ='/PatientProfile/:id' element={<PatientProfile/>}></Route>
        <Route path ='/BookAppointment/:id' element={<BookAppointment/>}></Route>
        {/* <Route path = "/"  element={ <PatientDataTable/>}></Route>
        <Route path = "/history" element={<PatientDataTable1/>}></Route>
        <Route path = "/patienthome" element={<PatientDataTable/>}></Route>
        <Route path ="/pupdate/:id" element={<PatientUpdate/>}></Route> */}
      </Routes>
    </div>
  );
}

export default App;
