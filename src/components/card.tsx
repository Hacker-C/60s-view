import { useEffect, useState } from 'react'
import mockData from '@/mock/60s.json'

export interface TheResponse {
  status: number
  message: string
  data: string[]
}

function Card({ onSave }: { onSave: () => void }) {
  const [list, setList] = useState<string[]>([])
  useEffect(() => {
    fetch(import.meta.env.VITE_APP_BASEURL)
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
    <main m-4 bg-white p-3 card-shadow>
      <div flex items-center mb-5>
        <h1
          text-primary
          font='song medium'
        >
          <i>「你是懂世界的」</i>
        </h1>
        <div flex-1></div>
        <button onClick={onSave} text="primary bold">保存图片</button>
      </div>
      <ul font="song bold" text-sm>
        {
          list.map(text => (<li className='mt-1 leading-6' key={text}>{text}</li>))
        }
      </ul>
    </main>
  )
}

export default Card
