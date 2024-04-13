import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "../src/global.css"
import HomePage from './pages/HomePage'
import LoginPage from './pages/LoginPage'
import MatchMenuPage from './pages/MatchMenuPage'

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />,
  errorElement: <div>Error 404 not found</div>
},
{
  path: "/login",
  element: <LoginPage />,
  errorElement: <div>Error 404 not found</div>
},
{
  path: "/matchMenu",
  element: <MatchMenuPage />,
  children: [
    {
      path: "/matchMenu/:lobbyId",
      element: <MatchMenuPage />
    }
  ],
  errorElement: <div>Error 404 not found</div>

},
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)