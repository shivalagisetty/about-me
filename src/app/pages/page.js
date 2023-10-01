import Image from 'next/image'
import Header from '../components/header'

export default function Home() {
  return (
    <main >
      <Header/>
      <div className="flex flex-col items-center justify-between">
      <div className="text-5xl m-7 hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-500 hover:text-transparent hover:bg-clip-text hover:bg-size-200 hover:bg-no-repeat transition duration-500">About me</div>
      <span>
        I am Shiva Lagisetty, Gratuated from NIT Rourkela. Currently working at ADP as Full Stack Developer
      </span>
      </div>
    </main>
  )
}
