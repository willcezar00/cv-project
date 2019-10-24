import React from 'react';
import './App.css';
import Card from './Card/Card.js';
import AccentureLogo from './images/Accenture-logo.png';
import eWolrdLogo from './images/eWorld-logo.png';
import squadraLogo from './images/squadra-logo.png';


function App() {
  let eWorldTitle = "Jun 2016 - Feb 2018";
  let eWorldContent = "EWorld was a small startup that a joined in";
  return (
    <div className="App">
      <header className="main-header">
        <nav className="main-nav">
          <ul className="main-nav__items">
            <li className="main-nav__item">
              <a href="#home" >Home</a>
            </li>
            <li className="main-nav__item">
              <a href="#about">About</a>
            </li>
            <li className="main-nav__item">
              <a href="#experience">Experience</a>
            </li>
            <li className="main-nav__item">
              <a href="#skills">Skills</a>
            </li>
            <li className="main-nav__item">
              <a href="#experience">Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <section id="home">
        <div className="home-image">
          <div className="main-text-centered">
            <span> Hello, I'm <b> William Cezar </b> </span>
            <br />
            <br />
            <span> I'm a full-stack developer.</span>
          </div>

          <div className="bottom">
            <a href="#about" className="btn-about-me">Know more about me</a>
          </div>

        </div>
      </section>


      <section id="about">
        <div className="text-tittle">
          <span>My <b>Journey </b>  so far...</span>
        </div>

      </section>

      <section id="experience">
        <div className="text-tittle">
          <span>Those are the enterprises that I <b>proudly </b>  contributed with</span>
        </div>
        <div className="cards-wrapper">
          <Card name="Grupo EWorld" logo={eWolrdLogo}></Card>
          <Card name="Squadra Tecnologia" logo={squadraLogo} ></Card>
          <Card name="Accenture" logo={AccentureLogo}></Card>
        </div>
      </section>

      <section id="skills" >
        <div className="text-tittle">
          <span>My <b>Skills </b> as developer</span>
        </div>
      </section>

    </div>
  );
}

export default App;
