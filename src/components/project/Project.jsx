import React from 'react';
import "./project.css";
import Github from "../icons/Github";
import Website from "../icons/Website";

const Project = (props) => {

  return (
    <div className="proj">
        <div className="proj-browser"></div>
        <div className="proj-title">
          {props.pro.title}
        </div>
        <div className="proj-duration">
          {props.pro.startDate} - {props.pro.endDate}
        </div>
        <div className="proj-works">
          Details-
          {props.pro.details.map((item)=>{
            return (
              <div key={item} className="proj-work">{item}</div>
            )
          })}
        </div>
        <div className="proj-techs">Tech-Stack Used-<br></br>
            {props.pro.techStack.map((item,index)=>{
              return (
                <span key={item} className="proj-tech">{ (index ? ', ' : '') + item }</span>
              )
            })}
        </div>
        <div className="proj-sites">
          <span className="proj-link">
            {props.pro.live!="" && <a href={props.pro.live} target="_blank" title="Click here to see the live website"><Website/></a>}
          </span>
          <span className="proj-github">
          {props.pro.github!="" && <a href={props.pro.github} target="_blank" title="Click here to see the source code"><Github/></a>}
          </span>
        </div>
    </div>
  )
}

export default Project