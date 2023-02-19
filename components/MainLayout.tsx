import React from 'react'
import Head from 'next/head'

interface Props {
  title: string,
  children: React.ReactNode,
  className?: string,
}

 function  MainLayout ({children, title, className}: Props) {

  return (
    <div id="root">
      <Head>
          <title>QtPy {title ? "|"+title : ""}</title>
          <meta property="og:image" content="/imgs/preview.png"></meta>
          <meta name="keywords" content="HTML|CSS|JS|БЫСТРО И ДЕШЕВО" />
          <meta name="discription" content="создаю сайты под ключ, быстро и дешево" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="UTF-8" />
      </Head>
      <div className={className}>
        {children}
      </div>
    </div>
  )
}


export default MainLayout;