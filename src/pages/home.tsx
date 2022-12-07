import html2canvas from 'html2canvas'
import type { LegacyRef } from 'react'
import { useRef } from 'react'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card from '@/components/card'

function Home() {
  const appRef = useRef<HTMLDivElement>()
  const handleSave = () => {
    if (appRef.current === null)
      return
    html2canvas(appRef.current as HTMLDivElement)
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
      w="350px" bg="primary"
      ref={appRef as LegacyRef<HTMLDivElement>}
    >
      <Header />
      <Card onSave={handleSave}/>
      <Footer />
    </div>
  )
}

export default Home
