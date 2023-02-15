import react, { Component } from 'react';
import { getAuth, RecaptchaVerifier } from "firebase/auth";
import { app } from "./firebaseConfig";

const auth = getAuth(app);
class App extends Component {

  captchaVerify = () => {
      window.recaptchaVerifier = new RecaptchaVerifier('recaptcha-container', {
        'size': 'normal',
        'callback': (response) => {
          console.log(response)
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

  render() {
    return (
      <>
        <label>Phone Number</label>
        <input />
        <div id="recaptcha-container" />
        <button id="sign-in-button">Send Code</button>
      </>
    );
  }
}



export default App;