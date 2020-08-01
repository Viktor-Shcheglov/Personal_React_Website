import React, { Component,useLayoutEffect, useState } from "react";
import './App.css';
import NavBar from './components/NavBar'
import BotBar from './components/botNavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProfilePage from './components/ProfilePage';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Grid from '@material-ui/core/Grid';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      size: 1000,
      testDive: document.getElementById("bot")
    };
  }
  updateDimensions() {
    let update_height = window.innerHeight;
    this.setState({size:update_height});
    console.log(this.state.testDive)
    }
  componentDidMount() {
    this.updateDimensions();
    window.addEventListener("resize", this.updateDimensions.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions.bind(this));
  }
  render(){
    const { testDive,setTest} = this.state;
    return (
        <div className="App" >
          <div id="background" style={{
            backgroundColor: '#C2CAD0',
            backgroundAttachment: "fixed",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            }}>
            <Router>
              <CssBaseline />
              <NavBar />
              <Route path="/" component={ProfilePage}/>
              {/*<div style={{display:"flex",flex:"1",flexDirection:"column"}} />*/}
              <img src="https://www.wafttech.com/public/blog/0812552A25FAC79-DC1C91108F000B3-stack%20-%20Copy.png" alt="programing langauges" style={{objectFit:"cover",maxWidth: "100%",marginBottom:"6rem",width:"50%",height:"50%"}}/>
              <BotBar />
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
