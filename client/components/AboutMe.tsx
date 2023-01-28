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
        <a href=""><SVGDiscord/></a>
        <a href=""><SVGTelegram /></a>
        <a href=""><SVGVK/></a>
      </div>
    </div>

    <div className={`${st.card} ${st.aboutMe}`}>
      <h3>О себе</h3>
      <div className={st.container}>
        <p>
          На данный момент у меня 2 мини проекта , один  содержит в себе мини игры для тренировки памяти, а 2-рой проект представляет из себя  музыкальную игру для тренировки скорости печати. На сегодняшний день делаю 3 проект для портфолию - сервис для покупки блюд, но на данный момент еще не добавил его на свой сайт:
        </p>
      </div>
    </div>
  </div>
  )
}