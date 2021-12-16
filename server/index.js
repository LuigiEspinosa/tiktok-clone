const _ = require('underscore');
const express = require("express")
const axios = require('axios');
const next = require("next")

const PORT = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const getVideo = async (url) => {
  return new Promise((resolve, reject) => {
      axios({
          url,
          headers: {
              'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
              'Referer': 'https://www.tiktok.com/',
              'Cookie': 'tt_webid_v2=BOB',
          },
          withCredentials: true,
      }).then((response) => {
          const search = 'og:video:secure_url" content="';
          const start = response.data.indexOf(search) + search.length;
          const end = response.data.indexOf('"/>', start );
          const src = response.data.substring(start, end);
          resolve(_.unescape(src));
      }).catch((error) => {
          reject(error);
      });
  });
};

app
  .prepare()
  .then(() => {
    const server = express();

    server.get('/video-feed/*', async (req, res) => { 
      const url = 'https://www.tiktok.com' + req.path.replace('/video-feed', '');
      const src = await getVideo(url);
  
      res.set('Content-Type', 'video/mp4');
      axios({
          url: src,
          headers: {
              'User-Agent': 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1; SV1; .NET CLR 1.1.4322)',
              'Referer': 'https://www.tiktok.com/',
          },
          withCredentials: true,
          responseType: 'stream'
      }).then((r) => r.data.pipe(res));
    });

    server.get('*', (req, res) => {
      return handle(req, res)
    })

    server.listen(PORT, err => {
      if (err) throw err
      console.log(`> Ready on ${PORT}`)
    })
  })
  .catch(ex => {
    console.log(ex.stack)
    process.exit(1)
  })
