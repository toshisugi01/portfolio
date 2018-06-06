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
/*
  background-image: linear-gradient(to bottom, #ff4b00, #ff4d74, #c56bee, #00b5ff, #00ac00, #ffba00, #ff8239);
*/
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
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setHeights.bind(this));
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
