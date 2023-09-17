import React from 'react';
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiGit,
  SiWebpack,
  SiReact,
  SiMongodb,
  SiMysql,
} from 'react-icons/si';
import { FaNodeJs } from 'react-icons/fa';



export default function Skills() {
  return (
    <section id="skills" className="main special">
      <header className="major">
        <h2>Skills</h2>
      </header>
      <ul >
        <li >
          <span>
            <SiHtml5 />
          </span>
          <strong>HTML5</strong>
        </li>
        <li >
          <span>
            <SiCss3 />
          </span>
          <strong>CSS3</strong>
        </li>
        <li>
          <span>
            <SiJavascript />
          </span>
          <strong>JavaScript</strong>
        </li>
        <li >
          <span>
            <SiGit />
          </span>
          <strong>Git</strong>
        </li>
        <li >
          <span>
            <SiWebpack />
          </span>
          <strong>Webpack</strong>
        </li>
      </ul>
      <ul >
        <li >
          <span>
            <SiReact />
          </span>
          <strong>React</strong>
        </li>
        <li >
          <span>
            <FaNodeJs />
          </span>
          <strong>Express.js</strong>
        </li>
        <li >
          <span>
            <FaNodeJs />
          </span>
          <strong>Node.js</strong>
        </li>
        <li >
          <span>
            <SiMongodb />
          </span>
          <strong>MongoDB</strong>
        </li>
        <li >
          <span>
            <SiMysql />
          </span>
          <strong>MYSQL</strong>
        </li>
      </ul>
    </section>
  );
}