import useSWR from 'swr'
import axios from 'axios'

import {
  Container,
  PersonContainer,
  Avatar,
  Info,
  Author,
  Description
} from './styles'

const fetcher = async (path) => {
  return await axios.get(path).then(res => res.data)
}

const CardHeader = () => {
  const { data, error } = useSWR('/api/scraper', fetcher)

  if (error) return <p> Failed to load </p>

  function createTime(date) {
    const dateObj = new Date(date * 1000)
    const month = dateObj.getUTCMonth() + 1
    const day = dateObj.getUTCDate()
    return `${month}-${day}`
  }

  return (
    <Container>
      <PersonContainer>
        <Avatar src={data?.authorMeta?.avatar} />
        <Info>
          <Author>
            {data?.authorMeta?.name}
            <span> 
              {data?.authorMeta?.nickName} &bull; {createTime(data?.createTime)}
            </span>
          </Author>
          <Description>
            {data?.text}
          </Description>
        </Info>
      </PersonContainer>
    </Container>
  )
}

export default CardHeader;
