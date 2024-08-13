import React from 'react';
import './contact.css';
import Chuma from '../../assets/Chuma.jpg';
import Phathek from '../../assets/Phathek.png';
import facebook from '../../assets/facebook.png';
import git from '../../assets/git.png';
import linkedin from '../../assets/linkedin.png';


const Contact = () => {
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
            <div id="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">Please fill out the form below to discuss any work opportunities.</span>
                <form className="contactForm" >
                    <input type="text" className="name" placeholder="Your Name" />
                    <input type="email" className="email" placeholder="Your Email" />
                    <textarea className="mgs" name="message" rows="5" placeholder="Your Message"></textarea>
                    <button type='submit' value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <img src={facebook} alt="" classname="link" />
                        <img src={git} alt="" classname="link" />
                        <img src={linkedin} alt="" classname="link" />
                        <img src="" alt="" classname="link" />
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Contact