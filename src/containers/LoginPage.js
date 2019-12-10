import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LoginPage extends Component {

  static propTypes = {
    history: PropTypes.object.isRequired
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.history.push('/stories');
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <button>Click To Get Started</button>
      </form>
    );
  }
}
