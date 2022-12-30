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
              <span>TypeScript</span>
              <span>Javascript</span>
              <span>SCSS/CSS</span>
              <span>Python</span>
              <span>HTML</span>
              <span>JQuery</span>
              <span>React</span>
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
            <p>В основном создаю мини приложения с помощью react через фреймворк Tauri в качестве хобби и не норовился касаться коммерческой разработки. Готов усваивать новые технологии, выходить за рамки своего обычного стека, ответственно относиться к работе, придерживаться различных методов разработки принятых в команде.</p>
          </div>
        </div>
        
      </div>
    </MainLayout>
  )
}