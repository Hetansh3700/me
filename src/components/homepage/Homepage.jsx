import React from 'react';
import "./home.css";
const Homepage = () => {
    return ( 
        <>
        <div className="homepage">
            <div className="about-me">
                <h2>About me:</h2>
                <br />
                <p>
                    Welcome to my website! My name is Hetansh Patel, an international student from India.
                    I am currently pursuing my bachelor's degree in Computer science from Georgia State University.
                    Currently, I am looking for my first professional experience in field of CS. I made this website
                    to share some insight about myself and the projects I have worked on. As an international student I will
                    require sponsorship to work in the US.
                </p>
           </div>
           {/* <div className="quote">
               <h2>Quote of the day!</h2>
               <p>
                   Code is like humor. If you have to explain it, it's bad.
               </p>
           </div> */}
        </div>
        </>
     );
}
export default Homepage;