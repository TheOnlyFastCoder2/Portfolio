import React from 'react'
import st from 'styles/Home.module.scss'

import MainLayout from 'components/MainLayout'
import AboutMe from 'components/AboutMe'
import Projects from 'components/Projects'

export default function Home() {

  return (
    <MainLayout title={"Home"}>
      <div className={st.Home}>
        <AboutMe/>
        <Projects/>
      </div>
    </MainLayout>
  )
}