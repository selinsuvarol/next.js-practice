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
      <main>
      <h1 className="text-3xl bg-yellow-300  underline">
        Main Content Here 
      </h1>
      </main>
    </div>
  )
}
