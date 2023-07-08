import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { history } from '@/api'
import { ThemeStore } from '@/store'

interface HistoryType {
  year: string
  title: string
  desc: string
  link: string
}

function TodayInHistory() {
  const { theme } = useSnapshot(ThemeStore)
  const [historyList, setHistoryList] = useState<HistoryType[]>([])
  useEffect(() => {
    history()
      .then(data => data.json())
      .then((res) => {
        const { data } = res
        setHistoryList(data.reverse())
      }).catch(() => {
        setHistoryList([])
      })
  }, [])
  return (
    <div my-3 font='song bold'>
      <h1 style={{ color: theme }}><i>「历史上的今天」</i></h1>
    { !historyList.length && <p text-center text-sm text-red-400>数据获取失败，请尝试开启代理</p> }
      <ul text-sm mt-2>
        {historyList.map((item) => {
          return (
            <li key={item.title} className='leading-6'>
              <a href={item.link} target="_blank">
                <span inline-block w-8 text-right font-sans>{item.year}</span>
                <span mx-1>·</span>
                <span>{item.title}</span>
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default TodayInHistory
