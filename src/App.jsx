import './App.css';
import HomePage from './pages/HomePage';
import DemoPage from './pages/DemoPage';
import ReportPage from './pages/ReportPage';
import LookerPage from './pages/LookerPage';
import CodePage from './pages/CodePage';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header'; 
import Navigation from './components/Navigation'; 
import Layout from './components/Layout'; 
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header /> {/* Always render Header */}
      <Navigation /> {/* Always render Navigation */}
      
      {/* Use Layout to wrap the page content */}
      <Layout> 
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/looker" element={<LookerPage />} />
          <Route path="/code" element={<CodePage />} />
        </Routes>
        <Footer/>
      </Layout>
    </Router>
  );
}

export default App;
