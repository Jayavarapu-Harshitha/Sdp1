import React from 'react';
import './Homepage.css';
import { Wave } from 'react-animated-text';
import Homebk from "./images/Homebk.jpg";
function Homepage() {
    return (
        <div className="home">
            <img id="background" src={Homebk} alt="background" />
            <div className="title" >
                <Wave text="KRUSHIPHALA" style={{ color: "black", fontSize: "22px" }} />
                {/* Krushi Phala */}
                {/* <span>
    <span>K</span>
    <span>r</span>
    <span>u</span>
    <span>s</span>
    <span>h</span>
    <span>i</span>
    <span> </span>
    <span>P</span>
    <span>h</span>
    <span>a</span>
    <span>l</span>
    <span>a</span>
   
</span> */}

            </div>
        </div>
    );
}

export default Homepage;