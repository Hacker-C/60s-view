import type { LegacyRef } from 'react'
import { useEffect, useRef } from 'react'
import { useRecoilValue } from 'recoil'
import { useNavigate } from 'react-router-dom'
import { imageState } from '@/states/index'

function Download() {
  const domRef = useRef<HTMLDivElement>()
  const image = useRecoilValue(imageState)
  const navigate = useNavigate()
  useEffect(() => {
    if (!image)
      navigate('/')
    else
      domRef.current?.appendChild(image as Node)
  }, [])
  return (
    <div ref={domRef as LegacyRef<HTMLDivElement>}></div>
  )
}

export default Download
