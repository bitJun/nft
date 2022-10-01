import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AliveScope } from "react-activation";
import PageLayout from './Layout/PageLayout';
import Index from './pages/Home';
import Exchange from './pages/Exchange';
import Casting from './pages/Casting';
import Mine from './pages/Mine';
import Register from './pages/Register';
import Unique from './pages/Unique';
import Identity from './pages/Identity';
import 'antd/dist/antd.css';

function App() {
  return (
    <AliveScope>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
        </Routes>
        <Routes>
          <Route path="/page" element={<PageLayout />}>
            <Route path="/page/exchange" element={<Exchange />} />
            <Route path="/page/mine" element={<Mine />} />
            <Route path="/page/casting" element={<Casting />} />
            <Route path="/page/register" element={<Register />} />
            <Route path="/page/unique" element={<Unique />} />
            <Route path="/page/identity" element={<Identity />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AliveScope>
  )
}

export default App
