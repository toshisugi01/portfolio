import React from 'react'
import ReactDOM from 'react-dom'
import styled, { keyframes } from 'styled-components'

const HomeBox = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: inline-block;
  text-align: center;
`;
const Name = styled.h2`
  margin: 30vh auto 0 auto;
  text-align: center;
  color: white;
  font-family: fantasy, serif;
  letter-spacing: .3em;
  font-size: 35px;
`;
const Job = styled.p`
  margin: 1em auto 0 auto;
  text-align: center;
  color: white;
  font-size: 24px;
  text-transform: uppercase;
`;
const sdb = keyframes`
  0% {
    transform: rotate(-45deg) translate(0, 0);
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
`;
const Scroll = styled.div`
  position: absolute;
  margin-top: 190px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 1px solid #fff;
  border-bottom: 1px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: ${sdb} 1.5s infinite;
  animation: ${sdb} 1.5s infinite;
  box-sizing: border-box;
`;

export default class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const isBrowser = typeof window !== 'undefined';
    const bubbly = isBrowser ? require( 'bubbly-bg') : undefined;
    var box = ReactDOM.findDOMNode(this.refs.homebox);
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.async = true;
    s.innerHTML = "bubbly();";
    box.appendChild(s);
  }
  render () {
    return (
      <HomeBox id={this.props.id} ref="homebox">
        <Name>Toshiaki Sugiyama</Name>
        <Job>SYSTEM ENGINEER / CONSULTANT</Job>
        <Scroll/>
      </HomeBox>
    )
  }
}
