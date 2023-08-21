import type { LegacyRef } from 'react'
import { useRef } from 'react'
import { useSnapshot } from 'valtio'
import TodayInHistory from './today-in-history'
import { NewsCard } from './60s-card'
import { ThemeStore } from '@/store'

export interface TheResponse {
  status: number
  message: string
  data: string[]
}

export function AppContent({ onSave }: { onSave(buttonDom: HTMLButtonElement): void }) {
  const buttonRef = useRef<HTMLButtonElement>()
  const { theme } = useSnapshot(ThemeStore)
  return (
    <main m-4 bg-white px-3 pb-4 pt-2 card-shadow>
      <div flex>
        <div flex='1'></div>
        <button
          ref={buttonRef as LegacyRef<HTMLButtonElement>}
          onClick={() => onSave(buttonRef.current as HTMLButtonElement)}
          style={{ color: theme }}
          className='i-ic-baseline-download-for-offline text-2xl'
        />
      </div>
      <NewsCard />
      <TodayInHistory />
    </main >
  )
}
