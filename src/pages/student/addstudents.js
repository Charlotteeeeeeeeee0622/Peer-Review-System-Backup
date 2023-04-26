import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { Outlet } from 'react-router-dom';
import { useContext} from 'react';
import Header from '../../components/Header';
import { List, ListItemButton, ListItemText } from '@mui/material';
import { Stack } from '@mui/system';
import { RouterData } from '../../mockData/routeData';

import React, { useState, useEffect } from 'react';

const StudentCheckboxList = () => {
  const [students, setStudents] = useState(['Mike', 'Garry', 'Mary', 'John', 'Wu']);
  const [selectedStudents, setSelectedStudents] = useState(() => {
    const savedStudents = localStorage.getItem('selectedStudents');
    return savedStudents ? JSON.parse(savedStudents) : [];
  });

  useEffect(() => {
    localStorage.setItem('selectedStudents', JSON.stringify(selectedStudents));
  }, [selectedStudents]);

  const handleCheckboxChange = (event) => {
    const studentName = event.target.value;
    if (event.target.checked) {
      setSelectedStudents([...selectedStudents, studentName]);
    } else {
      setSelectedStudents(selectedStudents.filter(name => name !== studentName));
    }
  };

  return (
    <div>
      <h2>Students:</h2>
      {students.map((student, index) => (
        <div key={index}>
          <input
            type="checkbox"
            id={student}
            name={student}
            value={student}
            checked={selectedStudents.includes(student)}
            onChange={handleCheckboxChange}
          />
          <label htmlFor={student}>{student}</label>
        </div>
      ))}
      <h2>Selected Students:</h2>
      {selectedStudents.map((student, index) => (
        <div key={index}>
          {student}
        </div>
      ))}
    </div>
  );
};

export default StudentCheckboxList;