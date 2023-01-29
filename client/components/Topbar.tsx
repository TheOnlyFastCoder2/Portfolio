import st from 'styles/components/Topbar.module.scss'
import SVGLogo from 'lib/icons/Logo'

export default function () {
  return (
   <div className={st.Topbar}>
      <SVGLogo/>
   </div>
  )
}
