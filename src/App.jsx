import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import PostList from './pages/AboutUs';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/post" element={<PostList />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App


// Consegna
// Creiamo il frontend del nostro Blog e le sue pagine!
// Partiamo installando React Router DOM: npm install react-router-dom
// Definiamo almeno 3 pagine: una homepage, una pagina “chi siamo” e una pagina per la lista dei post
// Implementiamo una navbar in comune a tutte le pagine per poter navigare tra loro


// Per navigare le pagine dell'applicazione, React Router

// mette a disposizione il componente Link.
// Possiamo utilizzare <Link> in qualsiasi parte
// dell'applicazione per definire i collegamenti tra le
// pagine. Ad esempio:
// <Link to="/">Home Page</Link>

// In aggiunta al componente Link, abbiamo a
// disposizione il componente NavLink che aggiunge
// automaticamente una classe "active" quando la rotta
// corrente corrisponde a quella specificata nel link.

// import { Link, NavLink } from "react-router-dom";
// export default function MainNav() {
// return (
// <nav>
// <Link to="/">Home Page</Link>
// <NavLink to="/prodotti">Prodotti</NavLink>
// </nav>
// );
// }