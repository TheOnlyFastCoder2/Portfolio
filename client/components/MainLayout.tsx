import React from 'react'
import Head from 'next/head'
import Nav from './Nav'

export default function ({children, title}) {
  return (
    <div id="root">
      <Head>
          <title>QtPy | {title}</title>
          <meta name="keywords" content="HTML|CSS|JS|БЫСТРО И ДЕШЕВО" />
          <meta name="discription" content="создаю сайты под ключ, быстро и дешево" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta charSet="UTF-8" />
      </Head>
      <Nav/>
      <main>
        {children}
      </main>
    </div>
  )
}