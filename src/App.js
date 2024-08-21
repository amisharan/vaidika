import "./App.css";
import Banner from "./Banner/banner";
import Nav from "./Componets/Nav";
import Heading from "./Heading/heading";
import Menu from "./Menu/menu";
import Live from "./Live/live";
import Card from "./Card/card";
import Pandit from "./Pandit/pandit";
import Cardgrid from "./Cardgrid/cardgrid";
import Vaid from "./Vaid/vaid";


function App() {
  return (
    <>
      <Nav />
      <Banner />
      <Heading />
      <Menu />
      <Live />
      <Card />
      <Pandit />
      <Cardgrid />
      <Vaid />
    </>
  );
}

export default App;
