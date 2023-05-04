import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ErrorPage from './pages/ErrorPage/ErrorPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage';
import OnLogin from './templates/OnLogin/OnLogin';
import OffLogin from './templates/OffLogin/OffLogin';

function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500;700&display=swap" rel="stylesheet"/>
      
      {/* <OffLogin /> */}
      <OnLogin />
      {/* <Router>
          <Routes>
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<OnLogin />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router> */}
    </>
    
  )
}

export default App
