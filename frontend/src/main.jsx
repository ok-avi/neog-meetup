import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Import all of Bootstrap's CSS
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import EventDetails from './pages/EventDetails.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />
  },
  {
    path:"/eventDetails/:eventID",
    element:<EventDetails />
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
