import React from "react";
import NavBar from './components/NavBar'
import BotBar from './components/botNavBar'
import { BrowserRouter as Router, Route,Switch} from 'react-router-dom';
import ProfilePage from './components/ProfilePage';
import blog from './components/blog'
import test from './components/test';
import { Navbar } from "reactstrap";
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
          {/*<div id="background" style={{
            backgroundColor: '#C2CAD0',
            backgroundAttachment: "fixed",
            backgroundPosition:"center",
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover",
            minHeight:"100vh"
            }}> */}
            <Navbar/>
            <Router>
              <Switch>
                <Route path="/blog" exact = {true}component={blog}/>
                <Route path="/" exact={true} component={test}/>
               
              </Switch>
              {/*<div style={{marginTop:"auto",bottom:"0",margin:"auto",textAlign:"center",display: "flex",justifyContent:"center",width:"100%"}}><BotBar /> </div>*/}
            </Router>
      </div>
    );
  }
}

export default App;
