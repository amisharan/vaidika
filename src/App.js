import "./App.css";

// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Nav from "./Componets/Nav";

// import { LogIn } from "react-ionicons";
import Login from "./Login/login";
import Footer from "../src/Footer/footer";

import Home from "../src/Home/home";

function App() {
  return (

    <Router >
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Login />} />


      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
