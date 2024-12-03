import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import AddCoffee from './Components/AddCoffee.jsx';
import UpdateCoffee from './Components/UpdateCoffee.jsx';
import SignIn from './Components/SignIn.jsx';
import SignUp from './Components/SignUp.jsx';
import Header from './Components/Header.jsx';
import Layout from './Components/Layout.jsx';
import Home from './Components/Home.jsx';
import AuthProvider from './Providers/AuthProvider.jsx';
import Users from './Components/Users.jsx';

// step 9
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children : [
      {
        path : '/',
        element : <Home></Home>,
        loader : () => fetch(`http://localhost:5000/coffee`)
      },
      {
        path : "addCoffee",
        element : <AddCoffee></AddCoffee>
      },
      {
        path : "updateCoffee/:id",
        element : <UpdateCoffee></UpdateCoffee>,
        // step 42
        loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
      },
      {
        path : 'signin',
        element : <SignIn></SignIn>
      },
      // step 50
      {
        path : 'signup',
        element : <SignUp></SignUp>
      },
      {
        // step 2 firebase show users read
        path : 'users',
        element : <Users></Users>,
        loader : () => fetch(`http://localhost:5000/users`)
      }
    ]




    // step 32 show all the coffee in home
    // loader : () => fetch(`http://localhost:5000/coffee`)
  },
  // {
  //   path : '/',
  //   element : <Header></Header>
  // },
  // step 11
  // {
  //   path : "addCoffee",
  //   element : <AddCoffee></AddCoffee>
  // },
  // step 12
  // {
  //   path : "updateCoffee/:id",
  //   element : <UpdateCoffee></UpdateCoffee>,
  //   // step 42
  //   loader : ({params}) => fetch(`http://localhost:5000/coffee/${params.id}`)
  // },
  // step 49
 
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      {/* step 10 */}
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>,
)
