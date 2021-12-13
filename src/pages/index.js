import dynamic from 'next/dynamic';
import useScript from '../hooks/useScript'

import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));

function Index({ posts }) {
  useScript('https://www.tiktok.com/embed.js');

  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export function getStaticProps() {
  const data = [];
  const postN = 10;

  for (let i = 0; i < postN; i++) {
    data.push(
      { videoUrl: 'https://www.tiktok.com/@minasbulldog/video/6987766561717243142' },
      { videoUrl: 'https://www.tiktok.com/@minasbulldog/video/7041185085512486150' },
      { videoUrl: 'https://www.tiktok.com/@minasbulldog/video/7041049202079567110' },
      { videoUrl: 'https://www.tiktok.com/@minasbulldog/video/7040232641156631813' }
    )
  }
  
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Index;
