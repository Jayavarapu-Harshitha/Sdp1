import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/Login"
import Register from "./components/register/Register";
import { BrowserRouter as Router, Switch, Route,Link} from "react-router-dom";
import {Button} from '@material-ui/core';
 import { useState,useEffect } from 'react';
import Soil_Machine from './Soil_Machine';
import Vendorpage from './components/Vendorpage';
import Image from './Image';
function App() {

 const [ user, setLoginUser] = useState({})
  return (
    <div className="App">
  <Router>
  {/* <Switch>
    <Route exact path="/">
      {
        user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
      }
    </Route>
    <Route path="/login">
      <Login setLoginUser={setLoginUser}/>
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </Switch> */}
  <Link to="/">SoilTesting</Link> &emsp;&emsp;
  <Link to= "/Vendors">RentMachines</Link>&emsp;&emsp;
 <Link to="/Register">Register</Link>&emsp;&emsp;
 <Link to="/Login">Login</Link>&emsp;&emsp;

 <Switch>
   <Route path="/" exact component={Image}></Route>
   <Route path="/Vendors" exact component={Vendorpage}></Route>
   <Route path="/Register" exact component={Register}></Route>
   <Route path="/Login" exact component={Login}></Route>
  
 </Switch>
</Router> 

    </div>
  );
}

export default App;

     












    {/* <Router>
        <div className="nav-items">
        <nav>
          <ul>
            <li >
              <Button className="button1"  variant="contained" backgroundColor="orange"><Link to='/'>Home</Link></Button>
            </li>&emsp;&emsp;
            <li>
              <Button className="button2" variant="contained" backgroundColor="orange"><Link to='/login'>Login</Link></Button>
            </li>&emsp;&emsp;
          
            <li>
              <Button className="button3"  variant="contained" backgroundColor="orange"><Link to='/SignUp'>SignUp</Link></Button>
            </li>&emsp;&emsp;
          </ul>
        </nav>
        </div>

        <Switch>
          <Route path="/" exact component={Homepage}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/SignUp"exact component={Register}></Route>
        </Switch>
      </Router> */}
