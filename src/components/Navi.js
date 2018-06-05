import React from 'react'
import { Link } from 'react-static'
import styled from 'styled-components'
import { SmoothScroll } from 'smooth-scroll'

const Position = {
  Home: "home",
  About: "about",
  Services: "services",
  Skills: "skills",
  Contact: "contact"
}

const Menu = styled(Link)`
  text-decoration: none;
  color: white;
  text-transform: uppercase;
  border-top:1px solid transparent;
  border-bottom:1px solid transparent;
  border-left:${props => props.checked ? '1px solid white' : '1px solid transparent'};
  border-right:${props => props.checked ? '1px solid white' : '1px solid transparent'};
  display: block;
  padding: .5em;
  position: relative;
  -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
  transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
  &:before {
    content: '';
    position: absolute;
    left: 0px;
    bottom:0px;
    z-index:-1;
    width: ${props => props.checked ? '100%' : '0%'};
    height:1px;
    background: white;
    box-shadow: inset 0px 0px 0px white;
    display: block;
    -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
    transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
  }
  &:after {
    content: '';
    position: absolute;
    right: 0px;
    top:0px;
    z-index:-1;
    width: ${props => props.checked ? '100%' : '0%'};
    height:1px;
    background: white;
    -webkit-transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
    transition: all 0.4s cubic-bezier(.5, .24, 0, 1);
  }
`;
const Nav = styled.nav`
  bottom: 0;
  width: 100%;
  height: 70px;
  background-color: rgba(0,0,0,0.2);;
  position: ${props => props.fixed ? 'fixed' : 'absolute'};
  top: ${props => props.fixed ? 0 : 'auto'};
  z-index: ${props => props.fixed ? 1 : 0};
`;
const List = styled.li`
  position: relative;
`;
const Lists = styled.ul`
  display: flex;
  justify-content: space-around;
  list-style: none;
  padding: 0;
`;

export default class Navi extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fixed: false,
      position: Position.Home
    };
  }
  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll.bind(this));
  }
  handleScroll() {
    var navHeight = window.innerHeight - 70;
    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    this.setState({fixed: (scrollTop > navHeight)});
    var home = this.props.heights.home;
    var about = home + this.props.heights.about - 1;
    var skills = about + this.props.heights.skills - 1;
    var contact = skills + this.props.heights.contact - 1;
    if (scrollTop < home) {
      this.setState({position: Position.Home});
    } else if (scrollTop >= home && scrollTop < about) {
      this.setState({position: Position.About});
    } else if (scrollTop >= about && scrollTop < skills) {
      this.setState({position: Position.Skills});
    } else if (scrollTop >= skills && scrollTop < contact) {
      this.setState({position: Position.Contact});
    }
  }

  render () {
    return (
      <Nav fixed={this.state.fixed}>
        <Lists>
          <List><Menu to="#home" checked={this.state.position==Position.Home}>Home</Menu></List>
          <List><Menu to="#about" checked={this.state.position==Position.About}>About</Menu></List>
          {/*<List><Menu to="/" navi={this.state.position==Position.Services}>Services</Menu></List>*/}
          <List><Menu to="#skills" checked={this.state.position==Position.Skills}>Skills</Menu></List>
          <List><Menu to="#contact" checked={this.state.position==Position.Contact}>Contact</Menu></List>
        </Lists>
      </Nav>
    )
  }
}
