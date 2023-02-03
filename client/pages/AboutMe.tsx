import React from 'react'

import st from 'styles/AboutMe.module.scss'
import SVGDiscord from 'lib/icons/Discord'
import SVGTelegram from 'lib/icons/Telegram'
import SVGVK from 'lib/icons/VK'


import api from 'lib/api';

import MainLayout from 'components/MainLayout'

import Link from 'next/link'
import Chat from 'components/Chat'

export default function AboutMe() {
  console.log(api.getReviews())
  return (
    <MainLayout title={"AboutMe"} className={"AboutMe"}>
      <div className={st.AboutMe}>
        <div className={`${st.card} ${st.skills}`}>
          <h3>Скилы</h3>
          <div className={st.container}>
            <span>HTML</span><span>SCSS/CSS</span>
            <span>NEXTJS</span><span>JavaScript</span>
            <span>TypeScript</span> <span>Redux/Toolkit</span>
          </div>
        </div>

        <div className={`${st.card} ${st.education}`}>
          <h3>Образование</h3>
          <div className={st.container}>
            <div>
              <h4>Сент 2019 – Июнь 2023</h4>
              <p>Ижевск</p>
            </div>
            <div>
              <h4>ИПЭК колледж</h4>
              <p>Теплотехник</p>
            </div>
          </div>
        </div>

        <div className={`${st.card} ${st.aboutMe}`}>
          <h3>О себе</h3>
          <div className={st.container}>
            <p>
              Я веб-разработчик, который глубоко любит и понимает эту область. 
              У меня отличные навыки кодирования и знаю, как создавать веб-сайты с помощью разных технологий.
              Программировать и создавать веб-сайты - это мое главное хобби, с помщью которого стремлюсь зарабатывать на жизнь. 
              Я знаю, как создавать веб-приложения для личного использования, а также для бизнеса , 
              поддерживать их по мере развития моей карьеры. 
            </p>
          </div>
        </div>

        <div className={`${st.card} ${st.networks}`}>
          <div className={st.container}>
            <Link href="https://discord.com/channels/1068950798094045245" target={"_blank"}><SVGDiscord/></Link>
            <Link href="https://t.me/qtpy0101" target={"_blank"}><SVGTelegram /></Link>
            <Link href="https://vk.com/po_sasha" target={"_blank"}><SVGVK/></Link>
          </div>
        </div>
      </div>
      {/* <Chat/> */}
    </MainLayout>
  )
}


AboutMe.getInitialProps  = async () => {
  const store = await api.getReviews();
  console.log(2)
  // console.log(store)
  return {  }
}
