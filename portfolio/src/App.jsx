
import Styles from './App.module.css'
import Hero from './components/Hero/Hero'
import Navbar from './components/Navbar/navbar'
function App() {
 

  return (
    <div className={Styles.App}>
 <Navbar></Navbar> 
 <Hero></Hero>
    </div> 
  )
}

export default App
