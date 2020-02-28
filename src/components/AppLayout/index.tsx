import type { NextPage } from 'next'
import Head from 'next/head'

const AppLayout: NextPage = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Presale</title>
        <meta name="description" content="Void-Presale" />
      </Head>
      <main className="">
        {children}
      </main>
    </div>
  )
}

export default AppLayout
