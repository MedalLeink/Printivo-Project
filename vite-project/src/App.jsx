import React from 'react'
import NavBar from './Components/NavBar'
import HeroSection from './Components/HeroSection'
import PopularProducts from './Components/PopularProducts'
import PopularCategories from './Components/PopularCategories'


function App() {
  return (
    <div className='mb-20'>

      {/* main screen/component tags */}
      <NavBar />
      <HeroSection />
      <PopularProducts />
      <PopularCategories />
    </div>
  )
}

export default App
