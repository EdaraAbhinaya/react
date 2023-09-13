import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
//import Product  from './components/Product';
import { Route } from 'react-router-dom';
import { createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import RouteLayout from './components/RouteLayout';
import Home from './components/Home';
import Login from './components/Login';
import Signin from './components/Signin';
import Cart from './components/Cart';

function App() {

  const router = createBrowserRouter(createRoutesFromElements(

    <Route path="/" element={<RouteLayout />}>
      <Route path='/home' element={<Home />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signin' element={<Signin />}></Route>
      <Route path='/cart' element={<Cart />}></Route>
      <Route index element={<Dashboard />}></Route>
    </Route>

  ))
  return (
    <div className='App'>

      <RouterProvider router={router} />
    </div>
  );
}

export default App;
