import Head from 'next/head'
import { FC } from 'react'

const Layout:FC = ({ children }) => {

  return (
    <>
    <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"></link>
        <title>When In Rome</title>
      </Head>
      <main>{children}</main>
    </>
  )
}

export default Layout