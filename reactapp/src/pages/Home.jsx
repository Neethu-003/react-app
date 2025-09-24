import React, { useEffect, useState } from "react";
import axios from "axios";


import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Home() {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/users')
      .then((res) => {
        setEmployees(res.data.users); 
      })
      .catch((err) => console.log("Error fetching data:", err));
  }, []);

  return (
    <div>
      <h2>Employee Dashboard</h2>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="employee table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Age</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Company</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {employees.map((emp) => (
              <TableRow key={emp.id}>
                <TableCell component="th" scope="row">
                  {emp.firstName} {emp.lastName}
                </TableCell>
                <TableCell align="right">{emp.age}</TableCell>
                <TableCell align="right">{emp.email}</TableCell>
                <TableCell align="right">{emp.company?.name}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default Home;
