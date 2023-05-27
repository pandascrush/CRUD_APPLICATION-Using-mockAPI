import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { Create } from './Components/Create';
import Update from './Components/Update';
import Read from './Components/Read';

function App() {
  return (
    <div className="main">
      <h1>CRUD OPERATION</h1>
    <BrowserRouter>
    <Routes>
      <Route path='/create' element={<Create/>} />
      <Route path='/read' element={<Read/>}/>
      <Route path='/update' element={<Update/>} />
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
