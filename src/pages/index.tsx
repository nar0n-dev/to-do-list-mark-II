import Head from 'next/head'
import { Header } from '../components/Header'
import { TaskCard } from '../components/TaskCard'
import '../services/firebase';

export default function Home() {
  return (
    <>
      <Head>
        <title>To do | nar0n</title>
      </Head>
      <Header />
      <TaskCard />
    </>
  )
}
