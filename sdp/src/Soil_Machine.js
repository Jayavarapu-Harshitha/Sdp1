import React from 'react';
import Search from './Search';
import {Link,Route,BrowserRouter as Router,Switch} from 'react-router-dom';
import {Button} from '@material-ui/core';
import Image from './Image';
import logo from './images/logo.jpg';
function Soil_Machine() {
    return (
        <div>
           
            <Router>
                <Link to="/Soiltest">Soil Test</Link>&emsp;&emsp;
                <Link to="/Machinevendors">Vendors</Link>
                <Switch>
                    <Route path="/Soiltest" exact component={Image}></Route>
                    <Route path="/Machinevendors" exact component={Search}></Route>
                </Switch>
            </Router>
            <h4>Welcome to Krushi phala </h4>
            <img src={logo} alt=""></img>

        </div>
    )
}

export default Soil_Machine
