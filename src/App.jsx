
import { Suspense } from 'react'
import './App.css'
import ExploreTech from './Components/ExploreTechnology/ExploreTech'
import Hero from './Components/Hero/Hero'
import Nav from './Components/Nav/Nav'
import Footer from './Components/Footer/Footer'

function App() {

  return (
    <>
    <Nav></Nav>
    <Hero></Hero>
     <Suspense fallback={<div>Loading...</div>}>
        <ExploreTech></ExploreTech>
      </Suspense>
      <Footer></Footer>
    </>
  )
}

export default App
