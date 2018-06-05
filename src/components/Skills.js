import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
//
const SKILL_LIST = [{
  title: "Backend Skills",
  values: [
    {name: "Java"},
    {name: "Node.js"},
    {name: "C#"},
    {name: "Oracle"},
    {name: "DB2"},
    {name: "MySQL"},
    {name: "PostgreSQL"},
    {name: "MariaDB"},
    {name: "Windows"},
    {name: "Mac"},
    {name: "Linux"},
    {name: "AWS"},
    {name: "Salesforce"},
    {name: "Jenkins"},
    {name: "Vagrant"},
  ]},{
  title: "Frontend Skills",
  values: [
    {name: "HTML / CSS"},
    {name: "Javascript"},
    {name: "jQuery"},
    {name: "Angular"},
    {name: "TypeScript"},
    {name: "React"},
    {name: "Cordova"},
  ]},
];

const SkillsBox = styled.div`
  position: relative;
  min-height: 100vh;
  width: 100%;
  top: 0;
  left: 0;
  display: inline-block;
  text-align: center;
  background-color: white;
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
  background-color: #69acea;
  color: white;
  font-size: 18px;
  font-family: fantasy, serif;
  letter-spacing: .3em;
  font-size: 35px;
`;
const FlexBox = styled.div`
  margin: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: center;
  align-items: center;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: center;
  justify-content: center;
`;
const SkillsContents = FlexBox.extend`
  max-width: 850px;
`;
const SkillTitle = styled.div`
  min-width: 160px;
  vertical-align: middle;
`;
const SkillItems = styled.ul`
  list-style-type: none;
  min-width: 160px;
`;
const SkillItem = styled.li`
  font-size: 12px;
  text-align: left;
`;

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <SkillsBox id={this.props.id}>
        <Name>My Skills / Experience</Name>
        <SkillsContents>
          {SKILL_LIST.map((item, idx) => {
            return (
              <FlexBox key={item.title}>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillItems>
                  {item.values.map((skill, idx) => {
                    return (<SkillItem key={skill.name}>{skill.name}</SkillItem>)
                  })}
                </SkillItems>
              </FlexBox>
            )
          })}
        </SkillsContents>
      </SkillsBox>
    )
  }
}
