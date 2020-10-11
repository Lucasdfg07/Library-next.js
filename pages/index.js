import Head from 'next/head';
import HomePage from './home';


export default function Home() {
  return (
    <div>
      <Head>
        <title>Livraria Em NextJS</title>
      </Head>
      
      <HomePage />
    </div>
  )
}
