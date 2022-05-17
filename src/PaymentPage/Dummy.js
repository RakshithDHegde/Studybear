import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../LandingPage/Logo";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect } from "react";
import AuthContext from "../store/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "../firebase-config";

const logoutHandler = () => {
  signOut(authentication)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      alert("Error");
      // An error happened.
    });
};

const Dummy = () => {
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(authentication, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          console.log(uid);

          // ...
        } else {
          authCtx.logout();
          // User is signed out
          // ...
        }
      });
    }, 1000);
  }, [logoutHandler]);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Logo />
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit" onClick={logoutHandler}>
            Logout
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default Dummy;
