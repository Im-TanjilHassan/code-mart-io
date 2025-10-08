import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import { ToastContainer } from 'react-toastify'

function App() {

  return (
    <>
      <ToastContainer></ToastContainer>
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
