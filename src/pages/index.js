import dynamic from 'next/dynamic';
const TikTokScraper = require('tiktok-scraper');

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

const data = [
  { videoUrl: 'https://www.tiktok.com/@minasbulldog/video/6987766561717243142' }
]

export async function getServerSideProps() {
  const headers = {
    "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.80 Safari/537.36",
    "referer": "https://www.tiktok.com/",
    "cookie": "ttwid=1|tRZY98IpvYfhjM-VRDQHgX3mgPcfWwWxylxnwwC7fFk|0|9af2c384c7d2b4e10ec0497fce797af996c72dd3868ec040595de36132c01ad0; tt_csrf_token=yTBev7X3KLp7rJHrqGRxSjD2"
  }

  const videoMeta = await TikTokScraper.getVideoMeta(data[0].videoUrl, { headers });

  return { 
    props: {
      posts: [videoMeta.collector[0]]
    }
  }

}

export default Index;
