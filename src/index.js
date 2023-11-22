import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PatientForm from './Components/Signup';
import { BrowserRouter,Routes,Router} from 'react-router-dom';
import EmployeeDataTable from './Components';
import EmployeeDataTable1 from './Components/about';
import PatientDataTable from './Components/patient';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
   <BrowserRouter>
    <App />
    {/* <PatientForm/> */}
   </BrowserRouter>
       
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
