import html2canvas from 'html2canvas'
import type { LegacyRef } from 'react'
import { useRef } from 'react'
import { useSnapshot } from 'valtio'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { AppContent } from '@/components/content'
import { ThemeStore } from '@/store'

export default function Home() {
  const appRef = useRef<HTMLDivElement>()
  const { theme: todayColor } = useSnapshot(ThemeStore)
  const handleSave = (buttonDom: HTMLButtonElement) => {
    if (appRef.current === null) {
      return
    }
    html2canvas(appRef.current as HTMLDivElement, {
      ignoreElements: element => buttonDom.contains(element)
    })
      .then((canvas) => {
        const image = canvas.toDataURL()
        const aDownloadLink = document.createElement('a')
        aDownloadLink.download = 'canvas_image.png'
        aDownloadLink.href = image
        aDownloadLink.click()
      })
  }
  return (
    <div
      w="350px"
      ref={appRef as LegacyRef<HTMLDivElement>}
      style={{
        backgroundColor: todayColor
      }}
    >
      <Header />
      <AppContent onSave={handleSave}/>
      <Footer />
    </div>
  )
}
