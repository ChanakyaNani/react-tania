import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Table from './Table';
import Api from './Api';
import Form from './Form';
import './style.css';

class App extends Component {
  
  state = {
   name:'react',
   chars: [{
        'name': 'Charlie',
        'job': 'Janitor'
      },
      {
        'name': 'Mac',
        'job': 'Bouncer'
      },
      {
        'name': 'Dee',
        'job': 'Aspring actress'
      },
      {
        'name': 'Dennis',
        'job': 'Bartender'
      }]
  };
  

  removeCharacter = (index) => {
    const {chars} = this.state;
    this.setState({
      chars: chars.filter((char,i) =>{
        return i !== index;
      })
    });
  }

  handleSubmit = character => {
    this.setState({chars: [...this.state.chars, character]});
  }

  render() {
  
   return (
      <div className="container">
        <Hello name={this.state.name} />
        <Table
          characterData = {this.state.chars}
          removeCharacter={this.removeCharacter}
        />
        <h3>Add New</h3>
        <Form handleSubmit={this.handleSubmit} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
// change to Api to render different class (Api.js)