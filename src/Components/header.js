import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css"
import "./about.js"
import { Link } from 'react-router-dom';
// import "./DocPublic.css";
import "./Home.css";
 
const Header = () => {
    return(
        <header className="header">
                {/* <a href = "#" class = "log"><i class = "fas fa-heartbeat"></i>Hospital Name</a> */}
                <a href="#" class="log">WellWish Hospital</a>
                <nav class="navbar">
                    <Link to={"/Homehead"}>Home</Link>
                    <span class="nav-btn"><a href="#DoctorLogin">Doctor Login</a></span>
                    <span class="nav-btn"><a href="#PatientLogin">Patient Login</a></span>
 
                    {/* <button onClick={()=>Navigate("/register")}>Register</button> */}
                    <span class="nav-btn"><Link to="/register">Register</Link></span>
 
                </nav>
 
                <div id="menu-btn">&#9776;</div>
            </header>
    );
};
 
 
 
export default Header;