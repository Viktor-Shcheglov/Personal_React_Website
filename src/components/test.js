import React from "react";
import './assets/css/main.css';
import photo from './images/thisone1.jpg'
import { Icon, InlineIcon } from '@iconify/react'; 
import reactIcon from '@iconify/icons-fa-brands/react';
import nodeIcon from '@iconify/icons-fa-brands/node'
import pythonIcon from '@iconify/icons-fa-brands/python'
import awsIcon from '@iconify/icons-fa-brands/aws'
import jsIcon from '@iconify/icons-fa-brands/js-square'
import {Link} from 'react-router-dom';
class BotBar extends React.Component {
    
    render (){

      return (
        <div>
          {/* Nav */}
          <nav id="nav">
            <ul className="container">
              <li><a href="#top">Top</a></li>
              <li><a href="#work">Skills</a></li>
              <li><a href="#portfolio">Expirience</a></li>
              <li><a href="https://drive.google.com/file/d/1iV32OXT6wJGJSAqh40nMt7Yw-N6KkO83/view?usp=sharing" target="_blank" rel="noopener noreferrer">Resume</a></li>
              <li><Link to ="/blog">Blog</Link></li>
            </ul>
          </nav>
          {/* Home */}
          <article id="top" className="wrapper style1">
            <div className="container">
              <div className="row">
                <div className="col-4 col-5-large col-12-medium">
                  <span className="image fit"><img src={photo} alt="" /></span>
                </div>
                <div className="col-8 col-7-large col-12-medium">
                  <header>
                    <h1>Hi. I'm <strong>Viktor Shcheglov</strong>.</h1>
                  </header>
                  <p>I am a college student studying <strong>Computer Science </strong>proficeint in <strong>Full Stack Development </strong> and familiar with <strong>Machine Learning </strong>.</p>
                  <p style={{marginTop:"-2rem"}}>I am currently looking for a <strong>Software Development Internship </strong>for Summer 2021.</p>
                  <a href="#work" className="button large scrolly">Skills</a>
                </div>
              </div>
            </div>
          </article>
          {/* Work */}
          <article id="work" className="wrapper style2">
            <div className="container">
              <header>
                <h2>This site is still under development.</h2>
                <p>Below you can find some languages and technologies I am proficient in.</p>
              </header>
              <div className="row aln-center">
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box style1">
                    <span className="icon featured" />
                    <Icon icon={pythonIcon} width="70" height="70" />
                    <h3>Python</h3>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box style1">
                    <span className="icon solid featured" />
                    <Icon icon={nodeIcon} width="70" height="70" />
                    <h3>Node.js</h3>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box style1">
                    <span className="icon featured fa-brands:react"/>
                    <Icon icon={reactIcon} width="70" height="70" />
                    <h3>React.js</h3>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box style1">
                    <span className="icon featured fa-brands:react"/>
                    <Icon icon={awsIcon} width="70" height="70" />
                    <h3>Amazon Web Services</h3>
                  </section>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <section className="box style1">
                    <span className="icon featured fa-brands:react"/>
                    <Icon icon={jsIcon} width="70" height="70" />
                    <h3>JavaScript</h3>
                  </section>
                </div> 
              </div>
              <footer>
              <p>You can the my complete list of my skills at the end of my resume.</p>
              <a style={{marginTop:"-5px"}} href="https://drive.google.com/file/d/1iV32OXT6wJGJSAqh40nMt7Yw-N6KkO83/view?usp=sharing" target="_blank" className="button large scrolly">Resume</a>
              </footer>
              <a href="#portfolio" className="button large scrolly">Expirience</a>
            </div>
          </article>
          {/* Portfolio */}
          <article id="portfolio" className="wrapper style3">
            <div className="container">
              <header>
                <h2>Aliquam diam neque mus cras blandit.</h2>
                <p>Proin odio consequat  sapien vestibulum consequat lorem dolore feugiat.</p>
              </header>
              <div className="row">
                <div className="col-4 col-6-medium col-12-small">
                  <article className="box style2">
                    <a href="#" className="image featured"><img src="images/pic01.jpg" alt="" /></a>
                    <h3><a href="#">Magna feugiat</a></h3>
                    <p>Ornare nulla proin odio consequat.</p>
                  </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <article className="box style2">
                    <a href="#" className="image featured"><img src="images/pic02.jpg" alt="" /></a>
                    <h3><a href="#">Veroeros primis</a></h3>
                    <p>Ornare nulla proin odio consequat.</p>
                  </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <article className="box style2">
                    <a href="#" className="image featured"><img src="images/pic03.jpg" alt="" /></a>
                    <h3><a href="#">Lorem ipsum</a></h3>
                    <p>Ornare nulla proin odio consequat.</p>
                  </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <article className="box style2">
                    <a href="#" className="image featured"><img src="images/pic04.jpg" alt="" /></a>
                    <h3><a href="#">Tempus dolore</a></h3>
                    <p>Ornare nulla proin odio consequat.</p>
                  </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <article className="box style2">
                    <a href="#" className="image featured"><img src="images/pic05.jpg" alt="" /></a>
                    <h3><a href="#">Feugiat aliquam</a></h3>
                    <p>Ornare nulla proin odio consequat.</p>
                  </article>
                </div>
                <div className="col-4 col-6-medium col-12-small">
                  <article className="box style2">
                    <a href="#" className="image featured"><img src="images/pic06.jpg" alt="" /></a>
                    <h3><a href="#">Sed amet ornare</a></h3>
                    <p>Ornare nulla proin odio consequat.</p>
                  </article>
                </div>
              </div>
              <footer>
                <p>Lorem ipsum dolor sit sapien vestibulum ipsum primis?</p>
                <a href="#contact" className="button large scrolly">Col id vitae cras at</a>
              </footer>
            </div>
          </article>
          {/* Contact */}
          <article id="contact" className="wrapper style4">
            <div className="container medium">
              <header>
                <h2>Quam ut orci porta mus ante.</h2>
                <p>Ornare nulla proin odio consequat sapien vestibulum ipsum.</p>
              </header>
              <div className="row">
                {/* <div className="col-12">
                  <form method="post" action="#">
                    <div className="row">
                      <div className="col-6 col-12-small">
                        <input type="text" name="name" id="name" placeholder="Name" />
                      </div>
                      <div className="col-6 col-12-small">
                        <input type="text" name="email" id="email" placeholder="Email" />
                      </div>
                      <div className="col-12">
                        <input type="text" name="subject" id="subject" placeholder="Subject" />
                      </div>
                      <div className="col-12">
                        <textarea name="message" id="message" placeholder="Message" defaultValue={""} />
                      </div>
                      <div className="col-12">
                        <ul className="actions">
                          <li><input type="submit" defaultValue="Send Message" /></li>
                          <li><input type="reset" defaultValue="Clear Form" className="alt" /></li>
                        </ul>
                      </div>
                    </div>
                  </form>
                </div> */}
                <div className="col-12">
                  <hr />
                  <h3>Find me on ...</h3>
                  <ul className="social">
                    <li><a href="#" className="icon brands fa-twitter"><span className="label">Twitter</span></a></li>
                    <li><a href="#" className="icon brands fa-facebook-f"><span className="label">Facebook</span></a></li>
                    <li><a href="#" className="icon brands fa-dribbble"><span className="label">Dribbble</span></a></li>
                    <li><a href="#" className="icon brands fa-linkedin-in"><span className="label">LinkedIn</span></a></li>
                    <li><a href="#" className="icon brands fa-tumblr"><span className="label">Tumblr</span></a></li>
                    <li><a href="#" className="icon brands fa-google-plus"><span className="label">Google+</span></a></li>
                    <li><a href="#" className="icon brands fa-github"><span className="label">Github</span></a></li>
                    {/*
                                  <li><a href="#" class="icon solid fa-rss"><span>RSS</span></a></li>
                                  <li><a href="#" class="icon brands fa-instagram"><span>Instagram</span></a></li>
                                  <li><a href="#" class="icon brands fa-foursquare"><span>Foursquare</span></a></li>
                                  <li><a href="#" class="icon brands fa-skype"><span>Skype</span></a></li>
                                  <li><a href="#" class="icon brands fa-soundcloud"><span>Soundcloud</span></a></li>
                                  <li><a href="#" class="icon brands fa-youtube"><span>YouTube</span></a></li>
                                  <li><a href="#" class="icon brands fa-blogger"><span>Blogger</span></a></li>
                                  <li><a href="#" class="icon brands fa-flickr"><span>Flickr</span></a></li>
                                  <li><a href="#" class="icon brands fa-vimeo"><span>Vimeo</span></a></li>
                                  */}
                  </ul>
                  <hr />
                </div>
              </div>
            </div>
          </article>
          {/* Scripts */}
        </div>
      )
    }
}
export default BotBar;