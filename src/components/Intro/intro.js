import React from 'react';
import './intro.css';
import bg from '../../assets/image (1).png';
import btnImg from '../../assets/hire-me.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introText">I'm, <span className="introName">Thandiwe</span> <br />Website Designer</span>
        <p className="introPara">As a creative website designer with a background in design and development, <br></br>I craft visually stunning, functional websites that perform seamlessly on all devices.</p>
        <Link><button className="btn"><img src={btnImg} alt="Hire" className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  )
}

export default Intro;