import * as React from "react";
// import WrapperLandingPage from "./LandingPage/WrapperLandingPage";
import { Route } from "react-router-dom";
import { Switch } from "react-router-dom";
import Payment from "./PaymentPage/Payment";
import { useContext } from "react";
import AuthContext from "./store/auth-context";
import { authentication, database } from "./firebase-config";
import { useEffect, useState } from "react";
import { Redirect } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "./Loading";
// import Home from "./Homepage/Home";
// import News from "./Functionality/News";
// import Events from "./Functionality/Events";
import { ref, child, get } from "firebase/database";

const News = React.lazy(() => import("./Functionality/News"));
const Home = React.lazy(() => import("./Homepage/Home"));
const WrapperLandingPage = React.lazy(() =>
  import("./LandingPage/WrapperLandingPage")
);
const Notes = React.lazy(() => import("./Functionality/Notes"));
const Events = React.lazy(() => import("./Functionality/Events"));
const Discuss = React.lazy(() => import("./Functionality/Discuss"));
const Profile = React.lazy(() => import("./Settings/Profile"));
const Teachers = React.lazy(() => import("./Functionality/Teachers"));
const Circular = React.lazy(() => import("./Functionality/Circular"));
const NotesReader = React.lazy(() => import("./Functionality/NotesReader"));
const Leaderboard = React.lazy(() => {
  import("./Settings/Leaderboard");
});

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

        get(child(ref(database), `users/${uid}`))
          .then((snapshot) => {
            if (snapshot.exists()) {
              console.log(snapshot.child("email").val());
              authCtx.payment(
                snapshot.child("razorpaypaymentid").val(),
                snapshot.child("semester").val()
              );
            } else {
              console.log("No data available");
            }
          })
          .catch((error) => {
            console.error(error);
          });
        // ...
      } else {
        // User is signed out
        // ...
      }
    });
    setTimeout(() => {}, 1000);
  }, []);
  const isLoggedIn = authCtx.isLoggedIn;
  const payment1 = authCtx.paymentBit;
  setTimeout(() => {
    setLoading(false);
  }, 800);
  return (
    <div>
      <React.Suspense fallback={Loading}>
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
          {isLoggedIn && !payment1 && (
            <Route path="/payment" exact>
              <Payment />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/payment" exact>
              <Redirect to="/home"></Redirect>
            </Route>
          )}
          {/* {!isLoggedIn && (
          <Route path="/home" exact>
            <Redirect to="/" />
          </Route>
        )} */}
          {isLoggedIn && payment1 && (
            <Route path="/home" exact>
              <Home />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/notes" exact>
              <Notes />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/news" exact>
              <News />
            </Route>
          )}

          {isLoggedIn && payment1 && (
            <Route path="/events" exact>
              <Events />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/discuss" exact>
              <Discuss />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/profile" exact>
              <Profile />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/teachers" exact>
              <Teachers />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/teachers" exact>
              <Teachers />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/circulars" exact>
              <Circular />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/reader" exact>
              <NotesReader />
            </Route>
          )}
          {isLoggedIn && payment1 && (
            <Route path="/leaderboard" exact>
              <Leaderboard />
            </Route>
          )}
        </Switch>
      </React.Suspense>
    </div>
  );
}
export default App;
