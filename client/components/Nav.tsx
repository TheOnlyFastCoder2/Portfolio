import React, { useEffect, useState } from 'react';

import Link from "next/link";
import st from 'styles/components/Nav.module.scss';
import PLogo from 'public/imgs/logo.png';

export default function () {

  const [mode, setMode] = useState<boolean>(false);

  function toggleMenu () {
    setMode(mode ? false : true);
  }



  return (
    <div className={`${st.Nav}`}>
      <img src={PLogo.src}/>
        <ul className={`${st.menu} ${mode ? st.active : "" }`}>
        <li><Link href={'/'}>Дом</Link></li>
        <li><Link href={'/About'}>О себеho</Link></li>
      </ul>
      <button onClick={toggleMenu}><hr/><hr/><hr/></button>
    </div>
)
}