import React from 'react'
import './skills.css';
import WebDesign from '../../assets/WebDesign.png';
import SoftwareDeveloper from '../../assets/Software.png';

const Skills = () => {
  return (
    <section id='skills'>
        <span className="skillTitle">What I Do</span>
        <span className="skillDesc">As a software Developer, I leverage my expertise in Information Technology to create innovative and user-friendly solutions across various platforms. With a passion for problem-solving and a commitment to quality, I collaborate effectively with teams to deliver high-impact projects. My goal is to make a meaningful impact by crafting solutions that streamline processes and enhence user experiences.</span>
        <div className="skillBars">
            <div className="skillBar">
                <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>WebDesign</h2>
                    <p>Web design specializes in creating and maintaing websites and web applications.</p>
                </div>
            </div>
            <div className="skillBar">
                <img src={SoftwareDeveloper} alt="SoftwareDeveloper" className="skillBarImg" />
                <div className="skillBarText">
                    <h2>SoftwareDeveloper</h2>
                    <p>Software Developer is professional who designs, create, test, and maintains software applications, systems, and platform.</p>
                </div>
            </div>
        </div>
    </section>
  );
}

export default Skills;