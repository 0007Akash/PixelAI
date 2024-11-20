import React from 'react'
import Home from './pages/Home'
import BuyCredit from './pages/BuyCredit'
import GenerateImage from './pages/GenerateImage'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className='px-4 sm:px-10 md:px-14 lg:px-20 bg-gradient-to-b from-teal-50 to-orange-50 min-h-screen'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/buy' element={<BuyCredit />} />
        <Route path='/generate' element={<GenerateImage />} />
      </Routes>


    </div>
  )
}

export default App
