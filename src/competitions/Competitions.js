import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBlock, CardTitle, CardSubtitle, Button, Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom'
import Translations from '../core/Translations';
import FirebaseStart from '../core/FirebaseStart';
import './Competitions.css';
import create from './create.jpg';
import copy from './copy.jpg';


class Competitions extends Component {
  
  render() {
    
    const cardStyle = { maxWidth: 320 };
    
    const cardtitleStyle = {fontFamily: 'Amatic SC', fontWeight: 'bold'}
    
    const cardsubtitleStyle = {fontFamily: 'Amatic SC'}
    
    return (
      <Container>
        <FirebaseStart/>      
        <h1><Translations translationKey="competitions" module="Competitions"/></h1>        
        <Row>
          <Col>
            <Card style={cardStyle}>
              <CardImg top width="100%" src={create} alt="Create" />
              <CardBlock>
                <CardTitle style={cardtitleStyle}><Translations translationKey="newCompetition" module="Competitions"/></CardTitle>
                <CardSubtitle style={cardsubtitleStyle}>Här lägger du till en ny tävling</CardSubtitle>
                <CardText>Välj detta alternativ om du vill skapa en ny tävling med namn och datum och vilka grenar som ska ingå.</CardText>
                <Link to="/competitions/new"><Button>Skapa ny tävling</Button></Link>
              </CardBlock>
            </Card>
          </Col>
          <Col>
            <Card style={cardStyle}>
              <CardImg top width="100%" src={copy} alt="Copy" />
              <CardBlock>
                <CardTitle style={cardtitleStyle}>Kopiera tidigare tävling</CardTitle>
                <CardSubtitle style={cardsubtitleStyle}>Om du vill använda inställningar från en tidigare tävling</CardSubtitle>
                <CardText>Välj detta alternativ om du vill skapa en ny tävling där inställningarna hämtas från en tidigare tävling. Deltagare och resultat kopieras inte!</CardText>
                <Button>Kopiera tidigare tävling</Button>
              </CardBlock>
            </Card>
          </Col>        
          <Col>
            <Card style={cardStyle}>
              <CardImg top width="100%" src={create} alt="Create" />
              <CardBlock>
                <CardTitle style={cardtitleStyle}><Translations translationKey="newCompetition" module="Competitions"/></CardTitle>
                <CardSubtitle style={cardsubtitleStyle}>Här lägger du till en ny tävling</CardSubtitle>
                <CardText>Välj detta alternativ om du vill skapa en ny tävling med namn och datum och vilka grenar som ska ingå.</CardText>
                <Link to="/competitions/new">Skapa ny tävling</Link>
              </CardBlock>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Competitions;
