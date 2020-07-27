import React from 'react';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';
function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
  }
class LoginControl extends React.Component {
    constructor(props) {
      super(props);
      this.handleLoginClick = this.handleLoginClick.bind(this);
      this.handleLogoutClick = this.handleLogoutClick.bind(this);
      this.state = {isLoggedIn: false};
    }
  
    handleLoginClick() {
      this.setState({isLoggedIn: true});
    };
  
    handleLogoutClick() {
      this.setState({isLoggedIn: false});
    };
    render() {
      const isLoggedIn = this.state.isLoggedIn;
      let button;
  
      if (isLoggedIn) {
        button = <LogoutButton onClick={this.handleLogoutClick} />;
      } else {
        button = <LoginButton onClick={this.handleLoginClick} />;
      }
  
      return (
        <>
        <div width="100%">
            <h1 style={{marginTop:"0px",fontSize: "50px",fontWeight: "bold",fontFamily:"Comic Sans MS",fontStyle: "italic",color:"white"}}>Viktor Shcheglov Full Stack Developer</h1>
            <h2 style={{marginTop:"0px",fontSize: "26px",fontFamily:"Raleway",color:"white"}}>
                Welcome to my site! I am a college student proficient in Python, React.js and Node.js seaking an Internship for the 2021 Summer.
                <br></br>I have previously worked for two summers in various companies in Software Development and Architecture Intern positions.
                <br></br>You can find my complete information in the sections bellow or my most relevant expirience in my <a style={{color:"Red",textDecoration: "none"}} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1gkiw7W3PciwtSTQI7wSkiJPSy7kZDRIm/view?usp=sharing">Resume.</a>
                <br></br>Some of my projects can be found on this site in the Navigation Bar and all the source code can be found on my <a style={{color:"Red",textDecoration: "none"}} rel="noopener noreferrer" target="_blank" href="https://github.com/Viktor-Shcheglov">GitHub.</a>
            </h2>
        </div>
        <div width="100%" style={{display: 'flex',justifyContent: 'center'}}>
            <Breadcrumbs aria-label="breadcrumb" style={{color:"white",fontSize:"16px"}}>
                <Button  style={{color:"white",fontSize:"11px"}} variant="contained" color="secondary" target="_blank" >Expirience</Button>
                <Button  style={{color:"white",fontSize:"11px"}} variant="contained" color="secondary" target="_blank" >Education</Button>
                <Button  style={{color:"white",fontSize:"11px"}} variant="contained" color="secondary" target="_blank" >Tech Skills</Button>
            </Breadcrumbs>
        </div>
        <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
        </div>
        </>
      );
    }
  }
  
  function UserGreeting(props) {
    return <h1>Welcome back!</h1>;
  }
  
  function GuestGreeting(props) {
    return <h1>Please sign up.</h1>;
  }
  
  function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
      return <UserGreeting />;
    }
    return <GuestGreeting />;
  }
  
  function LoginButton(props) {
    return (
      <button onClick={props.onClick}>
        Login
      </button>
    );
  }
  
  function LogoutButton(props) {
    return (
      <button onClick={props.onClick}>
        Logout
      </button>
    );
  }

export default LoginControl;
