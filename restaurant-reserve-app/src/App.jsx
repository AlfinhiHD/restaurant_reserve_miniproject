import { useState } from 'react'

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import ErrorPage from './pages/ErrorPage/ErrorPage'
import LoginPage from './pages/LoginPage/LoginPage'
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link href="https://fonts.googleapis.com/css2?family=Kaisei+Opti:wght@400;500;700&display=swap" rel="stylesheet"/>
      
      <Router>
          <Routes>
            {/* <Route exact path="/" element={<LandingPage />} />
            <Route path="/getstarted" element={<CreateProduct />} />
            <Route path="/detailproduct/:productId" element={<DetailProduct />} /> */}
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
      </Router>
    </>
    
  )
}

export default App
