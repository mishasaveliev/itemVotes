import React, { Component } from 'react';
import VotesContract from '../../../build/contracts/Votes.json';
import { browserHistory } from 'react-router'
import store from '../../store'

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
    console.info('Item:' + this.state.value);
    let web3 = store.getState().web3.web3Instance
    console.info(web3);
    // Double-check web3's status.
    if (typeof web3 !== 'undefined') {

    }

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
