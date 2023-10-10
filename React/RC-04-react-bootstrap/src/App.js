import React from "react"
import MyNavbar from "./components/MyNavbar";
import 'bootstrap/dist/css/bootstrap.min.css'
import CourseCard from "./components/CourseCard";
import dataaaaa from './data'
import Footer from "./components/Footer";


function App() {
  return (
    <div >
     <MyNavbar/>
     <CourseCard veri = {dataaaaa}/>
     <Footer/>
    </div>
  );
}

export default App;
