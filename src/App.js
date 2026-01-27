import React from "react";
import { Analytics } from "@vercel/analytics/react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import MainPage from "./pages/MainPage";
import About from "./pages/About";
import Curriculum from "./pages/Curriculum";
import Tracks from "./pages/Tracks";
import FAQ from "./pages/FAQ";
import Apply from "./pages/Apply";
import Footer from "./components/Footer";

const MainWrapper = styled.main`
  width: 100%;
  min-height: calc(100vh - 80px);
  background-color: #050505;
  border-top: 1px solid rgba(255, 255, 255, 0.1);

  // 헤더 높이만큼 공간 비워두기
  padding-top: 80px;

  @media (max-width: 768px) {
    padding-top: 60px;
  }
`;

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <MainWrapper>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/about" element={<About />} />
          <Route path="/curriculum" element={<Curriculum />} />
          <Route path="/tracks" element={<Tracks />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/apply" element={<Apply />} />
        </Routes>
      </MainWrapper>
      <Footer />
      <Analytics />
    </BrowserRouter>
  );
}

export default App;
