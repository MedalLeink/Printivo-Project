import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import PopularProducts from './Components/PopularProducts'


function App() {
  return (
    <div className='h-1440'>
      <NavBar />
      <HeroSection />
      <PopularProducts />
    </div>
  )
}

export default App
