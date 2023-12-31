import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Section1 from './components/section1/Section1'
import Section2 from './components/section2/Section2'
import Section3 from './components/section3/Section3'
import Section4 from './components/Section4/Section4'
import Footer from './components/footer/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/> 
    <Section1/>


    
    <Section2/>
    <Section3/>
    <Section4/>
    <Footer/>
    </>
  )
}

export default App
