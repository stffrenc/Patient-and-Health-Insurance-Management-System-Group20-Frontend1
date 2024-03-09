import { useState } from "react";
import { SnackbarProvider } from "notistack";

import LandingPage from "./components/ui/LandingPageUI/LandingPage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterPage from "./components/ui/authUI/RegisterPage";
import Navbar from "./components/ui/LandingPageUI/Navbar";
import LoginPage from "./components/ui/authUI/LoginPage";
import DoctorApp from "./client-provider-doctor-views/Doctor/DoctorApp";
import ClientApp from "./client-provider-doctor-views/Client/ClientApp";
import ProviderApp from "./client-provider-doctor-views/Provider/ProviderApp";

function App() {
  return (
    <div className="bg-[#EEEDEB] h-screen">
      <SnackbarProvider>
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/doctor/*" element={<DoctorApp />}/>
            <Route path="/client/*" element={<ClientApp />}/>
            <Route path="/provider/*" element={<ProviderApp />}>
              
            </Route>
            
          </Routes>
        </Router>
      </SnackbarProvider>
    </div>
  );
}

export default App;
