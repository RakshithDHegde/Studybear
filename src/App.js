import * as React from "react";
import WrapperLandingPage from "./LandingPage/WrapperLandingPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Dummy from "./PaymentPage/Dummy";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { authentication } from "./firebase-config";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";

function App() {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        authCtx.login(uid);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const isLoggedIn = authCtx.isLoggedIn;
  return (
    <div>
      <Switch>
        {!isLoggedIn && (
          <Route path="/" exact>
            <WrapperLandingPage />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/" exact>
            <Redirect to="/payment" />
          </Route>
        )}

        {!isLoggedIn && (
          <Route path="/payment">
            <Redirect to="/" />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/payment">
            <Dummy />
          </Route>
        )}
      </Switch>
    </div>
  );
}
export default App;
