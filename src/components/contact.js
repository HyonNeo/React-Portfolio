import React from 'react';

import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoDocument } from 'react-icons/io5';


export default function Contact() {
  return (
    <section id="contact" className="main special">
      <header className="major">
        <h2>Contact</h2>
        <p>E-mail: Facundoega@gmail.com</p>
      </header>
      <footer style={{display:"flex", justifyContent:"center"}}>
        <ul >
          <li style={{marginLeft:"-300px",textAlign:"center"}}>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/HyonNeo"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/facundo-garay-39b586278/"
            >
              <FaLinkedin style={{textAlign:"center"}}/>
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={"https://stackoverflow.com/users/22581017/hyonneo"} style={{marginLeft:"300px",textAlign:"center"}}>
              <IoDocument />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}