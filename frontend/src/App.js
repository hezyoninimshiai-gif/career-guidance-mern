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
import HECPage from "./pages/CECPage";
import About from "./pages/About";
import Contact from "./pages/Contact";

function Home(){
return(
<>
<HeroSection/>
<CareerPaths/>
<Opportunities/>
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
</Routes>
</Router>
)
}

export default App;