import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    const styles ={
    };
    return (
        <div className="App">
            <NavBar styles={styles} />
            <main style={{marginTop: '0px'}}>
                <p>This is the page content </p>
            </main>
      </div>
    );
  }
}

export default App;
