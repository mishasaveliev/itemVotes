import React, { Component } from 'react';

class ItemInput extends Component{
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit= this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({value: event.target.value});
  }
  handleSubmit(event) {
    alert('Item:' + this.state.value);
    event.preventDefault();
  }
  render() {
    return(
    <form onSubmit={this.handleSubmit}>
    <label>
    Item name:
    <input type="text" value={this.state.value} onChange={this.handleChange}/>
    </label>
    <input type="submit" value="Add" />
    </form>
  )
  }

};
export default ItemInput;
