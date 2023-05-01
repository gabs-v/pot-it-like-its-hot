import './App.css';
import React, {useState} from 'react';
import { BrowserRouter,Routes,Route, } from 'react-router-dom';
import Main from './components/views/Main';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/' element={<Main/>} default />
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
