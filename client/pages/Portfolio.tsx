import React from 'react';
import st from 'styles/Portfolio.module.scss';
import projects from 'lib/projects.json';

import IcongGithub from 'lib/icons/github';
import IcongWebsite from 'lib/icons/website';

import MainLayout from 'components/MainLayout';
import Notification from 'components/Notification';

console.log(projects)
export default function Home() {
  return (
    <MainLayout title={"Portfolio"}>
      <div className={`${st.Portfolio}`}>
          <div className={st.container}>
            {projects.map(({git, website, img}, i) => {

              const name = git.match(/\/\w+\/$/gm)[0].replace(/\//gm, "");

              return (
                <div key={i} className={st.card}>
                  <div className={st.card_boxImg}>
                    <a target="_blank" href={git}><h2>{name}</h2></a>
                    <img src={img}/>
                  </div>
                  <div className={st.card_panel}>
                    <a target="_blank" href={git} title="ссылка на github">
                      <span>github: </span>
                      <IcongGithub/>
                    </a>
                    <a target="_blank" href={website} title="ссылка на сайт">
                      <span>website: </span>
                      <IcongWebsite/>
                    </a>
                  </div>
                </div>
              )
            })}
          </div>
      </div>
    </MainLayout>
  )
}