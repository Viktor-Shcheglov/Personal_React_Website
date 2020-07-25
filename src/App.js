import React from 'react';
import './App.css';
import NavBar from './components/NavBars/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
function App() {
  return (
      <div className="App">
          <NavBar />
          <main style={{marginTop: '64px'}}>
              <p>This is the page content </p>
          </main>
    </div>
  );
}

export default App;
