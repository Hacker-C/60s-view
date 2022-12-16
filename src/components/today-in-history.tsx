import { useEffect, useState } from 'react'
import historyData from '@/mock/history.json'

interface HistoryType {
  year: string
  title: string
  desc: string
  link: string
}

function TodayInHistory({ theme }: { theme: string }) {
  const [historyList, setHistoryList] = useState<HistoryType[]>([])
  useEffect(() => {
    fetch(import.meta.env.VITE_API_HISTORY)
      .then(data => data.json())
      .then((res) => {
        const { data } = res
        setHistoryList(data.reverse())
      }).catch((e) => {
        // 请求失败，使用 mock 数据
        setHistoryList(historyData.data.reverse())
        console.log(e)
      })
  }, [])
  return (
    <div my-3 font='song bold'>
      <h1 style={{ color: theme }}><i>「历史上的今天」</i></h1>
      <ul text-sm mt-2>
        { historyList.map((item) => {
          return (
            <li key={item.title} className='leading-6'>
              <a href={item.link} target="_blank">
                <span inline-block w-8 text-right font-sans><i>{item.year}</i></span>
                <span mx-1>·</span>
                <span>{item.title}</span>
              </a>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default TodayInHistory
