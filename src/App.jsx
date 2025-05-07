import React from 'react'
import Header from './component/Header'
import Hero from './screen/Hero'
import HomePages from './screen/HomePages'
import Social from './screen/Social'
import Discography from './screen/Discography'
import DemoPages from './screen/DemoPages'
import ArtistPages from './screen/ArtistPages'
import EasyPage from './screen/EasyPage'
import WooCommerce from './screen/WooCommerce'
import InnerPages from './screen/InnerPages'
import FeaturesSection from './screen/FeaturesSection'
import MusicThe from './screen/MusicThemeHero'
import AnimatedFooter from './screen/AnimatedFooter'
import PremiumPluginsSection from './screen/PremiumPluginsSection'
const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Header />
      <Hero />
      <HomePages/>
      <Social/>
      <Discography/>
      <DemoPages/>
      <ArtistPages/>
      <EasyPage/>
      <WooCommerce/>
      <InnerPages/>
      <FeaturesSection/>
      <MusicThe/>
      <PremiumPluginsSection/>
      <AnimatedFooter/>
    </main>
  )
}

export default App
