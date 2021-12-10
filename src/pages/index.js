import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import Suggestions from '../components/Suggestions';
const Feed = dynamic(() => import('../components/Feed'));

function Index() {
  return (
    <Layout>
      <Feed></Feed>
      <Suggestions></Suggestions>
    </Layout>
  );
}

export default Index;
