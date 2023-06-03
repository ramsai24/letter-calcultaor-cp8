// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {letterCount: 0}

  onEnterPhrase = event => {
    const searchResult = event.target.value

    this.setState({letterCount: searchResult.length})
  }

  render() {
    const {letterCount} = this.state
    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="count-container">
            <h1 className="heading">Calculate the Letters you enter</h1>
            <label htmlFor="inputel" className="description">
              Enter the phrase
            </label>
            <input
              id="inputel"
              className="inputEl"
              type="text"
              onChange={this.onEnterPhrase}
              placeholder="Enter the phrase"
            />
            <p className="letter-count">No.of letters: {letterCount}</p>
          </div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="img"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
