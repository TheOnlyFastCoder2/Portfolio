import React, { useEffect, useState } from 'react'
import SliderContext from 'lib/context/SliderContext';

import MainLayout from 'components/MainLayout'

import st from 'styles/Home.module.scss';
import Logo from 'lib/icons/Logo';
import Nav from 'components/Nav';

import Projects from 'components/Projects';
import AboutMe from 'components/AboutMe';



export default function Home() {
  const hook = useState('');
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive((hook[0] && hook[0] !== 'Header'))
  },[hook[0]])

  return (
    <SliderContext.Provider value={hook}>
      <MainLayout title={"Home"} className={st.Home}>
        <div className={`${st.container} ${isActive ? st.scrollToMain : ''}`}>
          <header id='Header'>
            <img className={st.preview} src="./imgs/preview.png"/>
            <div className={st.wrapper}>
              <div className={st.text}>
                <h1>Привет</h1>
                <p>Простота — залог надежности.</p>
              </div>

              <div className={st.wrapper}>
                <Logo/>
                <div className={st.buttons}>
                  <button onClick={() => hook[1]('Projects')}>Проекты</button>
                  <button onClick={() => hook[1]('AboutMe')}>О себе</button>
                </div>
              </div>
            </div>
          </header>
          <main id={'main'}>
            <Nav/>
            <div className={st.inner}>
              <Projects/>
              <AboutMe/>
            </div>
          </main>
        </div>
      </MainLayout>
    </SliderContext.Provider>
  )
}
