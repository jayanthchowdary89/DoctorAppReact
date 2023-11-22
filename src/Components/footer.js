import React, { useEffect, useState } from 'react';
import axios from "axios";
import "../App.css"
import "./about.js"
import { Link } from 'react-router-dom';
import "./home.js";
// import "./DocPublic.css";
import "./Home.css";
 
const Footer = () =>{
    return(
        <section class="footer">
                <div class="box-container">
                    <div class="box">
                        <h3>Contact Us</h3>
                        <ul>
                            <li><span>&#9742;</span>&nbsp; 1234567890</li><br></br>
                            <li><span>&#9993;</span>&nbsp; hospital@gmail.com</li><br></br>
                        </ul>
                    </div>
 
                    <div class="box">
                        <h3>Areas of Excellence</h3>
                        <ul>
                            <li>Dental Care</li><br></br>
                            <li>Cardiology</li><br></br>
                            <li>Neurology</li><br></br>
                            <li>Physiotherapy</li><br></br>
                            <li>Gynecology</li><br></br>
                            <li>General Surgery</li><br></br>
                            <li>ENT</li>
                        </ul>
                    </div>
                    <div class="box">
                        <h3>Our Locations</h3>
                        <ul>
                            <li>Bengaluru</li><br></br>
                            <li>Chennai</li><br></br>
                            <li>Nagpur</li><br></br>
                            <li>Hyderabad</li><br></br>
                            <li>Mumbai</li><br></br>
                            <li>Vishakhapatnam</li><br></br>
                            <li>Warangal</li>
                        </ul>
                    </div>
                </div>
                <div class="copyright"><span>&#169;</span>2023, Copyrights Reserved.</div>
            </section>
    );
};
 
export default Footer;