import React from 'react';
import { data } from './data';
import './skill.css';
export default function Skills() {
  return (
    <div className="skills">
        <h1>Skills</h1>
        <div className="skillholder">
            {data.map((item) => {
                return(
                    <div className="skillcard" key = {item.field}>
                        <div className="skillheader">
                            {item.field}
                        </div>
                        <div className="skillimgholder">
                            {item.tech.map((si) => {
                                return(
                                    <div className="innercard" key = {si.name}>
                                        <img src={si.img} alt="" className="skillimgs" />
                                        <a 
                                    href={si.link} 
                                    className="skilllink"
                                    target ='_blank'
                                    rel ='noreferrer noopener'>
                                        {si.name}
                                    </a>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}
