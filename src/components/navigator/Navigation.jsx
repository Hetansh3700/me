import React from 'react';
import './navbar.css';
import {Link} from 'react-router-dom'

const Navbar= () => {
    return ( 
        <div className="heading">
            <h1>HETANSH PATEL</h1>
            <div className="navigation">
                <Link to="/">Home</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/skills">Skills</Link>
                {/* <Link to="/resume">Résumé</Link> */}
            </div>
        </div>
     );
}
 
export default Navbar;