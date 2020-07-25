import React from 'react';
import './NavBar.css';
let width = window.innerWidth;
console.log(width);
const NavBar = props => (
    <header className = "toolbar">
        <nav className ="toolbar_nav">
            <div></div>
            <div className="toolbar_logo" ><a href="/">Viktor</a></div>
            <div className="spacer"/>
            <div className ="toolbar_items">
                <ul>
                    <li><a href="/Resume">Resume</a></li>
                    <li><a target="_blank" href="https://github.com/Viktor-Shcheglov">GitHub</a></li>
                    <li><a target="_blank" href="https://linkedin.com/in/viktor-shcheglov">LinkedIn</a></li>
                </ul>
            </div>
            <div className="toolbar_items_alt">
                <ul >
                    <li><a href="/Resume">Resume</a></li>
                    <li><a target="_blank" href="https://github.com/Viktor-Shcheglov">GitHub</a></li>
                    <li><a target="_blank" href="https://linkedin.com/in/viktor-shcheglov">LinkedIn</a></li>
                </ul>
            </div>
        </nav>
    </header>
 );
export default NavBar;