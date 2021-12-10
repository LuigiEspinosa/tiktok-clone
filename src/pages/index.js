import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));

function Index({ posts }) {
  return (
    <Layout>
      <Feed posts={posts}></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export function getStaticProps() {
  const data = [{ videoUrl: 'https://www.tiktok.com/@minasbulldog/video/6987766561717243142' }];
  
  return {
    props: {
      posts: JSON.parse(JSON.stringify(data)),
    },
  };
}

export default Index;
