import React from "react";
import './App.css';
import NavBar from './components/NavBar'
import BotBar from './components/botNavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import ProfilePage from './components/ProfilePage';
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
    return (
        <div className="App" >
          <div id="background" style={{
            backgroundColor: '#C2CAD0',
            backgroundAttachment: "fixed",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            minHeight:"100vh"
            }}>
            <Router>
              <CssBaseline />
              <NavBar />
              <Route path="/" component={ProfilePage}/>
              <div style={{marginTop:"auto",bottom:"0",margin:"auto",textAlign:"center",display: "flex",justifyContent:"center",width:"100%"}}><BotBar /> </div>
            </Router>
          </div>
      </div>
    );
  }
}

export default App;
