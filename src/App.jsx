import { useState } from 'react'
import Navbar from './component/navbar.jsx'
import './App.css'
import Banner from './component/banner.jsx'
import Wcu from './component/wcu.jsx'
import Mt from './component/mt.jsx'
import Pricing from './component/pricing.jsx'
import YourOpinions from './component/youropinions.jsx'
import Contact from './component/contact.jsx'
import Footer from './component/footer.jsx'

function App() {
  return (
    <>
      <Navbar/>
      <Banner/>
      <Wcu/>
      <Mt/>
      <Pricing/>
      <YourOpinions/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
