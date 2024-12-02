import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Navigation from "./components/Navigation";
import Layout from "./components/Layout";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import DemoPage from "./pages/DemoPage";
import ReportPage from "./pages/ReportPage";
import LookerPage from "./pages/LookerPage";
import CodePage from "./pages/CodePage";
import './App.css';
import React from "react";

function App() {
  return (
    <Router>
      <Header />
      <Navigation />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/demo" element={<DemoPage />} />
          <Route path="/report" element={<ReportPage />} />
          <Route path="/looker" element={<LookerPage />} />
          <Route path="/code" element={<CodePage />} />
        </Routes>
      </Layout>
      <Footer />
    </Router>
  );
}

export default App;
