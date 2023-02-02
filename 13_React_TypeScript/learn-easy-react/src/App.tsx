import { useState } from 'react';
import './App.css';
import { Student } from './features/labs/Student';

function App() {
  return (
    <div>
      <Student name="Nghiem" age={18} isHero hobbyList={['eat', 'sleep', 'code']} sayHello={() => {}} />
    </div>
  );
}

export default App;
