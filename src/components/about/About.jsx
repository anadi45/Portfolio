import React from 'react'
import './about.css'
import Image from '../../images/image2.jpg'

const About = () => {
  return (
    <div className="a">
        <div className="a-left">
            <div className="a-card bg"></div>
            <div className="a-card">
                <img src={Image} alt="" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
            <h1 className="a-title">Educational Background</h1>
            <p className="a-sub">
                Delhi Public School, Ranchi
            </p>
            <p className="a-desc">
                <div className="a-field">
                    10<sup>th</sup>(2017) - 10 CGPA
                </div>
                <div className="a-field">
                    12<sup>th</sup>(2019) - 85.8 %
                </div>
            </p>
            <p className="a-sub">
                Birla Institute of Technology, Mesra
            </p>
            <p className="a-desc">
                <p className="a-field">
                    B.Tech in Information Technology (2019 - Present) - 8.4 CGPA 
                </p>
            </p>
        </div>
    </div>
  )
}

export default About