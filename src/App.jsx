import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import PostList from './pages/PostList';
import NavBar from './component/NavBar';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<NavBar />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/post" element={<PostList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App



