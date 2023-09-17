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
      <footer >
        <ul >
          <li>
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
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a target="_blank" rel="noreferrer" href={{}}>
              <IoDocument />
            </a>
          </li>
        </ul>
      </footer>
    </section>
  );
}