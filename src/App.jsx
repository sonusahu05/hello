import { useState,useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Updated imports
import Home from './views/Home'
import About from './views/About'
import Contact from './views/Contact'
import Factory from './views/Factory'
import Projects from './views/Projects'
import Login from './views/admin/Login';
import AdminFactory from './views/admin/views/Factory';
import AdminHome from './views/admin/AdminHome';
import AdminProjects from './views/admin/views/Project';
import AdminTeam from './views/admin/views/Team';
import AdminClient from './views/admin/views/Client';
import Layout from './views/components/Layout';

function App() {
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "en",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  return (
    <div className='bg-red_color_opacity '>
      <Layout>
      <Router forceRefresh>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/factory" element={<Factory />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/admin/login" element={<Login />} />
          <Route path='/admin/home' element={<AdminHome />} />
          <Route path='/admin/factory' element={<AdminFactory />} />
          <Route path='/admin/projects' element={<AdminProjects />} />
          <Route path='/admin/about' element={<AdminTeam />} />
          <Route path='/admin/client' element={<AdminClient />} />
        </Routes>
      </Router>
      </Layout>
    </div>
  )
}

export default App;
