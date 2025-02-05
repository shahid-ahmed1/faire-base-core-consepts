import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Roots from './components/Roots/Roots.jsx';
import Home from './components/Roots/Home.jsx';
import Login from './components/Login.jsx';
import SignUp from './components/SignUp.jsx';
import AuthProvider from './components/AuthProbider.jsx';
import Order from './components/order.jsx';
import PrivateRoutes from './Routs/PrivateRoutes.jsx';
import Profile from './components/Profile.jsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Roots></Roots>,
    children:[
      {
        path: "/",
        element:<Home></Home>,
      },
      {
        path: "login",
        element:<Login></Login>,
      },
      {
        path: "signup",
        element:<SignUp></SignUp>,
      },
      {
        path: "order",
        element:<PrivateRoutes><Order></Order></PrivateRoutes>,
      },
      {
        path: "profile",
        element:<PrivateRoutes><Profile></Profile></PrivateRoutes>,
      }
    ]
  },
]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
   <AuthProvider>
   <RouterProvider router={router} />
   </AuthProvider>
  </StrictMode>,
)
