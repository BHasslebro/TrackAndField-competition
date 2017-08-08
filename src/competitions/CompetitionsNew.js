import React, { Component } from 'react';
import { Form, FormGroup, Input, Label,  Container, Row, Col, Card, CardImg, CardBlock, CardTitle, CardSubtitle, CardText } from 'reactstrap';
import * as firebase from 'firebase';
import FirebaseStart from '../core/FirebaseStart';
import Branchcard from './BranchCard';
import './CompetitionsNew.css';
import create from './create.jpg';



class Competitions extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
        branchGroups: {}
    };
  }
  
  componentDidMount() {
      var firebaseApp = firebase.app();
      if (firebaseApp) {
        const branchesRef = firebase.database().ref().child('branches');
        branchesRef.on('value', snap=> {
          var branchGroups = [];
          snap.forEach(function(childSnaps) {
            var branchGroup = childSnaps.val();
            //branchGroup['key'] = childSnaps.key;
            branchGroups.push(branchGroup);
          });

          this.setState({
            branchGroups: branchGroups
          });      
        });
      }
        
  }
  
  render() {
    
    function BranchesList(props) {
      var branchesObj = props.branches; //this.props.translationKey
      const branchesKey = branchesObj.name_sv;
      delete branchesObj.name_sv;
      const branches = Object.values(branchesObj);

      const listBranches = branches.map((branch) => 
        <Col key={branchesKey + branch.name}>
          <Branchcard branch={branch.name} branchTitle={branch.name_sv} />
        </Col>
      );    
      return (<Row>{listBranches}</Row>);
    } 
    
              
    const branchGroupsItems = this.state.branchGroups; 
    
    var branchGroups = <span>BranchGroups</span>;
    if (Object.keys(branchGroupsItems).length > 0) {
      branchGroups = branchGroupsItems.map((branchGroup, index) => 
        <span key={index}>
          <Row>
            <Col>
              <h3>{branchGroup.key}</h3>
            </Col>
          </Row>    
          <BranchesList branches={branchGroup} />
        </span>
      );
    } 

    const cardStyle = { maxWidth: 320 };

    const cardtitleStyle = {fontFamily: 'Amatic SC', fontWeight: 'bold'}    

    const cardsubtitleStyle = {fontFamily: 'Amatic SC'}

    const labelStyle = {fontFamily: 'Amatic SC', fontWeight: 'bold', fontSize: 'large'}

    return (
      <Container>
        {/* CompetitionsNew */}
        <FirebaseStart/>      
        <h1>Tävlingar</h1>
        <Row>
          <Col md="3">
            <Card style={cardStyle}>
              <CardImg top width="100%" src={create} alt="Create" />
              <CardBlock>
                <CardTitle style={cardtitleStyle}>Ny tävling</CardTitle>
                <CardSubtitle style={cardsubtitleStyle}>Här lägger du till en ny tävling</CardSubtitle>
                <CardText>Välj detta alternativ om du vill skapa en ny tävling med namn och datum och vilka grenar som ska ingå.</CardText>                
              </CardBlock>
            </Card>
          </Col>        
          <Col xs="auto">
             <Form>
              <FormGroup>
                <Label style={labelStyle} for="contestName">Namn på tävling</Label>
                <Input type="text" name="contestName" id="contestName" placeholder="Tävlingsnamn" />
              </FormGroup>              
              <FormGroup>
                <Label style={labelStyle} for="contestDate">Datum för tävling</Label>
                <Input type="date" name="contestDate" id="contestDate" placeholder="date placeholder" />
              </FormGroup>
              <FormGroup>
                <Label style={labelStyle} for="contestBranches">Vilka grenar ska tävlingen innehålla</Label>
                <Input type="date" name="contestDate" id="contestDate" placeholder="date placeholder" />
              </FormGroup>
            </Form>
          </Col>
          </Row>
          <h3>Grenar</h3>
          {branchGroups}
      </Container>

    );    
  }
}

export default Competitions;
