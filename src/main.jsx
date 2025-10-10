import { StrictMode, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router'
import Home from './components/home/Home.jsx'
import Apps from './components/apps/Apps.jsx'
import Installation from './components/installation/Installation.jsx'
import AppDetail from './components/appDetail/AppDetail.jsx'
import ErrorPage from './components/errorPage/ErrorPage.jsx'


const appsDataPromise = fetch("/appData.json").then(res => res.json())

const router = createBrowserRouter([
  {
    path: "/",
    Component: App,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback="Loading ...">
            <Home appsDataPromise={appsDataPromise}></Home>
          </Suspense>
        ),
      },
      {
        path: "/apps",
        element: (
          <Suspense fallback="Loading ...">
            <Apps appsDataPromise={appsDataPromise}></Apps>
          </Suspense>
        ),
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appDetail/:id",
        element: (
          <Suspense fallback="Loading ...">
            <AppDetail appsDataPromise={appsDataPromise}></AppDetail>
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "*",
    Component: ErrorPage
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
