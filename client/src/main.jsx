import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Route from './Pages/Routes/Route.jsx'
import { Toaster } from 'react-hot-toast'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <Toaster />
    <RouterProvider router={Route}></RouterProvider>
  </React.StrictMode>,
)
