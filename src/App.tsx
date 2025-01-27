import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import logo from './logo.svg';
import NavBar from './components/nav-bar/nav-bar';
import Home from './pages/home/home';
import './App.css';
import { ExperienceCard } from './components/experience-card/experience-card';
import CardCarousel from './components/card-carousel/card-carousel';

const pages = [
  { name: 'ABOUT ME', path: '/home' },
  { name: 'EXPERIENCE', path: '/home' },
  { name: 'PROJECTS', path: '/home' },
  { name: 'CONTACT ME', path: '/home' },
  { name: 'RESUME', path: '/home' },
];

const cards = [
  {title:"title", tags:["tag1", "tag2", "tag3"], image:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", alt:"alt", description:"this is a description muah ha ha ha"},
  {title:"title2", tags:["tag1", "tag2", "tag3"], image:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", alt:"alt", description:"this is a description muah ha ha ha"},
  {title:"title3", tags:["tag1", "tag2", "tag3"], image:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", alt:"alt", description:"this is a description muah ha ha ha"},
  {title:"title4", tags:["tag1", "tag2", "tag3"], image:"https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg", alt:"alt", description:"this is a description muah ha ha ha"},

]

function App() {
  

  return (
    <div className="App">
      <Router>
        <NavBar pages={pages} />
        <Routes>
          <Route path="/home" element={<Home displayText="Home Page Coming Soon!" />} />
        </Routes>
      </Router>

      <CardCarousel cards={cards}/>
      {/* <ExperienceCard title="title" tags={["tag1", "tag2", "tag3"]} image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" alt="alt" description="this is a description muah ha ha ha"/> */}

      

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
