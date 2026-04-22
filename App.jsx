import { useState } from "react";
import Header from "./components/Header";
import StudentTable from "./components/StudentTable";
import AddStudentForm from "./components/AddStudentForm";
import "./App.css";

function App() {
  const [students, setStudents] = useState([
    { id: 1, name: "Aman", score: 45 },
    { id: 2, name: "Riya", score: 30 }
  ]);

  const updateScore = (id, score) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, score: Number(score) } : s
      )
    );
  };

  const addStudent = (name, score) => {
    setStudents([
      ...students,
      { id: Date.now(), name, score: Number(score) }
    ]);
  };

  return (
    <div className="container">
      <Header />
      <AddStudentForm addStudent={addStudent} />
      <StudentTable students={students} updateScore={updateScore} />
    </div>
  );
}

export default App;