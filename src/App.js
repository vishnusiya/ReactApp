import './App.css';
import Navbar from './Navbar';
import Home from './Home';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Create from './Create';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className='content'>
        <Home/>
      </div>
    </div>

  );
}

export default App;
