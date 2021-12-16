import useSWR from "swr"
import axios from "axios"
import Image from 'next/image'

import {
  Actions,
  Action
} from './styles';

const fetcher = async (path) => {
  return await axios.get(path).then(res => res.data)
}

const myLoader = ({ src, width, quality }) => {
  return `https://tiktok-clone-ch9nw.ondigitalocean.app//${src}?w=${width}&q=${quality || 75}`
}

const Social = () => {
  const {data, error} = useSWR('/api/scraper', fetcher);

  if (error) return <p>Failed to load</p>

  function formatter(num) {
    const letter = [
      { value: 1, symbol: "" },
      { value: 1e3, symbol: "K" },
      { value: 1e6, symbol: "M" }
    ]
    const rex = /\.0+$|(\.[0-9]*[1-9])0+$/
    let item = letter.slice().reverse().find((item) => num >= item.value)
    return item ? (num / item.value).toFixed(1).replace(rex, "$1") + item.symbol : "0"
  }

  return (
    <Actions>
      <Action>
        <Image loader={myLoader} src='/images/heartIcon.svg' alt="" width={32} height={32} />
        <a>{formatter(data?.diggCount)}</a>
      </Action>
      <Action>
        <Image loader={myLoader} src='/images/bubbleIcon.svg' alt="" width={32} height={32} />
        <a>{formatter(data?.commentCount)}</a>
      </Action>
      <Action>
        <Image loader={myLoader} src='/images/arrowIcon.svg' alt="" width={32} height={32} />
        <a>{formatter(data?.shareCount)}</a>
      </Action>
    </Actions>
  )
}

export default Social;
