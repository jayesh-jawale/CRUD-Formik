import React from 'react';
import { useState } from 'react'
import { useParams } from "react-router-dom";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import { useNavigate } from 'react-router-dom';
import { studentContext } from '../App';

export function EditStudents () {
    // Subscribe to a context
    const studentData = React.useContext(studentContext);
    const {id} = useParams();

    const nav = useNavigate();
    const data = studentData.student[id];

    const [name, setName] = useState(data.name);
    const [email, setEmail] = useState(data.email);
    const [mobile, setMobile] = useState(data.mobile);
    const [batch, setBatch] = useState(data.batch);

    const editStudent = () => {
        const updatedStudent = {
            name,
            email,
            mobile,
            batch
        }
        const copyStudent = [...studentData.student];
        copyStudent[id] = updatedStudent;
        studentData.setStudent(copyStudent);
        nav('/all-students')
    }

    return (
    <div>
        <h1 style={{textAlign: 'center', fontSize: '1.5rem', fontWeight: '600'}}>Edit Student Record</h1>

        <form className='add-students'>
        <TextField label="Enter Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)}
        />

        <TextField label="Enter Email" variant="outlined" value={email} onChange={(e) => setEmail(e.target.value)}
        />
    
        <TextField label="Enter Mobile" variant="outlined" value={mobile} onChange={(e) => setMobile(e.target.value)}
        />
    
        <TextField label="Enter Batch" variant="outlined" value={batch} onChange={(e) => setBatch(e.target.value)}
        />
    
        <Button onClick={editStudent} type="submit" variant="contained">Save</Button>
      </form>
    </div>
    )
}