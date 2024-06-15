import {Component} from 'react'
import './index.css'

class Welcome extends Component {
  state = {
    isSubscribed: false,
  }

  toggleSubscription = () => {
    this.setState(prevState => ({
      isSubscribed: !prevState.isSubscribed,
    }))
  }

  render() {
    const {isSubscribed} = this.state
    return (
      <div className="welcome-container">
        <h1 className="greeting">Welcome!</h1>
        <p>Thank you! Happy Learning</p>
        <button
          type="button"
          className="subscription-button"
          onClick={this.toggleSubscription}
        >
          {isSubscribed ? 'Subscribed' : 'Subscribe'}
        </button>
      </div>
    )
  }
}

export default Welcome
