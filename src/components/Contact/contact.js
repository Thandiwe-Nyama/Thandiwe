import React, { useRef } from 'react';
import './contact.css';
import Chuma from '../../assets/Chuma.jpg';
import Phathek from '../../assets/Phathek.png';
import facebook from '../../assets/facebook.png';
import git from '../../assets/git.png';
import linkedin from '../../assets/linkedin.png';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
     const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_9ihmjwh', 'template_sqgom0a', form.current, 'N0yZWkeORfX8E9lGM5gR_')
        .then((result) => {
            console.log(result.text);
            e.target.reset();
            alert('Email Sent !');
        }, (_error) => {
           console.log('error.text');
         });
    };
    return (
        <section id="contactPage">
            <div id="clients">
                <h1 className="contactPageTitle">My Clients</h1>
                <p className="clientDesc">
                    I have had a opportunity to work with a diverse group of people. 
                    Some of the noble people I had worked with includes
                </p>
                <div className="clientImgs">
                    <img src={Chuma} alt="" className="clientImg" />
                    <img src={Phathek} alt="" className="clientImg" />
                </div>
                </div>
            <div id="contactPage">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" onSubmit={sendEmail} >
                    <input type="text" className="name" placeholder="Your Name" name='your_name'/>
                    <input type="email" className="email" placeholder="Your Email" name='your_email'/>
                    <textarea className="msg" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebook} alt="" classname="link" />
                        <img src={git} alt="https://github.com/Thandiwe-Nyama" classname="link" />
                        <img src={linkedin} alt="www.linkedin.com/in/nyama-thandiwe-a24168255/" classname="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact