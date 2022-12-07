import html2canvas from 'html2canvas'
import type { LegacyRef } from 'react'
import { useRef } from 'react'
import { useSetRecoilState } from 'recoil'
import { useNavigate } from 'react-router-dom'
import Header from '@/components/header'
import Footer from '@/components/footer'
import Card from '@/components/card'
import { imageState } from '@/states/index'

function Home() {
  const appRef = useRef<HTMLDivElement>()
  const setImageState = useSetRecoilState(imageState)
  const navigate = useNavigate()
  const handleSave = () => {
    if (appRef.current === null)
      return
    html2canvas(appRef.current as HTMLDivElement)
      .then((canvas) => {
        setImageState(canvas)
        navigate('/download')
        // appRef.current?.appendChild(canvas)
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
