import React, { Component } from 'react';
import { Card, CardImg, CardBlock, CardTitle } from 'reactstrap';
import './CompetitionsNew.css';
import PropTypes from 'prop-types';
import branch60m from './60m.png'; 
import branch600m from './600m.png'; 
import branch60mH from './60mH.png';
import branchShotput from './shotput.png';
import branchLongjump from './longjump.png';
import branchHighjump from './highjump.png';


class BranchCard extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
      selected  : false
    };
  }
  
  render() {
    var branch = this.props.branch
    
    const cardStyle = { maxWidth: 320 };
    
    const cardtitleStyle = {fontFamily: 'Amatic SC', fontWeight: 'bold'}    
    
     
    var title = branch;
    if (this.props.branchTitle !== undefined) {
      title = this.props.branchTitle;  
    }
    
    
    var image;
    
    if (branch === "60m") {
      image = branch60m;
    }
    if (branch === "600m") {
      image = branch600m;
    }
    if (branch === "60mH" || branch === "200mH") {
      image = branch60mH;
    }
    if (branch === "shotput") {
      image = branchShotput;
    }
    if (branch === "longjump") {
      image = branchLongjump;
    }
    if (branch === "highjump") {
      image = branchHighjump;
    }
    
    return (
      <Card style={cardStyle}>
        <CardBlock>
          <CardTitle style={cardtitleStyle}>{title}</CardTitle>          
        </CardBlock>
        <CardImg top width="100%" src={image} alt={this.props.branch} />
      </Card>
    );
  }
}

export default BranchCard;

BranchCard.propTypes = {
  branch: PropTypes.string.isRequired,  
  branchTitle: PropTypes.string,
};
