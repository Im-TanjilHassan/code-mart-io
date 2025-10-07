import { Outlet } from 'react-router'
import './App.css'
import Navbar from './components/navbar/Navbar'

function App() {

  return (
    <>
      <header>
        <Navbar></Navbar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
    </>
  )
}

export default App
