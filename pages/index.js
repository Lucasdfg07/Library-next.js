import "bootstrap/dist/css/bootstrap.css";

import Head from 'next/head';
import HomePage from './home';
import Header from '../components/shared/Header';

export default function Home() {
  return (
    <div className="body">
      <Head>
        <title>Livraria Em NextJS</title>
      </Head>

      <Header />
      
      <HomePage />
    </div>
  )
}