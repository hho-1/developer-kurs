import React from "react"
import "./App.scss"
import Header from "./components/header/Header";
import data from './data'
import Card from "./components/card/Card";


function App() {
  return (
    <div >
   <Header/>
   <Card veri ={data}/>
    </div>
  );
}

export default App;
