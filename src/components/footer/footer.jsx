import React from 'react';
import github from "../../imgs/icons/Github_white.svg";
import linkedin from "../../imgs/icons/LinkedIN_white.svg";
import gmail from "../../imgs/icons/Gmail_white.svg";
import me from "../../imgs/icons/me.jpeg"
import "./foot.css";

const Footer = () => {
    return ( 
        <div className="footer">
            <img src={me} alt="" className="myphoto" />
            <div className="socialtag">
                <img src= {gmail} alt="" className="socialimg" />
                <a 
                    href="mailto:hetansh2000@gmail.com" 
                    rel='noreferrer noopener' 
                    className="socialLink"
                    target = "_blank">Gmail</a>
            </div>
            <div className="socialtag">
                <img src= {linkedin} alt="" className="socialimg" />
                <a 
                    href="https://www.linkedin.com/in/hetansh-patel-340b171b1/"
                    className="socialLink"
                    rel='noreferrer noopener' 
                    target = "_blank">LinkedIn</a>
            </div>
            <div className="socialtag">
                <img src= {github} alt="" className="socialimg" />
                <a 
                    href="https://github.com/Hetansh3700" 
                    className="socialLink"
                    rel='noreferrer noopener' 
                    target = "_blank">GitHub</a>
            </div>
        </div>
     );
}
 
export default Footer;