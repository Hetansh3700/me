import React from 'react'
import './projects.css'
import { data } from './data'
export default function Projects() {
  return (
    <div className="projects">
        <h1>Projects</h1>
        <div className="cardholder">
            {data.map((item) => {
                return(
                    <div className="card" key={item.name}>
                        <img src={item.img} alt="" className="cardimg" />
                        <div className="cardtext">
                            <h3 className="card-heading">
                                {item.name}
                            </h3>
                            <br/>
                            <p className="card-des">
                                {item.description}
                            </p>
                            <br/>
                            <div className="cardlinks">
                                <a  
                                    href={item.github} 
                                    className="clink"
                                    target='_blank'
                                    rel = 'noreferrer noopener'
                                >GitHub Repo</a>
                                <br/>
                                <a  
                                    href={item.live} 
                                    className="clink"
                                    target='_blank'
                                    rel = 'noreferrer noopener'
                                >Live Demo</a>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
  )
}