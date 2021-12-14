import dynamic from 'next/dynamic';
import { getVideoMeta } from 'tiktok-scraper';

import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));

function Home({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export async function getStaticProps() {
  const videoMeta = await getVideoMeta('https://www.tiktok.com/@minasbulldog/video/6987766561717243142');

  return { 
    props: {
      posts: [videoMeta.collector[0]]
    }
  }

}

export default Home;