import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Route, Switch } from 'react-router-dom'

import Translations from './core/Translations';
import Competitions from './competitions/Competitions';
import CompetitionsNew from './competitions/CompetitionsNew';
import logo from './logo.png';

import './App.css';


class App extends Component {
  
  render() {
    
    const headerStyle = { 
      fontFamily: 'Ubuntu',
      backgroundColor: '#635e5e',
      height: 120,
      padding: '5px 20px',
      color: 'white'
    };
    
    const headlineStyle = { 
      fontFamily: 'Ubuntu'
    };
    
    const logoStyle = {height: 80, verticalAlign: 'text-bottom'};
    
    const clubStyle = {fontSize: 80};
    
    const toolStyle = {fontSize: 60};
    
    return (
      <div>          
        <Container>
          <Row>
            <Col>
              <div style={headerStyle}>
                <img src={logo} style={logoStyle} alt="logo" />
                <span style={clubStyle}>IFK Växjö </span><span style={toolStyle}>- <Translations translationKey="competitionTool" module="App"/></span>
              </div>
            </Col>
          </Row>
        </Container>        
        <Container>      
          <Row>
            <Col>              
              <h1 style={headlineStyle}><Translations translationKey="trackandfield" module="App"/></h1>
              <Switch>
                <Route exact path='/' component={Competitions}/>
                {/* both /roster and /roster/:number begin with /roster */}
                <Route path='/competitions/new' component={CompetitionsNew}/>
                <Route path='/schedule' component={Competitions}/>
              </Switch>
            </Col>
          </Row>
        </Container>
          
      </div>
    );
  }
}

export default App;
