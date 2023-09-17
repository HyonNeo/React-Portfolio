import React from 'react';

import bookmark from '../assets/images/bookmark.png'
import cocktailbeer from '../assets/images/cocktail-beer.png'


export default function Projects() {
    return (
      <section id="projects" className="main special">
        <header className="major">
          <h2>Projects</h2>
        </header>
        <ul >
          <li>
            <div >
              <img src={bookmark} alt="bookmark" style={{width:"85%"}}/>
            </div>
            <h3>Bookmark</h3>
            <p>
              Its a application where you can make a review about a book that you readed, after adding that review you are able to edit or remove it
            </p>
            <footer  >
              <ul>
                <li>
                  <a 
                  style={{padding:"10px"}}
                    target="_blank"
                    rel="noreferrer"
                    href="https://www.youtube.com/watch?v=Ttc4wZZy8Wk"
                  >
                    Live Demo
                  </a>
                  <a
                  style={{padding:"10px"}}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/k-pineda/bookmark"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </footer>
          </li>
          <li>
            <div >
              <img src={cocktailbeer} alt="cocktailbeer" style={{width:"85%"}} />
            </div>
            <h3>cocktail & beer</h3>
            <p>
              Its a application where you can try luck and see what alcohol drink you get from a randomizer(Remember that if your minor of 21 you cant use this app).
            </p>
            <footer >
              <ul>
                <li>
                  <a
                  style={{padding:"10px"}}
                    target="_blank"
                    rel="noreferrer"
                    href="https://marksantander.github.io/Cocktail_Beer/"
                  >
                    Live Demo
                  </a>
                  <a
                  style={{padding:"10px"}}
                    target="_blank"
                    rel="noreferrer"
                    href="https://github.com/marksantander/Cocktail_Beer"
                  >
                    Github
                  </a>
                </li>
              </ul>
            </footer>
          </li>
        </ul>
      </section>
    );
  }