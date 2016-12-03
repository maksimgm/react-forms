import React from 'react';

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    // will need to be altered to hash table in order to store a various
    // values, by date, time, username, group, etc.
    this.input = [];
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
    this.input.push(this.state.value);
    console.log(this.input);
  }

  handleSubmit(event) {
    event.preventDefault();
     this.input.push(this.state.value);
     console.log(this.input);
    
    // console.log(this.state.value);
    render() { 
      return (
        //somehow use flex box display
        <div>
          <span>{this.state.value}</span>  
        </div>
      );
    }
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default NameForm;