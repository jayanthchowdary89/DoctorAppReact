import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link, NavLink, Navigate, useNavigate } from 'react-router-dom';
import "./Home.css";
import { hover } from '@testing-library/user-event/dist/hover';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee,faUser,faBedPulse ,faHospital,faNotesMedical,faHeartPulse,faVial,faSquarePlus,faTty,faBed,faHandHoldingHeart,faUserDoctor,faAnglesRight,faAngleRight} from '@fortawesome/free-solid-svg-icons';
import image from "./image2.jpg";
import image1 from "./image3.jpg";
import image2 from "./image4.gif";
// import "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css";
 
 
const Home = () => {
    const [doctors, setDoctors] = useState([]);
 
 
    useEffect(() => {
        getDoctors();
    }, []);
 
    async function getDoctors() {
        try {
            const response = await axios.get("http://localhost:5089/api/doctors");
            console.log(response.data);
            setDoctors(response.data);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }
 
 
 
    return (
 
        <div>
 
            <header className="header">
                {/* <a href = "#" class = "log"><i class = "fas fa-heartbeat"></i>Hospital Name</a> */}
                <a href = "#" class = "log"><FontAwesomeIcon icon={faHeartPulse} />WellWish Hospital</a>
                <nav class="navbar">
                    <a href="#">Home</a>
                    <a href="#Aboutus">About Us</a>
                    <a href="#Services">Services</a>
                    <a href="#Doctors">Doctors</a>
                    <a href="#Contactus">Contact Us</a>
                    <span class="nav-btn"><a href="/loginDoc">Doctor Login</a></span>
                    <span class="nav-btn"><Link to = '/login'>Patient Login</Link></span>
 
                    {/* <button onClick={()=>Navigate("/register")}>Register</button> */}
                    <span class="nav-btn"><Link to="/register">Register</Link></span>
 
                </nav>
 
                <div id="menu-btn">&#9776;</div>
            </header>
 
            <setion class="home" id="Home">
                <div class="image">
                <img src = {image}></img>
                </div>
                <div class="content">
                    <h3>Healing Hands, Caring Hearts</h3>
                    <p>At WellWish, we are dedicated to providing exceptional and compassionate healthcare to our community. As a leading healthcare institution, we prioritize the well-being and recovery of every patient who entrusts us with their care. Our state-of-the-art facilities, combined with a team of skilled and compassionate healthcare professionals, ensure that you receive the highest quality of medical attention.</p>
                    <p>At the heart of our mission is a commitment to excellence in medical care, innovation in healthcare practices, and unwavering support for our patients and their families. We understand that health is a deeply personal and precious aspect of life, and we strive to create an environment that promotes healing, comfort, and confidence in your healthcare journey.</p>
                    <p>Our multidisciplinary approach to healthcare integrates the latest medical advancements with a focus on individualized, patient-centered care. Whether you're here for a routine check-up, a specialized treatment, or emergency care, our team is dedicated to providing you with the best possible experience.</p>
                    <a href="#Contactus" class="btn">Reach us<span><FontAwesomeIcon icon={faAnglesRight} /></span></a>
                </div>
            </setion>
 
            <section class="icons-container">
                <div class="icons">
                    <i><FontAwesomeIcon icon={faUser} /></i>
                    <h3>500+</h3>
                    <p>Satisfied Patients</p>
                </div>
 
                <div class="icons">
                    <i><FontAwesomeIcon icon={faBedPulse} /></i>
                    <h3>625+</h3>
                    <p>Bed Facility</p>
                </div>
 
                <div class="icons">
                    <i><FontAwesomeIcon icon={faHospital} /></i>
                    <h3>5+</h3>
                    <p>Years of Excellence</p>
                </div>
 
                {/* <div class = "icons">
        <i class = "fas fa-md-user"></i>
        <h3>140+</h3>
        <p>Doctors at work</p>
    </div> */}
            </section>
 
            <section class="services" id="Services">
                <h1 class="heading">Our <span>Services</span></h1>
                <div class="box-container">
                    <div class="box">
                        <i ><FontAwesomeIcon icon={faVial} /></i>
                        <h3>Full body checkups</h3>
                        <p>At WellWish, we recognize that the secret to a long and healthy life is preventive healthcare. With the help of our comprehensive full-body check-up, you will be able to take charge of your health by receiving a complete and comprehensive assessment of your general state of health.</p>
                    </div>
 
                    <div class="box">
                        <i ><FontAwesomeIcon icon={faSquarePlus} /></i>
                        <h3>Surgery</h3>
                        <p>At WellWish, we recognize that having surgery may be a difficult experience, and we're dedicated to giving you the best medical treatment possible in a kind and secure setting. Our team of highly qualified doctors is ready to help you every step of the way during your surgical journey, backed by cutting edge equipment and a committed medical staff.</p>
                    </div>
 
                    <div class="box">
                        <i><FontAwesomeIcon icon={faTty} /></i>
                        <h3>24/7 Telephonic Assistance</h3>
                        <p>At WellWish, we recognize that health issues can occur at any time and that it's critical to have access to trustworthy information and assistance. Because of this, we are pleased to provide you with round-the-clock telephone support, allowing you to speak with one of our qualified medical specialists right away if you need advice.</p>
                    </div>
 
                    <div class="box">
                        <i><FontAwesomeIcon icon={faBed} /></i>
                        <h3>Bed facility</h3>
                        <p>At WellWish, we understand how critical a therapeutic atmosphere is to the healing process. During your time with us, our bed facilities will offer you a supporting environment for rest and recuperation, all while keeping your comfort and well-being in mind.</p>
                    </div>
 
                    <div class="box">
                        <i><FontAwesomeIcon icon={faHandHoldingHeart} /></i>
                        <h3>Total Care</h3>
                        <p>At WellWish, we consider the full of your well-being to be included in true healthcare, not just the treatment of symptoms. Our goal at Total Care is to offer you a tailored and all-encompassing healthcare experience that takes into account not just your physical demands but also your emotional and social wellbeing.</p>
                    </div>
                </div>
            </section>
 
            <section class="about" id="Aboutus">
                <h1 class="heading">
                    <span>ABOUT </span>US
                </h1>
                <div class="row">
                    <div class="image">
                        <img src= {image1}></img>
                    </div>
 
                    <div class="content">
                        <h3>
                            Overview
                        </h3>
                        <p>One of the top multispecialty hospitals in India, WellWish Hospitals treats patients from all over the world. We offer everyone accessible, high-quality healthcare at an affordable price thanks to our network of hospitals and skilled team of medical professionals. We think that every patient should receive comprehensive care in a setting that is not like a hospital. We are one of the best super-specialty hospitals, with modern, state-of-the-art buildings that can house almost 625 beds and provide services ranging from quaternary to primary care. Being among the most reputable multispecialty hospitals, our goal is to continuously raise the bar and establish superior clinical standards.</p>
                        <h3>Our Values</h3>
                        <p>Our commitment to clinical excellence, patient centricity, and ethical practices is evident at WellWish Hospitals. Our team of highly skilled medical professionals demonstrates our dedication to clinical excellence. Our clinical team receives excellent support from our highly skilled paramedical and nursing staff. The needs of our patients are the focus of our healthcare services. Our top priority is to establish a caring and encouraging atmosphere for both patients and the people who are caring for them.  We have gained the respect of patients thanks to our patient-first philosophy. We place the utmost value on ethical behavior, as demonstrated by our integrity, trust, and secrecy in our professional interactions.</p>
                    </div>
                </div>
            </section>
 
            <section class="doctors" id="Doctors">
                <h1 class="heading"> OUR <span>DOCTORS</span></h1>
                <div class="box-container">
                    {doctors.map((doctors) => (
                        <div class="box">
                            <img src={doctors.dimg} alt=""></img>
                            <h3>{doctors.dname}</h3>
                            <span>{doctors.designation}</span><br></br>
                            <span>{doctors.specialization}</span><br></br>
                            {/* <a href="#" class="btn">View Profile<span>&#9776;</span></a> */}
                            {/* <div class="prf"><a href = "" class="btn">View Profile<span>&#9776;</span></a></div> */}
                            {/* <button onClick={()=>Navigate("/profile")}>View Profile</button> */}
                            {/* <button>View Profile</button> */}
 
                            {/* <div class="doc-prf"  id='docPart'>
                                <Link to="/profile"  className='doc1Part'>
                                View Profile</Link>
                            </div> */}
                            <button className='buttonView'>
                                 <NavLink to={"/profile/" + doctors.dId} id='linkView'>
                                    <span className='viewPart'><i><FontAwesomeIcon icon={faUserDoctor} /></i>
                                    &nbsp;View Profile
                                    </span>
                                   
                                 </NavLink>
                            </button>
                        </div>))}
                </div>
            </section>
 
            <section class="contact" id="Contactus">
                <h1 class="heading">
                    <span>CONTACT </span>US
                </h1>
                <div class="row">
                    <div class="image">
                        <img src={image2} alt=""></img>
                    </div>
 
                    <div class="content">
                        <h3>
                            You can reach us at
                        </h3>
                        <p><span>&#9742;</span>&nbsp; 1800 102 5555</p>
                        <p><span>&#9993;</span>&nbsp; wellwishhospital@gmail.com</p>
                        <h4>Our main branches : </h4>
                        <p>WellWish Hospitals,98, HAL Old Airport Road, Kodihalli, Bengaluru, Karnataka 560017</p>
                        <p>WellWish Hospitals, Kurmannapalem, Duvvada, Vishakhapatnam, 530046</p>
                    </div>
                </div>
            </section>
 
                           
            <section class="footer">
                <div class="box-container">
                    <div class="box">
                        <h3>Quick Links</h3>
                        <a href="#Home"><i class="fas fa-chevron-right"></i>Home</a>
                        <a href="#Aboutus"><i class="fas fa-chevron-right"></i>About Us</a>
                        <a href="#Services"><i class="fas fa-chevron-right"></i>Services</a>
                        <a href="#Doctors"><i class="fas fa-chevron-right"></i>Doctors</a>
                        <a href="#Contactus"><i class="fas fa-chevron-right"></i>Contact Us</a>
                        <a href="#Login"><i class="fas fa-chevron-right"></i>Patient Login</a>
                        <a href="/register"><i class="fas fa-chevron-right"></i>Register</a>
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
        </div>
    );
}
 
export default Home;