
import './App.css';
//Import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Import BrowserRoute
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Students from './Component/Students';

import CreateStudent from './Component/CreateStudent';
//Import the Edit Student Componet
import EditeStudent from './Component/EditeStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*Roter for get All*/}
          <Route path='/' element={<Students />}></Route>
          {/*NewStudentRoute*/}
          <Route path='NewStudent' element={<CreateStudent />}></Route>
          {/*Edite student Route*/}
          <Route path='Edit/:id' element={<EditeStudent />}></Route>
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
