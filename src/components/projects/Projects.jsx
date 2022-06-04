import React from 'react'
import Project from "../project/Project"
import "./projects.css"

const Projects = () => {

  const pro1 = {
    title:"Expense Manager",
    startDate:"December 2021",
    endDate:"January 2022",
    techStack:[
      "HTML",
      "CSS",
      "Javascript",
      "Bootstrap CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "Bcrypt.js",
      "JWT authentication",
      "Chart.js",
      "REST API"
    ],
    details:[
      "Helps in keeping track of all expenses and total budget to make spending in control",
      "MVC architecture implemented.",
      "User-login system added using jwt token authentication",
      "Pie-chart visualization of expenses using chart.js",
      "Password encryption using bcrypt.js",
      "MongoDB Atlas used as cloud database."
    ],
    live:"https://anadi45-expense-manager.herokuapp.com",
    github:"https://github.com/anadi45/ExpenseManager"
  }

  const pro2 = {
    title:"Image Noise Remover",
    startDate:"January 2022",
    endDate:"March 2022",
    techStack:[
      "OpenCV",
      "Python",
      "Fourier Transform",
      "Low-pass Filters",
      "Butterworth Filters"
    ],
    details:[
      "Process image in frequency domain and filter out periodic noise present.",
      "Uses generalised mask to remove noise present in vertical, horizontal and diagonal pattern along with smoothing operation.",
      "ButterWorth low-pass filter used for smoothing operation."
    ],
    live:"",
    github:"https://github.com/anadi45/Image-Noise-Remover"
  }

  const pro3 = {
    title:"Document Scanner",
    startDate:"July 2021",
    endDate:"August 2021",
    techStack:[
      "C++",
      "OpenCV",
      "Spatial Image Processing",
      "Countour Detection",
      "Image Dilation"
    ],
    details:[
      "OpenCV and C++ used to scan an image and detect document from the image",
      "Displays the Top view/Bird’s eye view of the image",
      "Concepts of Image Dilation, Contour Detections and Warp Perspective implemented in the project"
    ],
    live:"",
    github:"https://github.com/anadi45/DocumentScanner"
  }

  return (
    <div className="pro">
        <div className="pro-texts">
            <h1 className="pro-title">My Projects</h1>
            <p className="pro-desc"></p>
        </div>
        <div className="pro-list">
            <Project pro={pro1}/>
            <Project pro={pro2}/>
            <Project pro={pro3}/>
        </div>
    </div>
  )
}

export default Projects