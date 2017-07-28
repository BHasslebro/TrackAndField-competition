import React, { Component } from 'react';
import * as firebase from 'firebase';
import FirebaseStart from './FirebaseStart';
import PropTypes from 'prop-types';

class Translations extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
        translatedMessage: ""
    };
  }
  
  componentDidMount() {
    
    const rootRef = firebase.database().ref().child('translations');
    
    // Define user's language. Different browsers have the user locale defined
    // on different fields on the `navigator` object, so we make sure to account
    // for these different by checking all of them
    const language = (navigator.languages && navigator.languages[0]) ||
                         navigator.language ||
                         navigator.userLanguage;

    // Split locales with a region code
    const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];

    //translations
    const translationRef = rootRef.child(this.props.module).child(languageWithoutRegionCode);
    translationRef.on('value', snap=> {
      this.setState ({
        translatedMessage: snap.val()[this.props.translationKey]        
      });
    });    
  }
  
  render() {
    return (
      <span><FirebaseStart/>{this.state.translatedMessage}</span>   
    );
  }
}

export default Translations;

Translations.propTypes = {
  translationKey: PropTypes.string.isRequired,  
  module: PropTypes.string.isRequired,  
};