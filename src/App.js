import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import Background3D from "./components/Background3D";
import Home from "./pages/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Research from "./pages/Research";
import Achievements from "./pages/Achievements";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import "./App.css";

// MODIFIED: Removed the background property
const AppContainer = styled.div`
  min-height: 100vh;
  font-family: "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    sans-serif;
  overflow-x: hidden;
  position: relative;
`;

const PageContainer = styled.div`
  min-height: 100vh;
  padding-top: 80px; /* Account for fixed navigation */
`;

function App() {
  return (
    <Router>
      <AppContainer>
        <Background3D />
        <Navigation />
        <PageContainer>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/research" element={<Research />} />
            <Route path="/achievements" element={<Achievements />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageContainer>
      </AppContainer>
      <Footer />
    </Router>
  );
}

export default App;
