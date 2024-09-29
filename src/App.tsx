import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import NavBar from './components/nav-bar/nav-bar';
import Home from './pages/home/home';
import './App.css';

const pages = [
  { name: 'ABOUT ME', path: '/home' },
  { name: 'EXPERIENCE', path: '/home' },
  { name: 'PROJECTS', path: '/home' },
  { name: 'CONTACT ME', path: '/home' },
  { name: 'RESUME', path: '/home' },
];

function App() {
  return (
    <div className="App">
       <Router>
      <NavBar pages={pages} />
      <Routes>
        <Route path="/home" element={<Home displayText="Home Page Coming Soon!" />} />
      </Routes>
    </Router>

      

    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.tsx</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
