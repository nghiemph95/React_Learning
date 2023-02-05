import { useEffect, useState } from 'react';
import './App.css';
import Widget from './components/common/Widget';
import MainLayout from './components/Layout/MainLayout';
import { MyText } from './features/labs/MyText';
import { StudentCard } from './features/labs/Student';
import { Student } from './models/student';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(true);
    }, 2000);
  }, []);

  const nghiem: Student = {
    name: 'Nghiem',
    age: 3,
  };

  function handleStudentClick(student: Student) {
    console.log('Student Click');
  }

  if (loading) return <p>loading...</p>;

  return (
    <div>
      <MainLayout>
        <StudentCard student={nghiem} onClick={handleStudentClick} />
      </MainLayout>

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

      <div>
        <div>
          <Widget title="Earning Overview">Chart 1</Widget>
        </div>
        <div>
          <Widget title="Revenue Source">Chart 2</Widget>
        </div>
        <div>
          <Widget title="Earning Overview">Chart 3</Widget>
        </div>
        <div>
          <Widget title="Earning Overview">Chart 4</Widget>
        </div>
      </div>
    </div>
  );
}

export default App;
