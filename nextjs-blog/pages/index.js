import Head from 'next/head'
import Navbar from '../comps/Navbar';

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main>
      <h1 className="text-3xl font-bold underline">
        Hello world!
      </h1>
      </main>
    </div>
  )
}
