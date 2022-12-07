import { useLocation } from 'react-router-dom'
import { Icon } from '@iconify/react'
import Back from '@/components/back'

export default function ErrorPage() {
  const { pathname } = useLocation()
  return (
    <div text-center mt-20 font-sans>
      <div flex-center>
        <Icon icon='iconoir:emoji-sad' width='50'/>
      </div>
      <h1 text-3xl font-bold>Oooops!</h1>
      <div text-xl mt-10>Sorry, there is something wrong...</div>
      <p mt-10>
        <i text-gray-500 >{`404 not found: ${pathname}`}</i>
      </p>
      <div mt-5>
      <Back />
      </div>
    </div>
  )
}
