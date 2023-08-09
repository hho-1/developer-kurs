import React from 'react'
import CourseCard from './pages/CourseCard'
import Footer from './components/Footer'
import MyNavbar from './components/MyNavbar'
import "bootstrap/dist/css/bootstrap.min.css"
import Teacher from './pages/Teacher'
import ContactForm from './pages/ContactForm'
import Home from './pages/Home'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { BrowserRouter , Route, Routes } from 'react-router-dom'
import NotFound from './pages/NotFound'
import TeacherDetails from './pages/TeacherDetails'
import CardDetails from './pages/CardDetails'
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <MyNavbar />
        <Routes>
          {/* / (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu
         / başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir . */}
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/courses" element={<CourseCard />} />
          <Route path="/courses/:name" element={<CardDetails/>}/>
          <Route path="/teacher" element={<Teacher />} />
          <Route path="/teacher/:id" element={<TeacherDetails/>} />
          <Route path="*" element={<NotFound/>}/>


        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App
