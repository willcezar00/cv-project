import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Card from './Card/Card.js';
import AccentureLogo from './images/Accenture-logo.png';
import eWolrdLogo from './images/eWorld-logo.png';
import squadraLogo from './images/squadra-logo.png';
function App() {
  return (

    <div className="App">
      <div className="navbar" id="navbar">
        <div className="navigators">
          <a >Contact</a>
          <a >About</a>
          <a >Experience</a>
          <a className="active"> Home</a>
        </div>
      </div>

      <section id="home">
        <div className="homeImage">
          <div className="centered">
            <span> Hello, I'm <b> William Cezar </b> </span>
            <br />
            <br />
            <span> I'm a full-stack Developer</span>
          </div>

          <div className="bottom">
            <button>Know more about me  <FontAwesomeIcon icon="arrowDown" /> </button>
          </div>

        </div>
      </section>

      <section id="about">
        <div className="card-wrapper">
          <Card name="Grupo EWorld" logo={eWolrdLogo}></Card>
          <Card name="Squadra Tecnologia"  logo={squadraLogo} ></Card>
          <Card name="Accenture" logo={AccentureLogo}></Card>
        </div>
      </section>

    </div>
  );
}

export default App;
