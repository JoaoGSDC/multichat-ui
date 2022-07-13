import React from "react";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Chat from "./pages/Chat";

const RoutesApp: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Chat />} />
        <Route path="/login" element={<Authentication />} />
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesApp;
