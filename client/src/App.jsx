import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { LandingPage, AddClassesPage, AutomatedClassesPage } from "./pages";
import { Navbar } from "./components";

const App = () => {
  return (
    <BrowserRouter>
      <div id='background' className='min-h-[100vh] w-full font-montserrat pointer-events-auto flex flex-col justify-between bg-primary duration-700 ease-in-out'>

        <Navbar />

        <div>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/automated" element={<AutomatedClassesPage />} />
            <Route path="/manual" element={<AddClassesPage />} />
          </Routes>
        </div>

        <div />
      </div>
    </BrowserRouter>
  );
};

export default App;