import type { LegacyRef } from 'react'
import { useEffect, useRef, useState } from 'react'
import TodayInHistory from './today-in-history'
import mockData from '@/mock/60s.json'
import { _60s } from '@/api'

export interface TheResponse {
  status: number
  message: string
  data: string[]
}

function Card({ onSave, theme }: { onSave(buttonDom: HTMLButtonElement): void; theme: string }) {
  const buttonRef = useRef<HTMLButtonElement>()
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    _60s()
      .then((data) => {
        return data.json()
      }).then((res) => {
        setList((res as TheResponse).data)
      }).catch((err) => {
        console.error(err)
        // 网络获取数据失败，则使用本地数据
        setList((mockData as TheResponse).data)
      })
  }, [])
  return (
    <main m-4 bg-white px-3 py-4 card-shadow>
      <div flex items-center mb-5>
        <h1
          font='song medium'
          style={{
            color: theme
          }}
        >
          <i>「你是懂世界的」</i>
        </h1>
        <div flex-1></div>
        <button
          ref={buttonRef as LegacyRef<HTMLButtonElement>}
          onClick={() => onSave(buttonRef.current as HTMLButtonElement)}
          text="bold"
          font="song"
          style={{
            color: theme
          }}
        >
          保存图片
        </button>
      </div>
      <ul font="song bold" text-sm>
        {
          list.slice(1, -1).map(text => (<li className='mt-1 leading-6' key={text}>{text}</li>))
        }
      </ul>
      <TodayInHistory theme={theme}/>
      <div>
        <h1
          mt-2
          font='song bold'
          style={{
            color: theme
          }}
        >
            <i>「人生感悟」</i>
        </h1>
        <p font="song bold" text-sm mt-3>{list.at(-1)?.slice(4)}</p>
      </div>
    </main>
  )
}

export default Card
