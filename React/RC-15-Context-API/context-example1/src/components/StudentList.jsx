import React, { useContext } from "react";
import StudentItem from "./StudentItem";
import { StudentContext } from "../App";

const StudentList = () => {
  //! 3-Context'ten students verisini okuduk
  const { students } = useContext(StudentContext);
  return (
    <div>
      {students.map((student) => (
        <StudentItem
          key={student.id}
          student={student}
          // changeColor={changeColor}
        />
      ))}
    </div>
  );
};

export default StudentList;
