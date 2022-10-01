import React from "react";
import AreaZoomChart from "./components/AreaZoomChart";
import GantZoomChart from "./components/GantZoomChart";
import './App.css'

export default function App() {

  return (
    <div className="container">
      <div className="parent">
        <div className="div1"> 
          <AreaZoomChart/>
        </div>
        <div className="div2"> 
          <GantZoomChart/>
        </div>
        
      </div>
    </div>     
  );  
}
