import st from 'styles/components/Projects.module.scss'

import {AppContext} from 'lib/context/app';
import SliderContext from 'lib/context/SliderContext';
import { useContext } from 'react';
import { IProject } from 'lib/api/IStore';


export default function  Projects () {
  const [appStore] = useContext(AppContext);
  const [section] = useContext(SliderContext);
  const isActive = section === 'Projects' || section === '';

  return (
    <div className={`${st.Projects} ${isActive ? st.activSection : ''}`} id="Projects">
      <h2>Проекты</h2>
      <div className={st.wrapper}>
        {/* <div className={st.leftSide}>
          <div className={st.particle}>
            <img src="./imgs/Islang.png"/>
          </div>
        </div> */}

        <div className={st.rightSide}>
          {/* <div className={st.fitler}></div> */}
          <div className={st.container}>
            {
              appStore.projects.map((props) => {
                return <Project key={props.title+props.img} {...props}/>
              })
            }
          </div>
        </div>
      </div>
      
    </div>
  )
}


function Project (props: IProject) {
  return (
    <div className={st.Project}>
      <div className={st.panel}>
        <div className={st.wrapper}>
          <button className={st.github}>
            <a href={props.git} target={"_blank"}>гитхаб</a>
          </button>
          <button className={st.website}>
            <a href={props.website} target={"_blank"}>сайт</a>
          </button>
        </div>
        {props.aboutProject &&  <button className={st.info}>о проекте</button>}
      </div>
      <div className={st.background}>
        <img src={props.img}/> 
      </div>
    </div>
  )
}

