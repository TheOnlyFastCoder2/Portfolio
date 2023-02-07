import st from 'styles/components/Nav.module.scss'

import SliderContext from 'lib/context/SliderContext';
import { useContext } from 'react';



export default function () {
  const [,setSection] = useContext(SliderContext);

  return (
    <ul className={st.Nav}>
      <li onClick={() => setSection('Header')}>Главная</li>
      <li onClick={() => setSection('Projects')}>Проекты</li>
      <li onClick={() => setSection('AboutMe')}>О себе</li>
    </ul>
  )
}