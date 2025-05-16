
import Styles from './App.module.css'
import About from './components/About/About'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/Navbar'
function App() {
 

  return (
    <div className={Styles.App}>
 <Navbar></Navbar> 
 <Hero></Hero>
 <About></About>
    </div> 
  )
}

export default App
