import type { LegacyRef } from 'react'
import { Fragment, useRef } from 'react'
import { useSnapshot } from 'valtio'
import { Popover, Transition } from '@headlessui/react'
import TodayInHistory from './today-in-history'
import { NewsCard } from './60s-card'
import { Checkbox } from './checkbox'
import { ThemeStore, TypeStore } from '@/store'

export interface TheResponse {
  status: number
  message: string
  data: string[]
}

export function AppContent({ onSave }: { onSave(buttonDom: HTMLButtonElement): void }) {
  const buttonRef = useRef<HTMLButtonElement>()
  const { theme } = useSnapshot(ThemeStore)
  const { types, update } = useSnapshot(TypeStore)
  return (
    <main m-4 bg-white px-3 pb-4 pt-2 card-shadow>
      <div
        flex
        items-center
        ref={buttonRef as LegacyRef<HTMLButtonElement>}
      >
        <div flex-1></div>
        <a
          href='https://github.com/hacker-c/60s-view'
          target='_blank'
          style={{ color: theme }}
          className='i-carbon-logo-github text-2xl'
        />
        <Popover>
          <Popover.Button as='div' className='flex items-center mx2'>
            <button
              ref={buttonRef as LegacyRef<HTMLButtonElement>}
              className='i-ic-round-settings text-2xl'
              style={{ color: theme }}
            />
          </Popover.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-200"
            enterFrom="opacity-0 translate-y-1"
            enterTo="opacity-100 translate-y-0"
            leave="transition ease-in duration-150"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 translate-y-1"
            className='absolute shadow-lg z-999'
          >
            <Popover.Panel className="absolute right-0">
              <div className='bg-white w30 text-left text-sm rounded p1'>
                <Checkbox theme={theme} checkedValues={types} onChange={update}>
                  <Checkbox.Label>
                    展示设置
                  </Checkbox.Label>
                  <Checkbox.Option value={'truth'}>人生感悟</Checkbox.Option>
                  <Checkbox.Option value={'60s'}>60 秒读世界</Checkbox.Option>
                  <Checkbox.Option value={'history'}>历史上的今天</Checkbox.Option>
                </Checkbox>
              </div>
            </Popover.Panel>
          </Transition>
        </Popover>
        <button
          onClick={() => onSave(buttonRef.current as HTMLButtonElement)}
          style={{ color: theme }}
          className='i-ic-baseline-download-for-offline text-2xl'
        />
      </div>
      <NewsCard />
      {types.includes('history') && <TodayInHistory />}
    </main>
  )
}
