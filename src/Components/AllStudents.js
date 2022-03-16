import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import {Link} from 'react-router-dom'
import { studentContext } from '../App';

export function AllStudents() {
    // Subscribe to a context
    const studentData = React.useContext(studentContext);

    // Delete student
    const deleteStudent = (index) => {
      const student = [...studentData.student];
      student.splice(index,1);
      studentData.setStudent(student);
    }

    const StyledTableCell = styled(TableCell)(({ theme }) => ({
      [`&.${tableCellClasses.head}`]: {
        backgroundColor: 'rgb(93, 130, 209)',
        color: theme.palette.common.white,
      },
      [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
      },
    }));
    
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
      // hide last border
      '&:last-child td, &:last-child th': {
        border: 0,
      },
    }));

    return (
      <div className='all-students'>
      <h1 style={{textAlign: 'center', fontSize: '1.5rem', fontWeight: '600'}}>All Student Records</h1>

      <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
          <StyledTableCell>Id</StyledTableCell>
            <StyledTableCell align="right">Name</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Mobile</StyledTableCell>
            <StyledTableCell align="right">Batch</StyledTableCell>
            <StyledTableCell></StyledTableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {studentData.student.map(({name, email, mobile, batch}, index) => (
            <StyledTableRow>
              <StyledTableCell> {index + 1} </StyledTableCell>
              <StyledTableCell align="right">{name}</StyledTableCell>
              <StyledTableCell align="right">{email}</StyledTableCell>
              <StyledTableCell align="right">{mobile}</StyledTableCell>
              <StyledTableCell align="right">{batch}</StyledTableCell>
              <StyledTableCell align="right">

                <Link to={`/edit-students/${index}`}>
                <IconButton color='secondary'>
                  <EditIcon style={{marginRight:20}} />
                </IconButton>
                </Link>

                <IconButton color='error' onClick={() => deleteStudent(index)}>
                  <DeleteIcon />
                </IconButton>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
    )
}