import { useState } from 'react';
import './App.css';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';

function App() {
  const nghiem: Student = {
    name: 'Nghiem',
    age: 3,
  };

  return (
    <div>
      <StudentCard student={nghiem} />
    </div>
  );
}

export default App;
