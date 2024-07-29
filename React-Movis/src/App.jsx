import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NotFound from './Components/NotFound';

import Testing from './Pages/Testing';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='testing' element={<Testing />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </Router>
  );
}

