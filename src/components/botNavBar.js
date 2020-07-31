import React, { Component,useState} from "react";
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
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
    console.log(innerHeight)
  return (
    <BottomNavigation
      value={this.state.value}
      onChange={(event, newValue) => {
        this.setState({value:newValue});
      }}
      showLabels
      style={{backgroundColor: "rgba(0, 0, 0, 0)"}}
    >
      <BottomNavigationAction label="Recents" icon={<RestoreIcon style={{color:"red"}} />} />
      <BottomNavigationAction label="Favorites" icon={<FavoriteIcon style={{color:"red"}}/>} />
      <BottomNavigationAction label="Nearby" icon={<LocationOnIcon style={{color:"red"}}/>} />
    </BottomNavigation>
  );
}
}
export default BotBar;