import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 0,
  },
  bar:{
    background : '#2E3B55'
  },
  Logo:{
    fontWeight: "bold"
  },
  title: {
    flexGrow: 1,
  },
  items:{
    color:"#F0FFFF",
    [theme.breakpoints.down('548')]: {
      display: 'none',
    }
  },
  menuButton:{
    [theme.breakpoints.up('548')]: {
      display: 'none',
    }
  },
}));

const NavBar = (props) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const [anchorEl1, setAnchorEl1] = React.useState(null);
  const handleClick1 = (event) => {
    setAnchorEl1(event.currentTarget);
  };
  const handleClose1 = () => {
    setAnchorEl1(null);
  };
  return (
    <div className={classes.root}>
      <AppBar className ={classes.bar} position="sticky" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar className={classes.tolbar1}>
          <Button  href ="/" color="inherit"><Typography variant="h6" style={{color:"black"}}className={classes.Logo} href="/">Viktor Shcheglov</Typography></Button>
          <div style={{flex:1}}/>
          <Button variant="contained" color="secondary" className={classes.items} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Projects
          </Button>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Algorithm Visualizer</MenuItem>
            <MenuItem onClick={handleClose}>Finance Tracker</MenuItem>
          </Menu>
          <Button variant="contained" color="secondary" style={{marginLeft:"10px"}} className={classes.items} href="https://drive.google.com/file/d/1gkiw7W3PciwtSTQI7wSkiJPSy7kZDRIm/view?usp=sharing" target="_blank" >Resume</Button>
          <Button variant="contained" color="secondary" style={{marginLeft:"10px"}}className={classes.items} href ="https://github.com/Viktor-Shcheglov" target="_blank" >GitHub</Button>

          <IconButton aria-controls="simple-menu1" onClick={handleClick1} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Menu
            id="simple-menu1"
            anchorEl={anchorEl1}
            keepMounted
            open={Boolean(anchorEl1)}
            onClose={handleClose1}
          >
            <MenuItem onClick={handleClose1}>Algorithm Visualizer</MenuItem>
            <MenuItem onClick={handleClose1}>Finance Tracker</MenuItem>
            <MenuItem component="a" href="https://drive.google.com/file/d/1gkiw7W3PciwtSTQI7wSkiJPSy7kZDRIm/view?usp=sharing" target="_blank" onClick={handleClose1} >Resume</MenuItem>
            <MenuItem component="a" href="https://github.com/Viktor-Shcheglov" target="_blank" onClick={handleClose1}>GitHub</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default NavBar;