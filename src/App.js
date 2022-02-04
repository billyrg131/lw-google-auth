import Login from './login';
import Home from './home';
import './App.css';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import NavBar from './navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/h" element={<Home/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
