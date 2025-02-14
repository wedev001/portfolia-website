// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './NavBar.css'; 
import profileimg from '../src/assets/SurajKumar.jpeg';
import Home from './HomePage'; 
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = () => {

    const [isOpen, setIsOpen] = useState(false);
    
    const [animateOut, setAnimateOut] = useState(false);
    const [showHome, setShowHome] = useState(false);


    const handleEnterClick = () => {
        setAnimateOut(true);
        setTimeout(() => {
            setShowHome(true);
            document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
        }, 700);
    };

    return (
        <>
            <nav className="navbar">
            <div className="navbar-logo">
                <a href="/">SURAJ KUMAR</a>
            </div>
            <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>
            <ul className={`navbar-links ${isOpen ? "open" : ""}`}>
                <li><a href="#home">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#skills">Skills</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
            
            {!showHome ? (
                <section className={`first-section ${animateOut ? 'slide-fade-out' : ''}`}>
                    <img src={profileimg} alt="Suraj Singh" className='profile-img'/>
                    <h1>Suraj Kumar</h1>
                    <p>Software Developer</p>
                    <button className="resume-btn" onClick={handleEnterClick}>ENTER</button>
                </section>
            ) : (
                <Home />
            )}
        </>
    );
};

export default NavBar;
