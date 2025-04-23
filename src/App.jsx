import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import PostList from './pages/PostList';
import DefaultLayout from './layouts/DefaultLayout';
import PostDetails from './pages/PostsDetails';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/posts" element={<PostList />} />
            <Route path="/posts/:id" element={<PostDetails />} />
          </Route>
        </Routes>
      </BrowserRouter >
    </>
  )
}

export default App

