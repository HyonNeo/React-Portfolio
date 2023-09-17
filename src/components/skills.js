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

import style from './styles/skills.css';

export default function Skills() {
  return (
    <section id="skills" className="main special">
      <header className="major">
        <h2>Skills</h2>
      </header>
      <ul className={style.skills}>
        <li className={style.style1}>
          <span>
            <SiHtml5 />
          </span>
          <strong>HTML5</strong>
        </li>
        <li className={style.style2}>
          <span>
            <SiCss3 />
          </span>
          <strong>CSS3</strong>
        </li>
        <li className={style.style3}>
          <span>
            <SiJavascript />
          </span>
          <strong>JavaScript</strong>
        </li>
        <li className={style.style4}>
          <span>
            <SiGit />
          </span>
          <strong>Git</strong>
        </li>
        <li className={style.style5}>
          <span>
            <SiWebpack />
          </span>
          <strong>Webpack</strong>
        </li>
      </ul>
      <ul className={style.skills}>
        <li className={style.style5}>
          <span>
            <SiReact />
          </span>
          <strong>React</strong>
        </li>
        <li className={style.style4}>
          <span>
            <FaNodeJs />
          </span>
          <strong>Express.js</strong>
        </li>
        <li className={style.style3}>
          <span>
            <FaNodeJs />
          </span>
          <strong>Node.js</strong>
        </li>
        <li className={style.style2}>
          <span>
            <SiMongodb />
          </span>
          <strong>MongoDB</strong>
        </li>
        <li className={style.style1}>
          <span>
            <SiMysql />
          </span>
          <strong>MYSQL</strong>
        </li>
      </ul>
    </section>
  );
}