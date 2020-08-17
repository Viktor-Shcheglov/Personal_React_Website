import React from "react";
import { BrowserRouter as Router, Route,Switch,Link} from 'react-router-dom';
import bloger from './components/blog'
import test from './components/test';
class App extends React.Component {
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
            <Router>
              <Route path="/blog" exact = {true}component={bloger}/>
              <Route path="/" exact={true} component={test}/>
              {/*<div style={{marginTop:"auto",bottom:"0",margin:"auto",textAlign:"center",display: "flex",justifyContent:"center",width:"100%"}}><BotBar /> </div>*/}
            </Router>
      </div>
    );
  }
}

export default App;
