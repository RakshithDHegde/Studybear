import * as React from "react";
import WrapperLandingPage from "./LandingPage/WrapperLandingPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Payment from "./PaymentPage/Payment";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { authentication } from "./firebase-config";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";
import Home from "./Homepage/Home";
import News from "./Functionality/News";
import Events from "./Functionality/Events";

function App() {
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    onAuthStateChanged(authentication, (user) => {
      if (user.email.includes("@rvce.edu.in")) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        console.log(uid);
        authCtx.login(uid, user.displayName, user.email, user.photoURL);
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
  }, []);
  const isLoggedIn = authCtx.isLoggedIn;
  const payment1 = authCtx.paymentBit;
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <div>
      {loading && <Loading />}
      <Switch>
        <Route path="/" exact>
          <WrapperLandingPage />
        </Route>
        {/* {!isLoggedIn && (
          <Route path="/" exact>
            <WrapperLandingPage />
          </Route>
        )} */}
        {/* {isLoggedIn && (
          <Route path="/" exact>
            <Redirect to="/payment" />
          </Route>
        )} */}

        {!isLoggedIn && (
          <Route path="/payment" exact>
            <Redirect to="/" />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/payment" exact>
            <Payment />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/payment" exact>
            <Redirect to="/home"></Redirect>
          </Route>
        )}
        {/* {!isLoggedIn && (
          <Route path="/home" exact>
            <Redirect to="/" />
          </Route>
        )} */}
        {isLoggedIn && (
          <Route path="/home" exact>
            <Home />
          </Route>
        )}
        {isLoggedIn && (
          <Route path="/news" exact>
            <News />
          </Route>
        )}

        <Route path="/events" exact>
          <Events />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
