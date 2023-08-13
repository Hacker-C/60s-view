import { useEffect, useState } from 'react'
import { useSnapshot } from 'valtio'
import { Transition } from '@headlessui/react'
import { _60s } from '@/api'
import { ThemeStore, TypeStore } from '@/store'

export interface TheResponse {
  status: number
  message: string
  data: string[]
}

export function NewsCard() {
  const [list, setList] = useState<string[]>([])
  const { types } = useSnapshot(TypeStore)
  useEffect(() => {
    _60s()
      .then((data) => {
        return data.json()
      }).then((res) => {
        setList((res as TheResponse).data)
      }).catch(() => {
        setList([])
      })
  }, [])
  return (
    <>
      <Transition
        show={types.includes('truth')}
        enter="transition-opacity duration-200"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-200"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Truth text={list.at(-1)?.slice(4) ?? ''} />
      </Transition>
      <Transition
        show={ types.includes('60s')}
        enter="transition-opacity duration-75"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-150"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <List list={list.slice(1, -1)} />
      </Transition>

    </>
  )
}

function List({ list }: { list: string[] }) {
  const { theme } = useSnapshot(ThemeStore)
  return <>
    <h1
      font='song bold'
      mt-3
      style={{
        color: theme
      }}
    >
      <i>「60 秒读世界」</i>
    </h1>
    {!list.length && <p text-center text-sm text-red-400>数据获取失败，请尝试开启代理</p>}
    <ul font="song bold" text-sm>
      {
        list.map(text => (<li className='mt-1 leading-6' key={text}>{text}</li>))
      }
    </ul>
  </>
}

function Truth({ text }: { text: string }) {
  const { theme } = useSnapshot(ThemeStore)
  if (!text) {
    return <></>
  }
  return <div>
    <h1
      mt-2
      font='song bold'
      style={{
        color: theme
      }}
    >
      <i>「人生感悟」</i>
    </h1>
    <p font="song bold" text-sm mt-1 indent-4>{text}</p>
  </div>
}
