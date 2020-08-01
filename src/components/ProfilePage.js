import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Button';
import BusinessIcon from '@material-ui/icons/Business';
import SchoolIcon from '@material-ui/icons/School';
import BuildIcon from '@material-ui/icons/Build';
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
  <Box style={{background:"Aqua",color:"white",cursor:"auto"}} clone>
    <div>
    <h3>Travelers | Software Enginner and Architecture Intern |May 2020 - September 2020| Hartford,CT</h3>
    <ul style={{textAlign:"left"}}>
      <li>Developed proof of concept for single sign-on using React.js and Okta OAuth 2.0 hosted on Amazon Web Services.</li>
      <li>Tested the React.js site by writing Terraform scripts to automate hosting of the site on AWS and PCF to identify the cheapest hosting option.</li>
      <li>Assisted in the design and deployment of Travelers Sustainability Site with the goal of reducing hosting price. </li>
      <li>Utilized Gatsby.js (a React.js library) to host the Travelers Sustainability Site on an AWS S3 Bucket. </li>
      <li>Collaborated with 7 engineers and interns to develop an internal event scheduler and signup tool for volunteering events for employees.</li>
      <li>Utilized React.js and HTML/CSS to design the front-end UI and Express.js and Node.js to design the back-end API that interacts with a PostgreSQL database for the internal event scheduler. </li>
    </ul>
  </div>
  </Box>  
    )
const Results1 = () => (
  <Box style={{background:"red",color:"white"}} clone>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEAeSE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
</Box>
)
const Results2 = () => (
  <Box style={{background:"red",color:"white"}} clone>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
  <p>SHOW STUFF PLEASE</p>
</Box>)

      return (
        <>
        <div>
        <div id="background" style={{
            backgroundImage: 'url("https://images5.alphacoders.com/329/329713.jpg")',
            backgroundPosition:"center",
            backgroundSize:"cover",
            }}><h1 style={{marginTop:"0px",fontSize: "3rem",fontWeight: "bold",fontFamily:"Comic Sans MS",fontStyle: "italic",color:"orange"}}>Viktor Shcheglov Full Stack Developer</h1></div>
            <h2 style={{marginTop:"0px",fontSize: "1.5rem",fontFamily:"Raleway",color:"black"}}>
                Welcome to my site! I am a college student proficient in Python, React.js and Node.js seaking an Internship for the 2021 Summer.
                <br></br>I have previously worked for two summers in various companies in Software Development and Architecture Intern positions.
                <br></br>You can find my complete information in the sections bellow or my most relevant expirience in my <a style={{color:"darkRed",textDecoration: "none"}} rel="noopener noreferrer" target="_blank" href="https://drive.google.com/file/d/1gkiw7W3PciwtSTQI7wSkiJPSy7kZDRIm/view?usp=sharing">Resume.</a>
                <br></br>Some of my projects can be found on this site in the Navigation Bar and all the source code can be found on my <a style={{color:"darkRed",textDecoration: "none"}} rel="noopener noreferrer" target="_blank" href="https://github.com/Viktor-Shcheglov">GitHub.</a>
            </h2>
        </div>
        <div width="100%" style={{display: 'flex',justifyContent: 'center'}}>
            <Breadcrumbs aria-label="breadcrumb" style={{color:"white",fontSize:"16px"}}>
                <Button  style={{color:"white",fontSize:".6rem",padding:"6px"}} variant="contained" color="secondary" target="_blank" onClick={onClickExp}><BusinessIcon color="white" style={{marginRight:"2px"}}/>Experience</Button>
                <Button  style={{color:"white",fontSize:".6rem",padding:"6px"}} variant="contained" color="secondary" target="_blank" onClick ={onClickEdu}><SchoolIcon color="white" style={{marginRight:"2px"}}/>Education</Button>
                <Button  style={{color:"white",fontSize:".6rem",padding:"6px"}} variant="contained" color="secondary" target="_blank" onClick={onClickTech}><BuildIcon color="white" style={{marginRight:"2px"}}/>Tech Skills</Button>
            </Breadcrumbs>
        </div>
        <div>
        <p style = {{color:"white",cursor:"auto"}}>{showExp ? <Results/>  : null}</p>
        <p style = {{color:"white"}}>{showEdu ? <Results1/> : null}</p>
        <p style = {{color:"white"}}>{showTech ? <Results2/> : null}</p>
        </div>
        </>
      );
}

export default LoginControl;
