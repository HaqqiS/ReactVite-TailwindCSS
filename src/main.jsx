import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RegisterPage from './Pages/register.jsx'
import LoginPage from './Pages/login.jsx'
import ErrorPage from './Pages/404.jsx'

const router = createBrowserRouter([
    {
        path: '/',
        element: <dix> hellow wornd</dix>,
        errorElement: <ErrorPage />,
    },
    {
        path: '/register',
        element: <RegisterPage />,
    },
    {
        path: '/login',
        element: <LoginPage />,
    },
])

createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={router} />
    </StrictMode>,
)
