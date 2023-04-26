import React, { useState,useEffect } from "react";
import { Button } from "@mui/material";
import DisplayAssignmentsPage from "./displayAssignmentsPage";

const CreateAssignmentPage = () => {
  const [assignments, setAssignments] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const newAssignment = {
        id: new Date().getTime(), // Use the current time as the ID
        title,
        description,
        dueDate
      };
    const updatedAssignments = [...assignments, newAssignment];
    setAssignments(updatedAssignments);
    localStorage.setItem("assignments", JSON.stringify(updatedAssignments));
    setTitle("");
    setDescription("");
    setDueDate("");
  };

  useEffect(() => {
    const storedAssignments = localStorage.getItem("assignments");
    if (storedAssignments) {
      setAssignments(JSON.parse(storedAssignments));
    }
  }, []);

  return (
    <div>
      <h1>Create Assignment Page</h1>
      <form onSubmit={handleSubmit}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Title:
            <textarea
              rows="2"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Description:
            <textarea
              rows="2"
              value={description}
              onChange={(event) => setDescription(event.target.value)}
            />
          </label>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label>
            Due Date:
            <input
              type="date"
              value={dueDate}
              onChange={(event) => setDueDate(event.target.value)}
            />
          </label>
        </div>
        <Button type="submit" variant="contained">
          Create
        </Button>
        <Button style={{marginLeft: '10px'}} href="/displayAssignmentsPage" variant="contained">
          View Assignments
        </Button>
      </form>
      
    </div>
  );
};

export default CreateAssignmentPage;