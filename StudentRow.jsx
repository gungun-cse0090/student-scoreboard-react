function StudentRow({ student, updateScore }) {
  const isPass = student.score >= 40;

  return (
    <tr className={isPass ? "pass" : "fail"}>
      <td>{student.name}</td>
      <td>
        <input
          type="number"
          value={student.score}
          onChange={(e) =>
            updateScore(student.id, e.target.value)
          }
        />
      </td>
      <td>{isPass ? "Pass" : "Fail"}</td>
    </tr>
  );
}

export default StudentRow;