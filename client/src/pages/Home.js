import React from "react";
import "./Main.css";
import shoe from "./shoe.gif"



const Home = () => {
    return (
    <div className="landing-page">
    <div className="shoe-gif">
    <img src={shoe} alt="shoe" />
    </div>
    </div>
    )   
    }


export default Home;