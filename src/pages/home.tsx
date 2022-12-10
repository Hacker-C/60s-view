import html2canvas from 'html2canvas'
import type { LegacyRef } from 'react'
import { useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card from '@/components/card'

function Home() {
  const appRef = useRef<HTMLDivElement>()
  const colors = ['#EF5350', '#FBC02D', '#d6569b', '#52ab62', '#FB8C00', '#3eb4f0', '#7E57C2']
  const day = (new Date()).getDay()
  const todayColor = colors[day]
  const handleSave = (buttonDom: HTMLButtonElement) => {
    if (appRef.current === null)
      return
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
      <Card onSave={handleSave} theme={todayColor}/>
      <Footer />
    </div>
  )
}

export default Home
