import React, { Component } from 'react';
import './App.css';

class ContactList extends Component {
  render() {
    var people = this.props.contacts

    return <ol>
      {people.map(person =>
        <li key={person.name}>
          {person.name}
        </li>
      )}
    </ol>
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <ContactList contacts={[
          { name: 'Rodrigo' },
          { name: 'Mozão Linda' }
        ]} />

        <ContactList contacts={[
          { name: 'Márcia' },
          { name: 'Roberto Lemos' }
        ]} />
      </div>
    );
  }
}

export default App;
