import Mobile from "./pages/Mobile";
import Principal from "./pages/Principal";
import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import '../styles/App.css'
import '../styles/index.css'

function App() {
  const [isMobile, setIsMobile] = useState(null);

  useEffect(() => {
    // Detecta se é dispositivo móvel
    const checkIsMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || window.opera;
      const mobileRegex = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i;
      return mobileRegex.test(userAgent.toLowerCase());
    };

    // eslint-disable-next-line react-hooks/set-state-in-effect
    setIsMobile(checkIsMobile());
  }, []);

  // Redireciona automaticamente baseado no tipo de dispositivo
  if (isMobile === null) {
    return null; // Aguarda a detecção
  }

  return (
    <Routes>
      <Route path="/" element={isMobile ? <Navigate to="/mobile" /> : <Principal />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
  )
}

export default App
