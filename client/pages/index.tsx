import React from 'react'

import MainLayout from 'components/MainLayout'
import Projects from 'components/Projects'

export default function Home() {
  return (
    <MainLayout title={"Home"}>
       <Projects/>
    </MainLayout>
  )
}
