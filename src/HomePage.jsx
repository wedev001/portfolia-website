/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useEffect, useRef } from 'react';
import './Home.css'; 
import profileimg from '../src/assets/Profile.png';
import { Braces, Atom, Server, SquareCode, Database, Code, Wind, GitBranch, List, Coffee, Code2 } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import { Cpu, Terminal, Layers } from "lucide-react";
import Typed from "typed.js";
import emailjs from "@emailjs/browser";


const Home = () => {
       
    const form = useRef();

    const downloadResume = () => {
        const link = document.createElement("a");
        link.href = "/NewResume.pdf"; // Public folder path
        link.download = "Resume.pdf"; // Downloaded file name
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };
    

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            "service_wss9jkz",  
            "template_26n0teg",
            form.current,
            "s87lKL8epWB0km8DZ"  
        )
        .then((result) => {
            alert("Message Sent Successfully!");
            console.log(result.text);
        })
        .catch((error) => {
            alert("Failed to send message. Please try again.");
            console.log(error.text);
        });

        e.target.reset();
    };

    const typedTextRef = useRef(null);

    useEffect(() => {
        const typed = new Typed(typedTextRef.current, {
            strings: ["Welcome to My Portfolio", "I am a Passionate Software Developer"],
            typeSpeed: 50,
            backSpeed: 30,
            backDelay: 1000,
            startDelay: 500,
            loop: true
        });

        return () => {
            typed.destroy();
        };
    }, []);

    useEffect(() => {
        // Add smooth scrolling behavior
        document.querySelectorAll("nav a").forEach(anchor => {
            anchor.addEventListener("click", function (e) {
                e.preventDefault();
                const targetId = this.getAttribute("href").substring(1);
                const targetSection = document.getElementById(targetId);
                if (targetSection) {
                    window.scrollTo({
                        top: targetSection.offsetTop - 50,
                        behavior: "smooth"
                    });
                }
            });
        });

        // Intersection Observer for fade-in effect
        const sections = document.querySelectorAll("section");
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, { threshold: 0.3 });

        sections.forEach(section => observer.observe(section));

    }, []);

    const skills = [
        { name: "JavaScript", icon: <Braces size={30} /> },
        { name: "React.js", icon: <Atom size={30} /> },
        { name: "Node.js", icon: <Server size={30} /> },
        { name: "Express.js", icon: <SquareCode size={30} /> },
        { name: "MongoDB", icon: <Database size={30} /> },
        { name: "TypeScript", icon: <Code size={30} /> },
        { name: "Tailwind CSS", icon: <Wind size={30} /> },
        { name: "Git & GitHub", icon: <GitBranch size={30} /> },
        { name: "C++", icon: <Code2 size={30} /> },       
        { name: "Java", icon: <Coffee size={30} /> },     
        { name: "Data Structures & Algorithms", icon: <List size={30} /> },
    ];
    

    return (
        <>
            <section id="home" className="home-section fade-in">
                <div className="profile-container">
                    <div className="profileImage">
                        <img src={profileimg} alt="Profile" className="Profile" />
                        <p>Suraj Kumar</p>
                        <p>Software Developer</p>
                    </div>
                    <div className="text-content">
                        <h1><span ref={typedTextRef}></span></h1>
                        <p>I am a passionate Software Developer with expertise in modern web technologies...</p>
                        
                             <button className="DownLoad" onClick={downloadResume}>Download Resume</button>

                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" className="about-section fade-in">
    <div className="about-container">
        <div className="about-image">
            <Code size={120} strokeWidth={1.5} className="dev-icon" />
        </div>
        <div className="about-text">
            <h2 className="section-title">About Me</h2>
            <h3>Hi, I'm <span className="highlight">Suraj Kumar</span> 👋</h3>
            <p>
                A passionate Software Developer with expertise in frontend & backend development,  
                Data Structures & Algorithms (DSA), and competitive programming.  
                I specialize in building scalable web applications and solving real-world problems.
            </p>

            <h4>💡 Technical Expertise:</h4>
            <ul className="skills-list">
                <li><Terminal size={18} className="icon" /> <strong>Languages:</strong> JavaScript, C++, HTML5, Java</li>
                <li><Layers size={18} className="icon" /> <strong>Web Tech:</strong> React.js, Node.js, Express.js, MongoDB</li>
                <li><Cpu size={18} className="icon" /> <strong>DSA & Problem Solving:</strong> LeetCode, CodeChef, HackerRank</li>
                <li><Code size={18} className="icon" /> <strong>Version Control:</strong> Git & GitHub</li>
            </ul>
        </div>
    </div>
</section>


           {/* Technical Skills Section */}
           <section id="skills" className="skills-section fade-in">
            <h2>Technical Skills</h2>
            <div className="skills-container">
                {skills.map((skill, index) => (
                    <div key={index} className="skill-card">
                        {skill.icon}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
        </section>


            {/* Projects Section */}
            <section id="projects" className="projects-section fade-in">
    <h2 className="section-title">Projects</h2>
    <div className="projects-container">
        <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>A personal portfolio website showcasing my skills, projects, and resume.</p>
            <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
            <h3>E-commerce App</h3>
            <p>A full-stack e-commerce website built with React, Node.js, and MongoDB.</p>
            <a href="#" className="project-link">View Project</a>
        </div>
        <div className="project-card">
            <h3>AI Resume Bulider</h3>
            <p>A full-stack AI Resume Builder built with React, Node.js, MongoDB, Machine Learning, and AI.</p>
            <a href="#" className="project-link">View Project</a>
        </div>
    </div>
</section>

            {/* Contact Section */}
            <section id="contact" className="contact-section fade-in">
    <h2 className="section-title">Contact Me</h2>
    <p>Let's collaborate on amazing projects! Feel free to reach out.</p>

    {/* Social Links */}
    <div className="social-links">
    <a href="https://github.com/wedev001" rel="noopener noreferrer">
        <FaGithub className="social-icon" />
    </a>
    <a href="https://www.linkedin.com/in/surajsingh420" rel="noopener noreferrer">
        <FaLinkedin className="social-icon" />
    </a>
    <a href="https://www.instagram.com/suraaaaaj_?igsh=MXhqeDZheXRidzhnbQ==" rel="noopener noreferrer">
        <FaInstagram className="social-icon" />
    </a>
    <a href="https://www.facebook.com/share/17Vpa5AFMm/" rel="noopener noreferrer">
        <FaFacebook className="social-icon" />
    </a>
</div>

    {/* Contact Form */}
    <form ref={form} onSubmit={sendEmail} className="contact-form">
                <input type="text" name="user_name" placeholder="Your Name" required />
                <input type="email" name="user_email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Send Message</button>
            </form>
</section>
        </>
    );
};

export default Home;
