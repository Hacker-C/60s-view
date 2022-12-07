import Header from '@/components/header'
import Footer from '@/components/footer'

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
      <Footer />
    </div>
  )
}

export default Home
