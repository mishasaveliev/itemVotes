import React, { Component } from 'react';
import VoteButton from './VoteButton.js'

class VotesTable extends Component{
  render() {
    return <table>
    <tr>
      <td>item</td>
      <td><VoteButton></VoteButton></td>
    </tr>
    </table>
    }
}
export default VotesTable;
