import React from 'react';
import st from 'styles/About.module.scss';

import MainLayout from 'components/MainLayout';



export default function () {
  return (
    <MainLayout title={"About"}>
      <div className={st.About}>
        <h1>Александр</h1>
        
        <div className={st.additionalinfo}>
          <div className={`${st.info} ${st.education}`}>
            <h3>Образование</h3>
            <div className={st.container}>
              <div className={st.test}>
                <h3>Сент 2019 – Июнь 2023</h3>
                <h4>Ижевск</h4>
              </div>
              <div className={st.test}>
                <h3>ИПЭК колледж</h3>
                <h4>Теплотехник</h4>
              </div>
            </div>
          </div>

          <div className={`${st.info} ${st.skills}`}>
            <h3>Скилы</h3>
            <div className={st.container}>
              <span>HTML</span>
              <span>SCSS/CSS</span>
              <span>Javascript</span>
              <span>TypeScript</span>
              <span>React</span>
              <span>NextJS</span>
              <span>Redux</span>
              <span>JQuery</span>
              <span>Python</span>
            </div>
          </div>

          <div className={`${st.info} ${st.contacts}`}>
            <h3>Контакты</h3>
            <div className={st.container}>
              <div className={st.test}>
                <h3>телефон</h3>
                <h4>7(996)-297-99-58</h4>
              </div>
              <div className={st.test}>
                <h3>telegram</h3>
                <h4>@qtpy0101</h4>
              </div>
            </div>
          </div>
        </div>

        <div className={st.container}>
          <div className={`${st.info} ${st.education}`}>
            <h3>О себе</h3>
            <p>
              Я Front-End разработчик в основном создаю мини приложения с помощью react и не собираюсь на этом останавливаться,
              сейчас серьезно увлекаюсь созданием интуитивно понятного, динамичного пользовательского интерфейса.
            </p>
          </div>
        </div>
        
      </div>
    </MainLayout>
  )
}