import Head from 'next/head'
import Layout from '../components/Layout'
import Suggestions from '../components/Suggestions'

export default function Home() {
  return (
    <div>
      <Head>
        <title>TikTok Clone Prototype</title>
        <meta name="description" content="TikTok Clone Prototype made with Express + NextJs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <video 
          controls
          width="250"
          height="200"
          muted
        >
          <source src="/video-feed/@minasbulldog/video/7036437186018921734" />
        </video>

        <Suggestions />
      </Layout>
    </div>
  )
}
