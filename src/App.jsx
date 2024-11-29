import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './Home'
import About from './About'
import Contact from './Contact'
import LoginPage from './LoginPage'
import Test from './Test'
import Card from './Card'
import UseState from './UseState'


function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={< About />} />
      <Route path='/contact' element={< Contact/>} />
      <Route path='/Login' element={<LoginPage/>} />
      <Route path='/Test' element={<Test/>} />
      <Route path='/card' element={<Card/>} />
      <Route path='/useState' element={<UseState/>} />






    </Routes>
    </BrowserRouter>
  )
}

export default App
