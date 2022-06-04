import React from 'react'
import Experience from '../experience/Experience'
import "./experiences.css"

const Experiences = () => {

  const we1 = {
    title:"The Dairing Company",
    startDate:"February 2022",
    endDate:"May 2022",
    location:"Remote",
    designation:"Backend Developer Intern",
    about:"A Dehradun based early startup which enables users to buy fitness supplements along with the feature to enroll in its training programs by well certified trainers and post blogs related to healthy lifestyle.",
    work:[
      "Created an OTP mailing system using google OAuth2.",
      "Created model and controller for trainers which takes care of all trainer related functionalities in the website.",
      "Using multer package implemented file uploading and saving function in the server.",
      "Designed database schema to enable posting of comments in all articles",
      "Implemented order controller and booking controller for placing orders and enrolling in programs.",
      "Integrated payment capturing system using Razorpay with feature to split the amount among the company and the trainers.",
      "Designed and created admin panel from scratch."
    ],
    remarks:"Worked in a startup-environment.",
    certificate:"https://drive.google.com/file/d/1MP2dK4DXzNjlMgqTjPXN1Pi3WihZiPn_/view"
  }

  const we2 = {
    title:"Webghat LLC",
    startDate:"May 2022",
    endDate:"Present",
    location:"Remote",
    designation:"Javascript Developer Intern",
    about:"A Chicago based company which helps small businesses to create an online presence and provides lead generation services.",
    work:[
      "Using chart.js created different plots for clients to provide them sufficient analytics.",
      "Created a dynamic database schema to store user details depending on their specified roles."
    ],
    remarks:"Worked with real world client data and learnt about creating robust backend in web-app along with sensitive handling of data.",
    certificate:""
  }

  return (
    <div className="pl">
        <div className="pl-texts">
            <h1 className="pl-title">My Professional Journey</h1>
            <p className="pl-desc"> </p>
        </div>
        <div className="pl-list">
            <Experience we={we1}/>
            <Experience we={we2}/>
        </div>
    </div>
  )
}

export default Experiences