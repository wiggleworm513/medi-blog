import React from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

export default class SignInScreen extends React.Component {
  constructor(props)
  {
    super(props);
    this.state = {
      firebase: props.firebase,
      // Configure FirebaseUI.
      uiConfig: {
        // Popup signin flow rather than redirect flow.
        signInFlow: "popup",
        // Redirect to /signedIn after sign in is successful. Alternatively you can provide a callbacks.signInSuccess function.
        signInSuccessUrl: "/",
        // We will display Google and Facebook as auth providers.
        signInOptions: [
          this.props.firebase.auth.EmailAuthProvider.PROVIDER_ID,
          this.props.firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ]
      }
    }
  }

  render() {
    return (
      <div>
        <h1>Medi-Blog</h1>
        <p>Please sign-in:</p>
        <StyledFirebaseAuth
          uiConfig={this.state.uiConfig}
          firebaseAuth={this.state.firebase.auth()}
        />
      </div>
    );
  }
}
