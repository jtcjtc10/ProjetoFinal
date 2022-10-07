import React, { Component } from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;

import Rotas from './routes';
class App extends Component {
state = {
    data: null
  };

  componentDidMount() {
    this.callBackendAPI()
      .then(res => this.setState({ data: res.express }))
      .catch(err => console.log(err));
  }
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };
  
  render() {
    return (
      <div className="App">
        <Rotas/>
      </div>
    );
  }
}

export default App;