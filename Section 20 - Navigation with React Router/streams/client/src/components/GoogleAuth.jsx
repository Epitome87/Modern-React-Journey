import React, { useEffect, useState } from "react";

function GoogleAuth() {
  //   const [auth, setAuth] = useState(null);
  const [isSignedIn, setIsSignedIn] = useState(null);

  const [auth, setAuth] = useState(null);

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
          const myAuth = window.gapi.auth2.getAuthInstance();
          setIsSignedIn(myAuth.isSignedIn.get());
          myAuth.isSignedIn.listen(onAuthChange);
          setAuth({ ...myAuth });
        });
    });
  }, []);

  const onAuthChange = () => {
    setIsSignedIn(auth.isSignedIn.get());
  };

  const onSignIn = () => {
    auth.signIn();
  };

  const onSignOut = () => {
    auth.signOut();
  };

  const renderAuthButton = () => {
    if (isSignedIn === null) {
      return null;
    } else if (isSignedIn) {
      return (
        <button onClick={onSignOut} className="ui red google button">
          <i className="google icon" />
          Sign Out
        </button>
      );
    } else {
      return (
        <button onClick={onSignIn} className="ui red google button">
          <i className="google icon" />
          Sign In with Google
        </button>
      );
    }
  };

  return <div>{renderAuthButton()}</div>;
}

export default GoogleAuth;
