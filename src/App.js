import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsApi from './utils/ContactsAPI'
import CreateContact from './CreateContact';

class App extends Component {
  state = {
    screen: 'list', // this could also be 'create'
    contacts: []
  }

  componentDidMount() {
    ContactsApi.getAll().then(
      (contacts) => this.setState({ contacts })
    )
  }

  removeContact = (contact) => {
    this.setState(
      (state) => ({
        contacts: state.contacts.filter((c) => c.id !== contact.id)
      })
    )

    ContactsApi.remove(contact)
  }

  render() {
    return (
      <div className="App">
        {this.state.screen === 'list' && (
          <ListContacts contacts={this.state.contacts} onDeleteContact={this.removeContact} />
        )}
        
        {this.state.screen === 'create' && (
          <CreateContact/>
        )}
      </div>
    );
  }
}

export default App;
