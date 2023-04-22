// import './App.css'
import React from 'react'

import Navigationbar from '../../blog-app-2/src/Compnents/Navbar/Navigationbar';
import Footer from '../../blog-app-2/src/Compnents/Footer/Footer';
import Body from './Pages/HomePage/Body';


import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import MostLikedPost from './Pages/MostLikedPost/MostLikedPost';
import AuthorPage from './Pages/profilePage/AuthorPage';

function App() {
  return (
    <>
      <Navigationbar />
      <Routes>
        <Route exact path='/' element={<Body/>} />
        <Route exact path='/MostLikedPost' element={<MostLikedPost />} />
        <Route exact path='/MostCommentPost' element={<MostLikedPost />} />
        <Route exact path='/profile/:authorId' element={<AuthorPage />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
