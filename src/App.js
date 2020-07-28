import React, { Component } from "react";
import './App.css';
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProfilePage from './components/ProfilePage';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render(){
    const styles ={
    };
    return (
        <div className="App" >
          <div id="background" style={{
          //backgroundImage: 'url("https://images5.alphacoders.com/329/329713.jpg")',
          backgroundColor:"black",
          backgroundRepeat: "repeat-y",
          height: "1900px"}}>
          <Router>
            <CssBaseline />
            <NavBar />
            <Route path="/" component={ProfilePage}/>
          </Router>
          </div>
      </div>
    );
  }
}

export default App;
