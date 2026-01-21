import Mobile from "./pages/Mobile";
import Principal from "./pages/Principal";
import { Routes, Route } from "react-router-dom";
import '../styles/App.css'
import '../styles/index.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<Principal />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
  )
}

export default App
