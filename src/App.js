import React from "react"
import About from './components/about';
import Skills from './components/skills'
import Projects from "./components/projects";
import './App.css';

export default function App() {
  const [scroll, setScroll] = React.useState(false);


  React.useEffect(() => {
    window.addEventListener('scroll', () => {
      switch (true) {
        case window.innerWidth <= 1280 && window.innerWidth >= 736:
          setScroll(window.scrollY > 337);
          break;
        case window.innerWidth <= 736 && window.innerWidth >= 564:
          setScroll(window.scrollY > 311);
          break;
        case window.innerWidth <= 564 && window.innerWidth >= 480:
          setScroll(window.scrollY > 377);
          break;
        default:
          setScroll(window.scrollY > 477);
          break;
      }
    });
  }, []);

  return (
    <div id="wrapper">
      <header id="header">
        <h1>Facundo Garay</h1>
        <p>Junior Full Stack Web Developer</p>
      </header>

      <nav id="nav" className={scroll ? 'alt' : null}>
        <ul>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contacts</a>
          </li>
        </ul>
      </nav>

      <div id="main">
        <About />
        <Skills /> 
        <Projects/>
       
      </div>

      
    </div>
  );
}
