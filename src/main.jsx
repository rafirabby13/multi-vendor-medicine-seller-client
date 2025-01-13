import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './Routes/Routes.jsx'
import AuthProviders from './Context/AuthProviders.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProviders><RouterProvider router={router}></RouterProvider></AuthProviders>
  </StrictMode>,
)
