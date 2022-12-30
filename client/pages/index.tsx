import React from 'react';
import st from 'styles/Home.module.scss';

import MainLayout from 'components/MainLayout';
import Notification from 'components/Notification';


export default function Home() {


  return (
    <MainLayout title={"Home"}>
        <div className={`${st.Home}`}>
          
          <div className={`${st.container} box_blur900`}>
            <h1>Frontend разработчик </h1>
            <div className={`${st.container} box_blur800`}>
              <p>Качественный, чистый, логичный код, выполненный вручную с использованием нужных технологий;</p>
            </div>
          </div>

          <Notification>
            Внимание сайт еще не стабилен
            и еще находится в разработке :)
          </Notification>
        </div>
    </MainLayout>
  )
}