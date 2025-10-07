import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home.jsx'
import Apps from './components/apps/Apps.jsx'
import Installation from './components/installation/Installation.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    Component: App,
    children: [
      {
        index: true,
        loader: () => fetch("appData.json"),
        Component: Home
      },
      {
        path: 'apps',
        Component: Apps
      },
      {
        path: 'installation',
        Component: Installation
      }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
