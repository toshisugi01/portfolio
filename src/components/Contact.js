import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
//
const Texts = [
  "If you are interested in me,",
  "please feel free to contact me.",
];

const ContactBox = styled.div`
  position: relative;
  min-height: 50vh;
  width: 100%;
  top: 0;
  left: 0;
  display: inline-block;
  text-align: center;
`;
const Name = styled.div`
  height: 50vh;
  width: 100%;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-justify-content: center;
  justify-content: center;
  flex-direction: row;
  background-color: rgba(255,105,0,0.4);
  color: white;
  font-size: 18px;
  font-family: fantasy, serif;
  letter-spacing: .3em;
  font-size: 35px;
`;
const Sentence = styled.p`
  padding-top: ${props => props.isFirst ? "50px" : 0};
  margin-top: ${props => props.isFirst ? 0 : "16px"};
`;
const MailButton = styled.a`
  border-radius: 4px;
  display: inline-block;
  margin-top: 30px;
  width: 200px;
  height: 54px;
  text-decoration: none;
  line-height: 54px;
  outline: none;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  -webkit-transition: all .3s;
  transition: all .3s;
  background-color: #333;
  color: #fff;
  border: 1px solid black;
  cursor: pointer;
  &:before,&:after {
    position: absolute;
    z-index: -1;
    display: block;
    content: '';
  }
  &:hover {
    background-color: white;
    color: black;
  }
`;
const Mail = styled.span`
  border-radius: 3px;
  display: inline-block;
  position: relative;
  width: 20px;
  height: 16px;
  margin: 0 10px 0 0;
  padding: 0;
  background: ${props => props.hover ? 'black' : 'white'};
  -webkit-transition: all .3s;
  transition: all .3s;
  &:before {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 10px solid transparent;
    border-top-color: ${props => props.hover ? 'white' : 'black'};
    -webkit-transition: all .3s;
    transition: all .3s;
  }
  &:after {
    display: block;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    left: 2px;
    border: 8px solid transparent;
    border-top-color: ${props => props.hover ? 'black' : 'white'};
    -webkit-transition: all .3s;
    transition: all .3s;
  }
`;
const Box = styled.div`
  background-color: white;
  height: 50vh;
`;

export default class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hover: false};
  }
  mouseHandler(isMouseEnter) {
    this.setState({hover: isMouseEnter});
  }
  mailHandler() {
    location.href= 'mailto:frusion.mail@gmail.com';
  }
  render () {
    return (
      <ContactBox id={this.props.id}>
        <Name>Contact Me</Name>
        <Box>
          {Texts.map((text, idx) => {
            return <Sentence key={text} isFirst={idx == 0}>{text}</Sentence>
          })}
          <MailButton
            onMouseEnter={this.mouseHandler.bind(this, true)}
            onMouseLeave={this.mouseHandler.bind(this, false)}
            onClick={this.mailHandler}>
            <Mail hover={this.state.hover} />{"Mail me"}
          </MailButton>
        </Box>
      </ContactBox>
    )
  }
}
