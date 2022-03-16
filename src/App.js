import './App.css';
import React, {useState} from 'react';
import { PanelList } from './Components/PanelList';
import { AllStudents } from './Components/AllStudents';
import { AddStudents } from './Components/AddStudents';
import { EditStudents } from './Components/EditStudents';
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import { GenerateReports } from './Components/GenerateReports';

// 1. Create Context
export const studentContext = React.createContext();

export default function App() {
  const [student, setStudent] = useState(
    [
      {
        name: 'Jayesh Jawale',
        email: 'jawalejayesh123@gmail.com',
        mobile: '8600973371',
        batch: 'B251WE'
      },
      {
        name: 'Jessy Pinkman',
        email: 'jessypinkman@gmail.com',
        mobile: '1234567890',
        batch: 'B255WD'
      },
      {
        name: 'Lary Harry',
        email: 'larryharry@gmail.com',
        mobile: '987653210',
        batch: 'B260WE'
      }
    ]
  )

  return (
  <div className="App">
    <div className='admin-dashboard'>
    <BrowserRouter>
    {/* 2. Provide Context */}
    <studentContext.Provider value={{student, setStudent}}>
      <div><PanelList /></div>
      <div>
      <Routes>
        <Route exact path="/" element={<GenerateReports />} />
        <Route path="/dashboard" element={<GenerateReports />} />
        <Route path="/all-students" element={<AllStudents />} />
        <Route path="/add-students" element={<AddStudents />} />
        <Route path="/edit-students/:id" element={<EditStudents />} />
      </Routes>
      </div>
      </studentContext.Provider>
    </BrowserRouter>
    </div>
  </div>
  );
}