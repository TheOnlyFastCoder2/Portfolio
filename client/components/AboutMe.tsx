import st from 'styles/components/AboutMe.module.scss'

import SliderContext from 'lib/context/SliderContext';
import { useContext } from 'react';

import Discord from 'lib/icons/Discord';
import Telegram from 'lib/icons/Telegram';
import VK from 'lib/icons/VK';

const icons = [
  ["./imgs/icons/html.svg","html"],
  ["./imgs/icons/css.svg","css"],
  ["./imgs/icons/sass.svg","sass/scss"],
  ["./imgs/icons/js.svg","Javascript"],
  ["./imgs/icons/nodejs.svg","nodejs"],
  ["./imgs/icons/ts.svg", "typescript"],
  ["./imgs/icons/react.svg", "React"],
  ["./imgs/icons/Redux.svg", "redux/toolkit"],
  ["./imgs/icons/nextjs.svg", "NEXTJS"],
  ["./imgs/icons/Threejs.svg", "Threejs"],
  ["./imgs/icons/Github.svg", "GITHUB"],
  ["./imgs/icons/git.svg", "git"],
]

export default function () {
  const [section] = useContext(SliderContext);
  const isActive = section === 'AboutMe';

  return (
    <div className={`${st.AboutMe} ${isActive ? st.activSection : ''}`} id="AboutMe">
      <h2>О себе</h2>
      <div className={st.wrapper}>
        <div className={st.leftSide}>
          <Container head="Навыки">
            <div className={st.skills}>
              {icons.map(([icon, title]) => {
                return (
                  <div key={icon} className={st.skill}>
                    <div className={st.icon}>
                      <img src={icon}/>
                    </div>
                    <span>{title}</span>
                  </div>
                )
              })}
            </div>
          </Container>
          <div className={st.networks}>
            <a href="https://discord.com/channels/1068950798094045245" target={"_blank"}><Discord/></a>
            <a href="https://t.me/qtpy0101" target={"_blank"}><Telegram/></a>
            <a href="https://vk.com/po_sasha" target={"_blank"}><VK/></a>
          </div>
        </div>
        <div className={st.rightSide}>
          <Container head="Сфера деятельности">
            <p>Я разработчик и ux/ui дизайнер web-сайтов, использую только современные технологии. На данный момент я ищу подработку по специальности, в зависимости от загруженности могу выполнять разные задачи. Также я люблю работать с новыми технологиями, поэтому изучаю новые и использую их в своей работе. Уделяю большое внимание юзабилити. Ищу работу по совместительству или по договору.</p>
          </Container>
          <Container  head="Личность">
            <p>Всегда стремлюсь доделать работу, независимо от поставленной задачи подхожу к ней кропотливо и усердно. Стараюсь не допускать ошибок в работе, поэтому тщательно все проверяю. При необходимости всегда ищу необходимую информацию для выполнения задания. Очень редко делаю что то просто ради того чтобы сделать. Люблю когда люди ценят меня как специалиста. Особенно если это касается чего то творческого, где нужно много думать , творить и фантазировать. Я могу часами сидеть и думать над тем как можно сделать что то интересное. Могу долго выбирать материалы, искать идеи, придумывать.</p>
          </Container>
        </div>
      </div>
    </div>
  )
}

interface Props {
  head: string,
  class?: string,
  children: React.ReactNode
}
function Container ({head, children}: Props) {
  return (
    <div className={`${st.Container}`}>
      <h3>{head}</h3>
      <div className={st.wrapper}>
        {children}
      </div>
    </div>
  )
}