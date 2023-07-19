import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Listing from './components/Listing';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Listing/>}/>
     </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
