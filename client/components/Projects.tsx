
import SVGGithub from 'lib/icons/Github'
import SVGWebsite from 'lib/icons/Website'
import st from 'styles/components/Projects.module.scss'
import JSONProjects from 'lib/projects.json';
import Link from 'next/link';


export default function () {
  return (
  <div className={st.Projects}>
    {JSONProjects.map((cardProject,i) => {
      return (
        <div className={st.project}>
          <Link href={cardProject.website} target="_blank">
            <div className={st.main}>
              <img src={cardProject.img} alt="" />
            </div>
          </Link>
          <div className={st.footer}>
            <div className={st.name}>
              <span>{cardProject.title}</span>
            </div>
            <a target="_blank" href={cardProject.git} className={st.network}>
              <span>Github</span>
              <SVGGithub/>
            </a>
            <a target="_blank" href={cardProject.website} className={st.network}>
              <span>Website</span>
              <SVGWebsite/>
            </a>
          </div>
        </div>
      ) 
    })}
    </div>
  )
}
