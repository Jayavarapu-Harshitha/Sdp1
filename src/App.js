import React,{useEffect} from "react"
import './App.css';
import Navigate from "./Components/Navigation";


function App() {
 
  useEffect(() => {

    document.title=`Krushiphala`
  
  })
  return (
    <div className="App">
    <Navigate/>
    </div>
  );
}

export default App;
