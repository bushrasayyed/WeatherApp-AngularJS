import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './multi-pages/Home';
import About from './multi-pages/About';
import Contact from './multi-pages/Contact';

import Login from './components/login';
import Register from './components/register';
import UsernameUpdater from './components/UsernameUpdater';
import DropDown from './components/dropDown';
import UsestateDemo from './components/usestateDemo';
import ListEmp from './components/listEmp';
import ListStud from './components/listStud';
function App() {
  return (
    <Router>

    <Routes>
      {/* Multi page routings */}
    <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      {/* Multi page routings end */}

      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/userchange" element={<UsernameUpdater />} />
      <Route path="/menu" element={<DropDown />} />
      <Route path="/count" element={<UsestateDemo />} />
      <Route path="/emp" element={<ListEmp />} />
      <Route path="/stud" element={<ListStud />} />



    </Routes>
  </Router>
  );
}

export default App;
