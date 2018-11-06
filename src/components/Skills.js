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
    {name: "Docker"},
  ]},{
  title: "Frontend Skills",
  values: [
    {name: "HTML / CSS"},
    {name: "Javascript"},
    {name: "jQuery"},
    {name: "Angular"},
    {name: "TypeScript"},
    {name: "React"},
    {name: "Vue"},
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
  background-color: rgba(238,255,7,0.4);
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
  -webkit-align-items: start;
  align-items: start;
  -webkit-flex-flow: row wrap;
  flex-flow: row wrap;
  -webkit-justify-content: center;
  justify-content: center;
  background-color: white;
`;
const SkillsContents = styled.div`
  min-width: 300px;
  margin: 1em auto;
  padding: 0.5em 1em;
  border: solid 3px #95ccff;
  border-radius: 8px;
  background-color: white;
`;
const SkillTitle = styled.span`
  top: -13px;
  left: 10px;
  padding: 0 9px;
  line-height: 1;
  background: #FFF;
  color: #95ccff;
  font-weight: bold;
`;
const SkillItems = styled.ul`
  list-style-type: none;
  min-width: 160px;
`;
const SkillItem = styled.li`
  margin-left: 30px;
  font-size: 13px;
  text-align: left;
`;

export default class Skills extends React.Component {
  constructor(props) {
    super(props);
  }
  render () {
    return (
      <SkillsBox id={this.props.id}>
        <Name>My Skills</Name>
        <FlexBox>
          {SKILL_LIST.map((item, idx) => {
            return (
              <SkillsContents key={item.title}>
                <SkillTitle>{item.title}</SkillTitle>
                <SkillItems>
                  {item.values.map((skill, idx) => {
                    return (<SkillItem key={skill.name}>{skill.name}</SkillItem>)
                  })}
                </SkillItems>
              </SkillsContents>
            )
          })}
        </FlexBox>
      </SkillsBox>
    )
  }
}
