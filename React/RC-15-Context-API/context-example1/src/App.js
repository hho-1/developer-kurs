import React, { createContext, useState } from "react";
import Home from "./pages/Home";
import data from "./data";

//? 1-Context oluşturma
export const StudentContext = createContext();
// export const {Provider} = createContext();

function App() {
  const [students, setStudents] = useState(data);
  const changeColor = (studentID, color) => {
    const newStudents = students.map((student) =>
      student.id === studentID ? { ...student, color: color } : student
    );
    setStudents(newStudents);
  };
  return (
    <div>
      {/* <Home students={students} changeColor={changeColor} /> */}
      {/* //? 2-Provider ile ilgili yapıyı sarmallama */}
      <StudentContext.Provider value={{ students, changeColor }}>
        <Home />
      </StudentContext.Provider>
    </div>
  );
}
export default App;
