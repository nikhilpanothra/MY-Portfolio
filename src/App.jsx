import About from "./components/About/About"
import Contact from "./components/contact/Contact"
import Hero from "./components/Hero/Hero"
import MyWork from "./components/My Work/MyWork"
import Navbar from "./components/Navbar/Navbar"
import Services from "./components/Services/Services"
import Footer from "./components/Footer/Footer"

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Services/>
      <MyWork/>
      <Contact/>
      <Footer/>
      
    </div>
  )
}

export default App
