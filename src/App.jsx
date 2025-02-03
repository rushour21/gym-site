import { useState } from 'react'
import Navbar from './component/navbar.jsx'
import './App.css'
import Banner from './component/banner.jsx'
import Wcu from './component/wcu.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Wcu/>
    </>
  )
}

export default App
