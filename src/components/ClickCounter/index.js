// Write your code here
import {Component} from 'react'

import './index.css'

class ClickCounter extends Component {
  state = {
    count: 0,
  }

  onButtonClick = () => {
    this.setState(prevState => ({count: prevState.count + 1}))
  }

  render() {
    const {count} = this.state
    return (
      <div className="bg-container">
        <div className="content">
          <h1 className="heading">
            The Button has been clicked
            <br />
            <span className="span-element"> {count} </span>times
          </h1>
          <p className="para">Click the button to increase the count</p>
          <button className="button" type="button" onClick={this.onButtonClick}>
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}
export default ClickCounter
