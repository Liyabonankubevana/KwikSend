import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/sso/Main";
import {Redirect} from "./pages/Redirect";
export const App: React.FC = () => {
 return (
  <Router>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/redirect" element={<Redirect />} />
   </Routes>
  </Router>
 );
};