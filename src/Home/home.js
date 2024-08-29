import React from 'react'
import Banner from "../Banner/banner";
import Heading from "../Heading/heading";
import Menu from "../Menu/menu";
import Live from "../Live/live";
import Card from "../Card/card";
import Pandit from "../Pandit/pandit";
import Cardgrid from "../Cardgrid/cardgrid";
import Vaid from "../Vaid/vaid";
import Vaidi from "../Vaidi/vaidi";
import Vaidik from "../Vaidik/vaidik";


// import Nav from "./Componets/Nav";

export default function home() {
    return (
        <div>
            <Banner />
            <Heading />
            <Menu />
            <Live />
            <Card />
            <Pandit />
            <Cardgrid />
            <Vaid />
            <Vaidi />
            <Vaidik />


        </div>
    )
}
