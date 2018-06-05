import React from 'react'
import ReactDOM from 'react-dom'
import { Router, Link } from 'react-static'
import styled, { injectGlobal } from 'styled-components'
import { hot } from 'react-hot-loader'
import Navi from 'components/Navi'
import Home from 'components/Home'
import About from 'components/About'
import Skills from 'components/Skills'
import Contact from 'components/Contact'

injectGlobal`
  * {
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
  }
  body {
    font-family: 'Oswald', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
`;

const Wrapper = styled.div`
  width: 100%;
`;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionHeights : {
        home: 0,
        about: 0,
        services: 0,
        skills: 0,
        contact: 0,
      }
    };
    this.resizeTimer;
  }
  componentDidMount() {
    window.addEventListener('resize', this.setHeights.bind(this));
    this.setHeights();
    var box = ReactDOM.findDOMNode(this.refs.router);
    const s = document.createElement('script');
    s.src = 'https://www.gstatic.com/firebasejs/5.0.4/firebase.js';
    const s2 = document.createElement('script');
    s2.type = 'text/javascript';
    s.async = true;
    s.innerHTML = 'firebase.initializeApp({apiKey: "AIzaSyDN_qjq04SenLCn6QV_-VLzpJdw3J_-yWQ",authDomain: "portfolio-6935e.firebaseapp.com",databaseURL: "https://portfolio-6935e.firebaseio.com",projectId: "portfolio-6935e",storageBucket: "portfolio-6935e.appspot.com",messagingSenderId: "385844611515"});';
    box.appendChild(s);
    box.appendChild(s2);
  }
  componentWillUnmount() {
    window.removeEventListener('resize');
  }
  setHeights() {
    if (this.resizeTimer !== false) {
      clearTimeout(this.resizeTimer);
    }
    this.resizeTimer = setTimeout(() => {
      this.setState({
        sectionHeights: {
          home: ReactDOM.findDOMNode(this.refs.homeSection).clientHeight,
          about: ReactDOM.findDOMNode(this.refs.aboutSection).clientHeight,
          skills: ReactDOM.findDOMNode(this.refs.skillsSection).clientHeight,
          contact: ReactDOM.findDOMNode(this.refs.contactSection).clientHeight,
        }
      });
    }, 200);
  }
  render () {
    return (
      <Router ref="router">
        <Wrapper>
          <Home id="home" ref="homeSection" />
          <Navi heights={this.state.sectionHeights} />
          <About id="about" ref="aboutSection" />
          <Skills id="skills" ref="skillsSection" />
          <Contact id="contact" ref="contactSection" />
        </Wrapper>
      </Router>
    )
  }
}

export default hot(module)(App)
