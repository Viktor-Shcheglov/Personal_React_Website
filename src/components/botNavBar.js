import React from "react";
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import MenuBookIcon from '@material-ui/icons/MenuBook';
class BotBar extends React.Component {
constructor(props) {
        super(props);
        this.state = {
          value: 0,
          size: 1000
        };
      }
updateDimensions() {
    let update_height = window.innerHeight;
    this.setState({size:update_height});
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
    <BottomNavigation
      value={this.state.value}
      onChange={(event, newValue) => {
        this.setState({value:newValue});
      }}
      showLabels
      style={{backgroundColor: "rgba(0, 0, 0, 0)"}}
    >
      <BottomNavigationAction target="_blank" href="https://www.linkedin.com/in/viktor-shcheglov/" label="LinkedIn" icon={<LinkedInIcon style={{color:"red"}} />} />
      <BottomNavigationAction target="_blank" href="https://github.com/Viktor-Shcheglov" label="GitHub" icon={<GitHubIcon style={{color:"red"}}/>} />
      <BottomNavigationAction  href="https://drive.google.com/file/d/1gkiw7W3PciwtSTQI7wSkiJPSy7kZDRIm/view?usp=sharing" target="_blank" label="Resume" icon={<MenuBookIcon style={{color:"red"}}/>} />
    </BottomNavigation>
  );
}
}
export default BotBar;