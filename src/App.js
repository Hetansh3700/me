import React from 'react';
import Homepage from "./components/homepage/Homepage";
import "./App.css";
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Navbar from './components/navigator/Navigation';
import Footer from './components/footer/footer';
import Projects from './components/projects/Projects';
import Skills from './components/skills/Skills';
function App() {
  return (
        <div className="App">
        <div className="content">
         <BrowserRouter>
         <Navbar/>
          <Routes>
            <Route exact path='/me' element = {<Homepage/>}/>
            <Route exact path='/projects' element = {<Projects/>}/>
            <Route exact path ='/skills' element = {<Skills/>}/>
          </Routes>
         </BrowserRouter>
         <Footer/>
        </div>
      </div>
  );
}

export default App;
