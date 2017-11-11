import React, { Component } from 'react'
import VoteButton from './VoteButton.js'
import VotesTable from './VotesTable.js'
import ItemInput from './ItemInput.js'

class Home extends Component {
  render() {
    return(
      <main className="container">
        <div className="pure-g">
          <div className="pure-u-1-1" style={{display: 'flex', justifyContent: 'center'}}>
            <ItemInput></ItemInput>
            <VotesTable></VotesTable>
          </div>
        </div>
      </main>
    )
  }
}

export default Home
