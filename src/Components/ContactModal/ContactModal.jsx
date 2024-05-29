import React, { Component } from 'react';

class ContactModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      surname: '',
      message: '',
    };
  }

  handleInputChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // handle the submit logic here
  };

  render() {
    return (
      <div className="modal">
        <h2>Contact Us</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Surname:
            <input
              type="text"
              name="surname"
              value={this.state.surname}
              onChange={this.handleInputChange}
            />
          </label>
          <label>
            Message:
            <textarea
              name="message"
              value={this.state.message}
              onChange={this.handleInputChange}
            />
          </label>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ContactModal;
