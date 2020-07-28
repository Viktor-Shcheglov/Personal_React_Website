import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import Test from './test'

const LoginControl =(props)=>  {
    const [showEdu,setEdu] = React.useState(false);
    const [showExp,setExp] = React.useState(false);
    const [showTech,setTech] = React.useState(false);
    const onClickExp = () =>{
    setExp(!showExp);
    setEdu(false);
    setTech(false);
  }
  const onClickEdu = () =>{
    setExp(false);
    setEdu(!showEdu);
    setTech(false);
  }
  const onClickTech = () =>{
    setExp(false);
    setEdu(false);
    setTech(!showTech);
  }
const Results = () => (
    <div id="results" className="search-results" >
      Something 
    </div>)
const Results1 = () => (
    <div id="results" className="search-results" >
      Something1
    </div>)
const Results2 = () => (
    <div id="results" className="search-results" >
      Something2
    </div>)
    
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
                <Button  style={{color:"white",fontSize:"11px"}} variant="contained" color="secondary" target="_blank" onClick={onClickExp}>Expirience</Button>
                <Button  style={{color:"white",fontSize:"11px"}} variant="contained" color="secondary" target="_blank" onClick ={onClickEdu}>Education</Button>
                <Button  style={{color:"white",fontSize:"11px"}} variant="contained" color="secondary" target="_blank" onClick={onClickTech}>Tech Skills</Button>
            </Breadcrumbs>
        </div>
        <div>
        <p style = {{color:"white"}}>{showExp ? <Results/> : null}</p>
        <p style = {{color:"white"}}>{showEdu ? <Results1/> : null}</p>
        <p style = {{color:"white"}}>{showTech ? <Results2/> : null}</p>
        <Test />
        </div>
        </>
      );
}

export default LoginControl;
