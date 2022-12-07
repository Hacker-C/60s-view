import Header from '@/components/header'

function Home() {
  const theme = '#ef8821'
  return (
    <div
      w-350px
      className="relative left-[50%] -translate-x-[50%]"
      style={{
        backgroundColor: theme
      }}
    >
      <Header />
    </div>
  )
}

export default Home
