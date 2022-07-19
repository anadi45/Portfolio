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
    remarks:[
      "Worked in a startup-environment.",
      "Provided opportunity to lead the backend team."
    ],
    certificate:"https://drive.google.com/file/d/1wG-_Fq7hlypn_-Pj6glOVKhl_CegOV5d/view?usp=sharing",
    lor:""
  }

  const we2 = {
    title:"Webghat LLC",
    startDate:"May 2022",
    endDate:"July 2022",
    location:"Remote",
    designation:"Backend Developer Intern",
    about:"A Chicago based company which helps small businesses to create an online presence and provides lead generation services.",
    work:[
      "Developing new backend logic for upgrading existing LDP platform into a new one.",
      "Using chart.js created different plots for clients to provide them sufficient analytics.",
      "Created a dynamic database schema to store user details depending on their specified roles.",
      "Created CRUD features which included mapping between different database models simultaneously",
      "Worked on frontend features to improve user experience.",
      "Worked on LDP-v1 simultaneously to add more features and included standard debugging."
    ],
    remarks:[
      "Worked with real world client data and learnt about creating robust backend in web-app along with sensitive handling of data.",
      "Was awarded an extension in the internship from the given contract period."
    ],
    certificate:"https://drive.google.com/file/d/1FUQL-ErMaF47uHncqLJSTP0jgUpWqsrW/view?usp=sharing",
    lor:"https://drive.google.com/file/d/17zses3vqK4s4jz09_dPmGJGmofgK8PP_/view?usp=sharing"
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