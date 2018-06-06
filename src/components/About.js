import React from 'react'
import ReactDOM from 'react-dom'
import styled from 'styled-components'
//

const AboutBox = styled.div`
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
  background-color: rgba(200,0,0,0.4);
  color: white;
  font-size: 18px;
  font-family: fantasy, serif;
  letter-spacing: .3em;
  font-size: 35px;
`;
const FlexBox = styled.div`
  min-height: 50vh;
  margin: auto;
  display: -webkit-flex;
  display: flex;
  -webkit-align-items: start;
  align-items: start;
  -webkit-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap-reverse;
  background-color: white;
`;
const Career = styled.ul`
  min-width: 300px;
  margin: 30px;
  font-size: 12px;
  text-align: left;
  list-style-type: none;
  flex: 1;
  padding: 0;
`;
const YearItem = styled.li`
  margin-top: 10px;
`;
const Year = styled.span`
  display: inline-block;
  width: 50px;
  color: navy;
`;
const Event = styled.span`
  min-width: 200px;
`;
const Introduction = styled.div`
  min-width: 400px;
  text-align: left;
  margin-left: 30px;
  margin-bottom: 50px;
  margin-top: 30px;
  font-size: 14px;
  flex: 1;
`;
const Sentence = styled.p`
  margin: 0;
`;
const Header = Sentence.extend`
  margin: 15px 0;
`;

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      header: ['スギヤマ　トシアキ', 'システムエンジニア / コンサルタント'],
      sentence: [
        '大阪府生まれ東京都育ち。',
        '早稲田大学経営システム工学科卒業。',
        'ERPパッケージソフトウェアの企画・開発から',
        'ITエンジニアとしての経歴をスタートし、',
        'その後システムコンサルタントを経て',
        '現在はフリーランスとして活動しています。',
      ]
    };
  }
  render () {
    return (
      <AboutBox id={this.props.id}>
        <Name>About Me</Name>
        <FlexBox>
          <Careers />
          <Introduction>
            {this.state.header.map((text, idx) => {
              return <Header key={'header'+idx}>{text}</Header>;
            })}
            {this.state.sentence.map((text, idx) => {
              return <Sentence key={'sentence'+idx}>{text}</Sentence>;
            })}
          </Introduction>
        </FlexBox>
      </AboutBox>
    )
  }
}

class Careers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      careers: [
        {year: '1983', event: 'Born in Osaka, Japan'},
        {year: '2001', event: 'Entered Waseda Univ.'},
        {year: '2005', event: 'Graduated Waseda Univ.'},
        {year: '2005', event: 'Works Applications Inc.'},
        {year: '2010', event: 'Round the World Trip'},
        {year: '2014', event: 'Pain de mie Ltd.'},
        {year: '2015', event: 'Accenture Japan Ltd.'},
        {year: '2018', event: 'Become Freelance'},
      ]
    };
  }
  render () {
    return (
      <Career>
        {this.state.careers.map((career, idx) => {
          return <YearItem key={'yearitem'+idx}><Year key={'year'+idx}>{career.year}</Year><Event key={'event'+idx}>{career.event}</Event></YearItem>;
        })}
      </Career>
    )
  }
}
