import React from 'react';

import style from './styles/about.css';

export default function About() {
  return (
    <section id="about" className="main" >
      <div className={style.spotlight}>
        <div className={style.content}>
          <header className="major">
            <h2 style={{marginLeft:"520px"}}>About me</h2>
          </header>
          <p>
            Im a student of full stack web development that is looking for a first professional experience in this area.Im very interested to be able to learn and grow in this sector. I like a lot the process of creating things and learning new things
          </p>
        </div>
      </div>
    </section>
  );
}