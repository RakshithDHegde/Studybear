import studybear from "../StudyBear.png";
import { authentication } from "../firebase-config";
import { deleteUser } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Loading from "../Loading";
import { useHistory } from "react-router-dom";
import { ref, set, get, child } from "firebase/database";
import { database } from "../firebase-config";
import { update } from "firebase/database";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
const user = authentication.currentUser;

const googleSignIn = () => {
  const provider = new GoogleAuthProvider();
  signInWithPopup(authentication, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      //   const credential = GoogleAuthProvider.credentialFromResult(result);
      //   const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      if (!user.email.includes("@rvce.edu.in")) {
        alert("Please enter Rvce EMAIL Only!!");
        deleteUser(user)
          .then(() => {
            // User deleted.
          })
          .catch((error) => {
            console.log("Error Abort!!");
          });
      }
      // ...
    })
    .catch((error) => {
      // Handle Errors here.
      //   const errorCode = error.code;
      //   console.log(errorCode);
      //   const errorMessage = error.message;
      //   console.log(errorMessage);
      // The email of the user's account used.
      //   const email = error.email;
      //   console.log(email);
      // The AuthCredential type that was used.
      //   const credential = GoogleAuthProvider.credentialFromError(error);
      //   console.log(credential);
      // ...
      alert("Authentication Failed :(, Check connectivity");
    });
};

const Modal = (props) => {
  const history = useHistory();
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  const uid = authCtx.uid;

  useEffect(() => {
    get(child(ref(database), `users/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          authCtx.payment(
            snapshot.child("razorpaypaymentid").val(),
            snapshot.child("semester").val()
          );
        } else {
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      onAuthStateChanged(authentication, (user) => {
        const uid = user.uid;
        let name;
        if (
          user.displayName !== "RAKSHITH DATTATRAYA HEGDE" &&
          user.displayName !== "M S SANDEEP KAMATH"
        ) {
          name = user.displayName;
        } else {
          name = "Studybear";
        }

        const email = user.email;
        const photourl = user.photoURL;

        if (user.email.includes("@rvce.edu.in")) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;

          setTimeout(() => {
            authCtx.login(uid, user.displayName, user.email, user.photoURL);
          }, 2000);

          function UpdateData() {
            update(ref(database, "users/" + uid), {
              name: name,
              email: email,

              photourl: photourl,
            })
              .then(() => {})
              .catch((error) => {
                console.log(error);
              });
          }
          UpdateData();

          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    });
  }, [googleSignIn]);
  useEffect(() => {
    setTimeout(() => {
      if (authCtx.isLoggedIn && !authCtx.paymentBit) {
        history.push("/payment");
      } else if (authCtx.isLoggedIn && authCtx.paymentBit) {
        history.push("/home");
      }
    }, 1000);
  }, [authCtx]);

  setTimeout(() => {
    setLoading(false);
  }, 2000);

  return (
    <>
      {loading && <Loading />}
      <div class="grid grid-rows-3 grid-cols-3 gap-0 fixed lg:top-1/4 lg:bottom-1/4 lg:right-1/4 lg:left-1/4 z-20  bottom-1/3 my-auto ">
        <div class="row-span-3 col-span-1 ... bg-white flex justify-center rounded-lg drop-shadow-lg ">
          <div className="display-block flex flex-wrap justify-center drop-shadow-md">
            <img
              src={studybear}
              className="object-contain h-48 w-96 display-block "
              width={100}
              alt="studybear logo"
            />
            <h1 className="mx-6 mb-16 lg:text-2xl text-lg  font-semibold font-mono">
              Experience Studybear Now!
            </h1>
          </div>
        </div>

        <div class="row-span-3 col-span-2 ... bg-white rounded-lg drop-shadow-lg">
          <div className=" relative  my-auto  justify-center drop-shadow-md text-center">
            <div className="text-right">
              <button
                className="text-right justify-items-end"
                onClick={props.modalRemove}
              >
                <h1 className="text-2xl mr-4 mt-3">X</h1>
              </button>
            </div>
            <div className="my-auto">
              <h1 className="mx-6 mb-16 text-4xl font-semibold font-mono  display-box">
                Sign in to continue!
              </h1>
              <div className="block">
                <button
                  type="button"
                  class="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex"
                  onClick={googleSignIn}
                >
                  <svg
                    class="w-4 h-4 mr-2 -ml-1"
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fab"
                    data-icon="google"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 488 512"
                  >
                    <path
                      fill="currentColor"
                      d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"
                    ></path>
                  </svg>
                  Sign in with Google
                </button>
              </div>
              <p className="text-sm mt-4">🔒Use RVCE e-mail id only</p>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" fixed z-10 w-full h-full backdrop-blur-xl top-0 bottom-0 bg-white/30"
        onClick={props.modalRemove}
      ></div>
    </>
  );
};
export default Modal;
