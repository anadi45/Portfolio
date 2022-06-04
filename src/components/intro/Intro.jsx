import React from 'react';
import "./intro.css";
import Me from '../../images/image1.png';
import LinkedIn from '../icons/LinkedIn';
import Mail from '../icons/Mail';
import Github from '../icons/Github';

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, My Name is</h2>
          <h1 className="i-name">Ranjeet Baraik</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">C/C++</div>
              <div className="i-title-item">Data Structure &amp; Algorithms</div>
              <div className="i-title-item">MERN Stack Web Development</div>
              <div className="i-title-item">MySQL</div>
              <div className="i-title-item">Image Processing</div>
              <div className="i-title-item">Git/Github</div>
            </div>
          </div>
          <p className="i-desc">I am a B.Tech undergrad in the field of Information Technology from BIT Mesra, Ranchi. I am very hard-working and remain self-motivated towards my goals.
          I always try not to limit myself and try to learn new things.Recently I have cracked ZS Campus Beats 22.</p>
          <div className="i-contact">
            <a href="mailto:ranjeetbaraik15@gmail.com" target="_blank" rel="noopener noreferrer" title="Send mail"><Mail/></a> 
            <a href="https://github.com/anadi45" target="_blank" rel="noopener noreferrer" title="Visit github"><Github/></a> 
            <a href="https://www.linkedin.com/in/ranjeet-baraik-b803231a0/" target="_blank" rel="noopener noreferrer" title="Visit linkedin"><LinkedIn/></a>   
          </div>
        </div>
      </div>
      <div className="i-right">
        <div className="i-bg"></div>
        <img src={Me} className="i-img" alt="Unable to load the image"/>
      </div>
    </div>
  )
}

export default Intro