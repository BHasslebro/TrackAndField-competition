import React, { Component } from 'react';
import * as firebase from 'firebase';

class FirebaseStart extends Component {
  
  constructor(props) {
    super(props);
    this.state ={
        firebaseInitialized: ""
    };
  }
  
  componentDidMount() {
    //Initialize firebase if it's not initialized
    try {
      var firebaseApp = firebase.app();
      if (firebaseApp) {
        this.setState ({
          firebaseInitialized: 'Firebase already existed'        
        });
      }
    } catch (e) {
      // Initialize Firebase
      var config = {
        apiKey: "AIzaSyCX8Etq03F8fw5WsDTSham0Bdrp_kWC7-s",
        authDomain: "trackandfield-a4338.firebaseapp.com",
        databaseURL: "https://trackandfield-a4338.firebaseio.com",
        projectId: "trackandfield-a4338",
        storageBucket: "trackandfield-a4338.appspot.com",
        messagingSenderId: "943223159570"
      };

      firebase.initializeApp(config);

      this.setState ({
        firebaseInitialized: 'Firebase initialized'        
      });

    }
  }
  
  //Render empty object
  render() {
    var hiddenStyle = { display: "none" };
    
    return (
      <span style={hiddenStyle}>{this.state.firebaseInitialized}</span>   
    );
  }
}

export default FirebaseStart;
