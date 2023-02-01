import st from 'styles/components/Nav.module.scss'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function () {
  const route = useRouter();

  function isActive(pathName: string): string {
    return route.pathname ===  pathName ? st.active : undefined;
  }

  return (
    <ul className={st.Nav}>
      <Link href={'/'}>
        <li  className={isActive('/')} data-text={"Проекты"}/>
      </Link>
      <Link href={'/AboutMe'}>
        <li className={isActive('/AboutMe')}data-text={"О себе"}/>
      </Link>
    </ul>
  )
}