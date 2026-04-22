import { useState } from "react";

function AddStudentForm({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !score) {
      alert("Please fill all fields");
      return;
    }

    if (score < 0 || score > 100) {
      alert("Score must be between 0 and 100");
      return;
    }

    // Capitalize name
    const formattedName =
      name.charAt(0).toUpperCase() + name.slice(1);

    addStudent(formattedName, score);

    setName("");
    setScore("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="number"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
        required
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default AddStudentForm;