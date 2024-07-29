import React from 'react'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import MainLineup from '../components/MainLineup'
import Timeline from '../components/Timeline'
import Contact from '../components/Contact'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <>
      <Navbar />

           <main className="min-h-screen overflow-hidden">
        <HeroSection />
      </main>
      <About />
      <MainLineup />
      <Timeline />
      <Contact />
      <Footer />
      

    </>
  )
}

export default Home