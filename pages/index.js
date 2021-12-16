import dynamic from 'next/dynamic'
import Head from 'next/head'
import Layout from '../components/Layout'
import Suggestions from '../components/Suggestions'
const Feed = dynamic(() => import('../components/Feed'))

export default function Home() {
  return (
    <div>
      <Head>
        <title>TikTok Clone Prototype</title>
        <meta name="description" content="TikTok Clone Prototype made with Express + NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <Feed />
        <Suggestions />
      </Layout>
    </div>
  )
}
