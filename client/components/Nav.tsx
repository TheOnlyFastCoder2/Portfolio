import React from 'react'

// import Link from "next/link"
import st from 'styles/components/Nav.module.scss'
import SVGLogo from 'lib/icons/Logo'

export default function () {

  return (
   <div className={st.Nav}>
      <SVGLogo/>

   </div>
  )
}


// <div className={`${st.Nav}`}>
// <img src={PLogo.src}/>
//   <ul className={`${st.menu} ${mode ? st.active : "" }`}>
//   {
//     [
//       {name:"главная", link: '/'},
//       {name:"О себе", link: '/About'},
//       {name:"Портфолио", link: '/Portfolio'}

//     ].map ( ({name,link}, ind) => {
//       return (
//         <li 
//           key={ind}
//           // className={ ind === indButton ? st.active : ""}
//           onClick={() => setButton(ind)}>
//           <Link href={link}>{name}</Link>
//         </li>
//       )
//     }) 
//   }
// </ul>
// <button onClick={toggleMenu}><hr/><hr/><hr/></button>
// </div>