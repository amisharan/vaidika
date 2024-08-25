import "./App.css";
// import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Banner from "./Banner/banner";
import Nav from "./Componets/Nav";
import Heading from "./Heading/heading";
import Menu from "./Menu/menu";
import Live from "./Live/live";
import Card from "./Card/card";
import Pandit from "./Pandit/pandit";
import Cardgrid from "./Cardgrid/cardgrid";
import Vaid from "./Vaid/vaid";
import Vaidi from "./Vaidi/vaidi";
import Vaidik from "./Vaidik/vaidik";
import Footer from "./Footer/footer";
// import { LogIn } from "react-ionicons";
import Login from "./Login/login";

function App() {
  return (

    <Router >
      <Nav />
      <Routes>
        <Route path="/login" element={<Login />} />

        {/* <Banner />
        <Heading />
        <Menu />
        <Live />
        <Card />
        <Pandit />
        <Cardgrid />
        <Vaid />
        <Vaidi />
        <Vaidik />
        <Footer /> */}
      </Routes>
      {/* <LogIn /> */}
    </Router>
  );
}

export default App;
