import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));
import useScript from '../hooks/useScript';

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
  const postN = 40;

  for (let i = 0; i < postN; i++) {
    data.push({ videoUrl: 'https://www.tiktok.com/@minasbulldog/video/6987766561717243142' })
  }
  
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Index;
