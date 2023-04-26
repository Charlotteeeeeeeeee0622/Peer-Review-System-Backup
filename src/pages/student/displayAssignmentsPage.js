import React, { useState, useEffect } from "react";
import { Button } from "@mui/material";

const DisplayAssignmentsPage = () => {
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  const handleDelete = (id) => {
    const updatedAssignments = assignments.filter((assignment) => assignment.id !== id);
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
  };

  return (
    <div>
      <h1>Display Assignments Page</h1>
      {assignments.map((assignment) => (
        <div key={assignment.id} style={{ marginBottom: "20px" }}>
          <h2>{assignment.title}</h2>
          <p>{assignment.description}</p>
          <p>Due Date: {assignment.dueDate}</p>
          <Button variant="contained" color="error" onClick={() => handleDelete(assignment.id)}>
            Delete
          </Button>
        </div>
      ))}
    </div>
  );
};

export default DisplayAssignmentsPage;