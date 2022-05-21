import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Logo from "../LandingPage/Logo";
import { getAuth, signOut } from "firebase/auth";
import { useContext, useEffect, useState } from "react";
import AuthContext from "../store/auth-context";
import { onAuthStateChanged } from "firebase/auth";
import { authentication } from "../firebase-config";
import Loading from "../Loading";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { useRef } from "react";
import { useCallback } from "react";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

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

const Payment = (props) => {
  const history = useHistory();
  const phoneNumberInputElement = useRef();
  const semInputElement = useRef();
  const [loading, setLoading] = useState(true);
  const authCtx = useContext(AuthContext);
  const formHandler = useCallback(
    () => (event) => {
      event.preventDefault();

      const data = {
        phoneNumber: phoneNumberInputElement.current.value,
        semInputElement: semInputElement.current?.value,
      };

      if (data.phoneNumber.length === 10 && parseInt(data.phoneNumber)) {
        const name1 = authCtx.name;
        const email1 = authCtx.email;
        const phone1 = data.phoneNumber;

        var options = {
          key: "rzp_test_7SEnIiCpXDpvwA",
          key_secret: "NRtWxzYijYvrt3BJhjHGmlNv",
          // Enter the Key ID generated from the Dashboard
          amount: "100", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
          currency: "INR",
          name: "Studybear India pvt ltd",
          description: "Test Transaction",
          image:
            "https://camo.githubusercontent.com/6c44d0759b2a3f802ff8ab4d5748ffaf5c50123ce054e1a445844b76ff053107/68747470733a2f2f692e6962622e636f2f43514c683173562f556e7469746c65642d64657369676e626561722e706e67",

          // order_id: "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
          handler: function (response) {
            alert(response.razorpay_payment_id);
            authCtx.payment(response.razorpay_payment_id);

            // <Redirect to="/home">
            // alert(response.razorpay_order_id);
            // alert(response.razorpay_signature);
          },
          prefill: {
            name: { name1 },
            email: { email1 },
            contact: { phone1 },
          },
          notes: {
            address: "Razorpay Corporate Office",
          },
          theme: {
            color: "#3399cc",
          },
        };
        var pay = new window.Razorpay(options);
        pay.open();
        // window.location.href = "/home";
      } else {
        alert("Invalid Phone Number!");
        console.log("Invalid");
      }
    },
    [authCtx]
  );
  useEffect(() => {
    setLoading(true);
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
    setTimeout(() => {
      setLoading(false);
    }, 100);
  }, [logoutHandler]);

  useEffect(() => {
    if (authCtx.paymentBit) {
      history.push("/home");
    }
  }, [authCtx]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {loading && <Loading />}
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static">
          <Toolbar>
            <Logo />
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Studybear
            </Typography>
            <Button color="inherit" onClick={logoutHandler}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <div class="grid grid-rows-3 grid-cols-2 gap-0 fixed top-20 bottom-3 right-80 left-80 z-50  my-16 text-center ">
        <div class="row-span-3 col-span-2 ... bg-white flex flex-wrap justify-center drop-shadow-lg mx-auto ">
          <div className="block justify-center text-left drop-shadow-md mx-auto">
            <h1 className="mx-6 mt-3 text-3xl justify-center  font-semibold font-sans">
              Payment
            </h1>
            <form onSubmit={formHandler()}>
              <TextField
                disabled
                sx={{ mt: 5, ml: 3, width: 400 }}
                id="outlined-basic"
                label="Name"
                variant="outlined"
                defaultValue={authCtx.name}
              />
              <TextField
                disabled
                sx={{ mt: 5, ml: 3, width: 400 }}
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                defaultValue={authCtx.email}
              />

              <TextField
                required
                sx={{ mt: 5, ml: 3, width: 400 }}
                id="outlined-number"
                label="Phone-Number"
                type="tel"
                inputRef={phoneNumberInputElement}
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Box sx={{ minWidth: 40 }}>
                <FormControl sx={{ mt: 5, ml: 3, width: 400 }}>
                  <InputLabel id="demo-simple-select-label">
                    Semester
                  </InputLabel>
                  <Select
                    required
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={age}
                    label="Semester"
                    inputRef={semInputElement}
                    onChange={handleChange}
                  >
                    <MenuItem value={1}>
                      1<sup>st</sup> Semester
                    </MenuItem>
                    <MenuItem value={2}>
                      {" "}
                      2<sup>nd</sup> Semester
                    </MenuItem>
                    <MenuItem value={3}>
                      {" "}
                      3<sup>rd</sup> Semester
                    </MenuItem>
                    <MenuItem value={4}>
                      {" "}
                      4<sup>th</sup> Semester
                    </MenuItem>
                    <MenuItem value={5}>
                      {" "}
                      5<sup>th</sup> Semester
                    </MenuItem>
                    <MenuItem value={6}>
                      {" "}
                      6<sup>th</sup> Semester
                    </MenuItem>
                    <MenuItem value={7}>
                      {" "}
                      7<sup>th</sup> Semester
                    </MenuItem>
                    <MenuItem value={8}>
                      {" "}
                      8<sup>th</sup> Semester
                    </MenuItem>
                  </Select>
                </FormControl>
              </Box>

              <button
                type="submit"
                className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center items-center dark:focus:ring-[#4285F4]/55 mr-2 mb-2 inline-flex mx-7 mt-5"
              >
                Pay Now
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Payment;
