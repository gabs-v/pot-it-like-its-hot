import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Form from './components/Form';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route path='/newEntry' element={<Form/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
