import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Toprated from './Pages/Toprated/Toprated';
import Trending from './Pages/Trending/Trending';
import Popular from './Pages/Popular/Popular';
import Upcoming from './Pages/Upcoming/Upcoming';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact element={<Home/>}  path="/"  />
        <Route element={<Toprated/>} path='/toprated'/>
        <Route element={<Trending/>} path='/trending'/>
        <Route element={<Popular/>} path='/popular'/>
        <Route element={<Upcoming/>} path='/upcoming'/>   
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
