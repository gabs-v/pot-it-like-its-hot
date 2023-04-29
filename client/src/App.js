import './App.css';
import React, {useState} from 'react';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Form from './components/Form';
import All from './components/All';

function App() {
  const [plantList, setPlantList] = useState([])
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/newEntry' element={<Form/>}/>
        <Route path='/all' element={<All/>} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
