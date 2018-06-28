import React, { Component } from 'react';
import ListContacts from './ListContacts'
import * as ContactsApi from './utils/ContactsAPI'
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom'

class App extends Component {
  state = {
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
        <Route exact path='/' render={() => (
          <ListContacts
            contacts={this.state.contacts}
            onDeleteContact={this.removeContact} />
        )}/>

        <Route path='/create' component={CreateContact} />
      </div>
    );
  }
}

export default App;
