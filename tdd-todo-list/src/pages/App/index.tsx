import React from 'react';
import './App.css';
import List from 'pages/List';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<List />} />
      {/* <Route path="/add" element={<About />} /> */}
      {/* <Route path="*" element={<NoMatch />} /> */}
    </Routes>
  </BrowserRouter>
);

export default App;
