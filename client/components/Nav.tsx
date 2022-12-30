import React, { useEffect, useState } from 'react';

import Link from "next/link";
import st from 'styles/components/Nav.module.scss';
import PLogo from 'public/imgs/logo.png';

export default function () {

  const [mode, setMode] = useState<boolean>(false);
  const [indButton, setIndButton] = useState<number>(0);

  function toggleMenu () {
    setMode(mode ? false : true);
  }

  function setButton(ind: number) {
    setIndButton(ind);
  }

  return (
    <div className={`${st.Nav}`}>
      <img src={PLogo.src}/>
        <ul className={`${st.menu} ${mode ? st.active : "" }`}>
        {
          [
            {name:"главная", link: '/'},
            {name:"О себе", link: '/About'}

          ].map ( ({name,link}, ind) => {
            return (
              <li 
                key={ind}
        
                onClick={() => setButton(ind)}>
                <Link href={link}>{name}</Link>
              </li>
            )
          }) 
        }
      </ul>
      <button onClick={toggleMenu}><hr/><hr/><hr/></button>
    </div>
)
}