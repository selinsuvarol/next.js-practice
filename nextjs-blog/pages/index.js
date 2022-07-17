import Head from 'next/head'
import Navbar from '../comps/Navbar.jsx';

export default function Home() {
  return (
    <div className=" bg-cyan-300 w-screen border-red-600 border">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className='h-screen bg-yellow-300'>
      <h1 className="text-3xl underline">
        You're on homepage right now. 
      </h1>
      </main>
    </div>
  )
}
