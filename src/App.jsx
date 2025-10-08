import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </>
  )
}

export default App
