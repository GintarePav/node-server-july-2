import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import StudentCard from "../StudentCard/StudentCard";
import apiCall from "../../services/apiServices";
import { useState, useEffect } from "react";

const App = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const data = await apiCall();
      if (data) {
        setStudents(data.moksleiviai);
      }
    };
    getData();
  }, []);

  return (
    <div className="App">
      <section className="container d-flex flex-row flex-wrap">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            id={student.id}
            firstName={student.firstname}
            lastName={student.lastName}
            class={student.class}
            gradeMath={student.subjects_grades.math}
            gradePhysics={student.subjects_grades.physics}
            gradeChemistry={student.subjects_grades.chemistry}
          />
        ))}
      </section>
    </div>
  );
};

export default App;
