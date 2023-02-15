import react, { Component } from 'react';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input : ""
    };
  }
  captchaVerify = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
        },
        'expired-callback': () => {
          // Response expired. Ask user to solve reCAPTCHA again.
          // ...
        }
    } , auth);
    window.recaptchaVerifier.render()
  }

  componentDidMount () {
    this.captchaVerify();
  }

  changeInput = (input) => {
    this.setState({
      input
    })
  }

  render() {
    return (
      <>
        <label>Phone Number</label>
        <input type="text" placeholder="phone number" value={this.state.input} onChange={(e)=>this.changeInput(e.target.value)} />
        <div id="recaptcha-container" />
        <button id="sign-in-button">Send Code</button>
      </>
    );
  }
}

export default App;