
import Card from '../components/common/Card'
import Hero from '../components/common/Hero'

const Home = () => {
  return (
    <>
     <main className="max-w-8xl flex flex-col gap-8 px-45">
      <Hero />
      <Card />
    </main>
    </>
  )
}

export default Home