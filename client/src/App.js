import './App.css';
import React, {useState} from 'react';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import All from './components/All';
import Form from './components/Entry';

function App() {

  const [plants, setPlants] = useState([])

  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
      <Route path='/newEntry' element={<Form plants={plants} setPlants={setPlants} />}/>
      <Route path='/home' element={<All plant={plants} setPlant={setPlants} />} />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
