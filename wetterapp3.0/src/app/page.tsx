"use client"
import Home from './pages/Home'
import Prediction from './pages/Prediction'
import {Route,Routes, BrowserRouter} from 'react-router-dom'


export default function Page(){

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/prediction' element={<Prediction />}></Route>
      </Routes>
    </BrowserRouter>
    </>
  )

}