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
              <p>
                  Привет тебя заинтересовал сайт ? 
                  Хочешь посмотреть какие проекты создаю ? 
                  Или же ты работодатель ? 
                  <strong> Tо ты по адресу !!!!</strong>
                </p>
            </div>
          </div>

          <Notification>
            Внимание находится в разработке и могут быть косяки :)
          </Notification>
        </div>
    </MainLayout>
  )
}