import React, { useEffect } from "react";
import { connect } from "react-redux";
import { signIn, signOut } from "../actions";

let auth;

const GoogleAuth = (props) => {
  useEffect(() => {
    window.gapi.load("client:auth2", () => {
      // Inside Callback for when Library finished loading
      window.gapi.client
        .init({
          clientId:
            "129753933363-qego7o5vvdiagb2lo282qgtpud9rtrvu.apps.googleusercontent.com",
          scope: "email",
        })
        .then(() => {
          //   Lib successfully initialized
          auth = window.gapi.auth2.getAuthInstance();
          console.log("AUTH REF", auth);
          onAuthChange(auth.isSignedIn.get());
          auth.isSignedIn.listen(onAuthChange);
        });
    });
  }, []);

  const onAuthChange = (isSignedIn) => {
    console.log("SIGNED IN? ", isSignedIn);
    if (isSignedIn) {
      props.signIn(auth.currentUser.get().getId());
    } else {
      props.signOut();
    }
  };

  const onSignInClick = () => {
    auth.signIn();
  };

  const onSignOutClick = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (props.isSignedIn === null) {
      return null;
    } else if (props.isSignedIn) {
      return (
        <button onClick={onSignOutClick} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignInClick} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
};

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn };
};

export default connect(mapStateToProps, {
  signIn,
  signOut,
})(GoogleAuth);
