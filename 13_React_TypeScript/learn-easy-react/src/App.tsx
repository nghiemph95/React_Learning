import { useState } from 'react';
import './App.css';
import { MyText } from './features/labs/MyText';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';

function App() {
  const nghiem: Student = {
    name: 'Nghiem',
    age: 3,
  };

  function handleStudentClick(student: Student) {
    console.log('Student Click');
  }

  return (
    <div>
      <StudentCard student={nghiem} onClick={handleStudentClick} />

      <MyText></MyText>
      <MyText>easy typescipt</MyText>
      <MyText>{123}</MyText>
      <MyText>{false}</MyText>
      <MyText>{null}</MyText>
      <MyText>{undefined}</MyText>

      <MyText>
        <span>easy</span>
      </MyText>

      <MyText>
        <span>easy</span> typescipt
      </MyText>

      <MyText>
        <span>easy</span>
        <span>typescipt</span>
      </MyText>
    </div>
  );
}

export default App;
