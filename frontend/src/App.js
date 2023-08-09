
import './App.css';
//Import Bootstrap
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
//Import BrowserRoute
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Student from './Component/Students';
import CreateStudent from './Component/CreateStudent';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          {/*Roter for get All*/}
          <Route path='/' element={<Student />}></Route>
          <Route path='NewStudent' element={<CreateStudent/>}></Route>
        </Routes>


      </BrowserRouter>


    </div>
  );
}

export default App;
