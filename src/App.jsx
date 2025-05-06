import React from 'react'
import Header from './component/Header'
import Hero from './screen/Hero'
import HomePages from './screen/HomePages'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <HomePages/>
    </main>
  )
}

export default App
