import dynamic from 'next/dynamic';
import useScript from '../hooks/useScript'

import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));

function Home() {
  useScript('https://www.tiktok.com/embed.js');
  
  return (
    <Layout>
      <Feed />
      <Suggestions />
    </Layout>
  );
}

export default Home;