import React, { Component } from 'react';
import './App.css';
import  'bootstrap/dist/css/bootstrap.min.css' ;
import Login from './Login/Login';
import Cadastro from './Cadastro/Cadastro';

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
        <Login/>
      </div>
    );
  }
}

export default App;