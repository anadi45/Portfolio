import React from 'react';
import "./experience.css";
import Certificate from "../icons/Certificate";

const Experience = (props) => {
  
  return (
    <div className="p">
        <div className="p-browser"></div>
        <div className="p-title">
          {props.we.title} | {props.we.designation} 
        </div>
        <div className="p-duration">
          {props.we.startDate}-{props.we.endDate}
        </div>
        <div className="p-location">
          {props.we.location}
        </div>
        <div className="p-about">
          <strong>About company - </strong>
          {props.we.about}
        </div>
        <div className="p-works">
          Tasks &amp; Responsibilities -
          {props.we.work.map((item)=>{
            return (
              <div key={item} className="p-work">{item}</div>
            )
          })}
        </div>
        {props.we.certificate!="" && <a href={props.we.certificate} target="_blank" title="Click here to view certificate of completion"><Certificate/></a>}
    </div>
  )
}

export default Experience