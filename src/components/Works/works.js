import React from 'react'
import './works.css';
import Portfolio1 from '../../assets/Portfolio1.png';
import Portfolio2 from '../../assets/Portfolio2.png';
import Portfolio3 from '../../assets/Portfolio3.png';


const Works = () => {
  return (
    <section id='works'>
        <h2 className="worksTitle">My Portfolio</h2>
        <span className="worksDesc">I take pride in paying attention to the smallest details and making sure that my work is pixel perfect. I am excited to bring my skills and experience to help bunesses achieve their goals and create strong online presence.</span>
        <div className="worksImgs">
          <img src={Portfolio1} alt="" className="worksImg"/>
          <img src={Portfolio2} alt="" className="worksImg"/>
          <img src={Portfolio3} alt="" className="worksImg"/>
        </div>
        <button className="workBtn">See More</button>
    </section>
  );
}

export default Works