import st from 'styles/components/AboutMe.module.scss'
import SVGDiscord from 'lib/icons/Discord'
import SVGTelegram from 'lib/icons/Telegram'
import SVGVK from 'lib/icons/VK'

export default function () {
  return (
        
    <div className={st.About}>
    <div className={`${st.card} ${st.skills}`}>
      <h3>Скилы</h3>
      <div className={st.container}>
        <span>HTML</span><span>CSS/CSS</span>
        <span>NEXTJS</span><span>JavasScript</span>
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

    <div className={`${st.card} ${st.networks}`}>
      <div className={st.container}>
        <a href="https://discord.com/channels/1068950798094045245" target={"_blank"}><SVGDiscord/></a>
        <a href="https://t.me/qtpy0101" target={"_blank"}><SVGTelegram /></a>
        <a href="https://vk.com/po_sasha" target={"_blank"}><SVGVK/></a>
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
  </div>
  )
}