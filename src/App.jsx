import React from 'react'
import Header from './component/Header'
import Hero from './screen/Hero'
import HomePages from './screen/HomePages'
import Social from './screen/Social'
import DiscographyReleasePages from './component/DiscographyReleasePages'
import Discography from './screen/Discography'


const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <HomePages/>
      <Social/>
      <Discography/>
    
    </main>
  )
}

export default App
