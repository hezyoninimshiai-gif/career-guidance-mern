import React from "react";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import Footer from "./components/Footer";
import CareerPaths from "./components/CareerPaths";
import Opportunities from "./components/Opportunities";
import TenthPage from "./pages/TenthPage";
import MPCPage from "./pages/MPCPage";
import BIPCPage from "./pages/BIPCPage";
import CECPage from "./pages/CECPage";
import MECPage from "./pages/MECPage";
import HECPage from "./pages/HECPage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import AuthModal from "./components/AuthModal";
import Register from "./pages/Register";
import { useState, useEffect } from "react";

function Home(){
const [showModal,setShowModal] = useState(false);
useEffect(()=>{
let visits = localStorage.getItem("visits");
visits = visits ? parseInt(visits) + 1 : 1;
localStorage.setItem("visits",visits);
if(visits >= 2){
setShowModal(true);
const timer = setTimeout(() => {
    setShowModal(true);
  }, 120000); // 2 minutes

  return () => clearTimeout(timer);
}
},[])
return(
<>
<HeroSection/>
<CareerPaths/>
<Opportunities/>
{showModal && <AuthModal closeModal={()=>setShowModal(false)} />}
</>
)
}

function App() {
return(
<Router>
<Navbar/>
<Routes>
<Route path="/" element={<Home/>}/>
<Route path="/10th" element={<TenthPage/>}/>
<Route path="/mpc" element={<MPCPage/>}/>
<Route path="/bipc" element={<BIPCPage/>}/>
<Route path="/cec" element={<CECPage/>}/>
<Route path="/mec" element={<MECPage/>}/>
<Route path="/hec" element={<HECPage/>}/>
<Route path="/about" element={<About/>}/>
<Route path="/contact" element={<Contact/>}/>
<Route path="/register" element={<Register/>}/>
</Routes>
</Router>
)
}

export default App;