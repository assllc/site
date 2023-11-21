import React from "react";
import GlobalStyles from 'styles/GlobalStyles';
import { css } from "styled-components/macro"; //eslint-disable-line

import Home from "pages/Home.js";

/* Inner Pages */
import AboutUsPage from "pages/AboutUs.js";
import ContactUsPage from "pages/ContactUs.js";
import WhatWeOfferPage from "pages/WhatWeOfferPage.js";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/contact" element={<ContactUsPage/>} />
          <Route path="/product" element={<WhatWeOfferPage/>} />
        </Routes>
      </Router>
    </>
  );
}
