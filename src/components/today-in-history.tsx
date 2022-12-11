import { useEffect, useState } from 'react'

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
        console.log(e)
      })
  }, [])
  return (
    <div my-3 font='song bold'>
      <h1 style={{ color: theme }}><i>「历史上的今天」</i></h1>
      <ul text-sm mt-2>
        { historyList.map((item) => {
          return (
            <li key={item.title} className='leading-7'>
              <span mr-2 font-sans><i>{item.year}</i></span>
               ·
              <span ml-2>{item.title}</span>
            </li>
          )
        }) }
      </ul>
    </div>
  )
}

export default TodayInHistory
