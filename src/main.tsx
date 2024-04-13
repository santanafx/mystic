import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import "../src/global.css"
import HomePage from './pages/HomePage'
import Login from './pages/Login'
import MatchMenu from './pages/MatchMenu'

const router = createBrowserRouter([{
  path: "/",
  element: <HomePage />,
  errorElement: <div>Error 404 not found</div>
},
{
  path: "/login",
  element: <Login />,
  errorElement: <div>Error 404 not found</div>
},
{
  path: "/matchMenu",
  element: <MatchMenu />,
  children: [
    {
      path: "/matchMenu/:lobbyId",
      element: <MatchMenu />
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