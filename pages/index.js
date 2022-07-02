import Head from 'next/head';
import AboutHome from '../components/AboutHome';
import StackCard from '../components/Cards/StackCard.js';

export default function Home() {
  return (
    <div className="space-y-14 lg:space-y-24">
      <Head>
        <title>Lucas Passini - Homepage</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <main className="max-w-4xl mx-auto mt-16 antialiased">
        <AboutHome />
        <StackCard />
      </main>
    </div>
  );
}
