import dynamic from 'next/dynamic';

import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));

function Home() {
  return (
    <Layout>
      <Feed />
      <Suggestions />
    </Layout>
  );
}

export default Home;