import { IconButton } from "@mui/material";
import Header from "../Homepage/Header";
import AuthContext from "../store/auth-context";
import { useContext, useState } from "react";
import { Avatar } from "@mui/material";
import { MenuItem } from "@mui/material";
import { Box } from "@mui/system";
import { Select } from "@mui/material";
import { InputLabel } from "@mui/material";
import { FormControl } from "@mui/material";
import { database } from "../firebase-config";
import { ref, set } from "firebase/database";
import { update } from "firebase/database";
import { useEffect } from "react";
import { child, get } from "firebase/database";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
const Profile = () => {
  const authCtx = useContext(AuthContext);
  // const [age, setAge] = React.useState(authCtx.semester);
  const [age, setAge] = React.useState(authCtx.semester);
  const [points, setPoints] = useState("");
  const [uploads, setUploads] = useState("");
  const [views, setViews] = useState("");
  const paymentid = authCtx.paymentid;
  const uid = authCtx.uid;
  let points1;
  useEffect(() => {
    get(child(ref(database), `users/${uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          points1 =
            snapshot.child("extrapoints").val() +
            snapshot.child("totaluploads").val() * 20 +
            snapshot.child("totalviews").val() * 10;

          setUploads(snapshot.child("totaluploads").val());
          setPoints(points1);
          setViews(snapshot.child("totalviews").val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleChange = (event) => {
    sessionStorage.setItem("subject", "");
    sessionStorage.setItem("unit", "");
    sessionStorage.setItem("topic", "");

    setAge(event.target.value);
    console.log(event.target.value);
    authCtx.payment(paymentid, event.target.value);
    console.log(authCtx.semester);

    function UpdateData() {
      update(ref(database, "users/" + uid), {
        semester: event.target.value,
      })
        .then(() => {})
        .catch((error) => {
          console.log(error);
        });
    }
    UpdateData();
  };

  return (
    <>
      <Header />

      <div className="bg-slate-100 rounded-2xl drop-shadow-xl my-12 items-center justify-center text-center mx-7 lg:mx-44 mt-12">
        <h1 className="mt-12 text-slate-100">studybear</h1>
        <Avatar
          alt="Remy Sharp"
          sx={{ width: 125, height: 125, mx: "auto", my: 2 }}
          src={authCtx.photoUrl}
        />

        <h1 className="my-7 lg:mx-0 mx-3 font-mono lg:text-4xl text-2xl">
          {authCtx.name}
        </h1>
        <h1 className="my-7 font-mono lg:text-2xl text-base">
          {authCtx.email}
        </h1>
        <Box sx={{ minWidth: 40 }} justifyContent="center" alignItems="center">
          <FormControl sx={{ mt: 5, ml: 3, width: 1 / 2 }}>
            <InputLabel id="demo-simple-select-label">Semester</InputLabel>
            <Select
              required
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Semester"
              onChange={handleChange}
              defaultValue={age}
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
        <div className="mt-12 mb-6 mx-16 rounded-xl flex justify-center ">
          <h1 className="lg:text-3xl text-xl font-sans">
            Your Current Points: {points}
          </h1>
          <svg
            className="h-12  relative bottom-3 mx-4 mb-5 w-13"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M576 136c0 22.09-17.91 40-40 40-.248 0-.455-.127-.703-.13l-50.52 277.9C482 468.9 468.8 480 453.3 480H122.7c-15.46 0-28.72-11.06-31.48-26.27L40.71 175.9c-.25 0-.46.1-1.61.1-22.09 0-40-17.91-40-40s18.81-40 40-40 40 17.91 40 40c0 8.998-3.521 16.89-8.537 23.57l89.63 71.7c15.91 12.73 39.5 7.544 48.61-10.68l57.6-115.2C255.1 98.34 247.1 86.34 247.1 72c0-22.09 18.8-40 40.9-40s39.1 17.91 39.1 40c0 14.34-7.963 26.34-19.3 33.4l57.6 115.2c9.111 18.22 32.71 23.4 48.61 10.68l89.63-71.7C499.5 152.9 496 144.1 496 136c0-22.1 17.9-40 40-40s40 17.9 40 40z"></path>
          </svg>
        </div>
        <div className="my-6 mx-16 rounded-xl flex justify-center ">
          <h1 className="lg:text-3xl text-xl font-sans">
            Your Total Uploads: {uploads}
          </h1>
          <svg
            className="h-12  relative bottom-3 mx-4 mb-5 w-13"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M105.4 182.6c12.5 12.49 32.76 12.5 45.25.001L224 109.3V352c0 17.67 14.33 32 32 32s32-14.33 32-32V109.3l73.38 73.38c12.49 12.49 32.75 12.49 45.25-.001 12.49-12.49 12.49-32.75 0-45.25l-128-128C272.4 3.125 264.2 0 256 0s-16.4 3.125-22.6 9.375L105.4 137.4c-12.52 12.5-12.52 32.7 0 45.2zM480 352H320c0 35.35-28.65 64-64 64s-64-28.65-64-64H32c-17.67 0-32 14.33-32 32v96c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32v-96c0-17.7-14.3-32-32-32zm-48 104c-13.2 0-24-10.8-24-24s10.8-24 24-24 24 10.8 24 24-10.8 24-24 24z"></path>
          </svg>
        </div>
        <div className="my-6 mx-16 rounded-xl flex justify-center ">
          <h1 className="lg:text-3xl text-xl font-sans">
            Your Total Views: {views}
          </h1>
          <svg
            className="h-12  relative bottom-3 mx-4 mb-5 w-13"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 576 512"
          >
            <path d="M279.6 160.4c2.8-.3 5.6-.4 8.4-.4 53 0 96 42.1 96 96 0 53-43 96-96 96-53.9 0-96-43-96-96 0-2.8.1-5.6.4-8.4 9.3 4.5 20.1 8.4 31.6 8.4 35.3 0 64-28.7 64-64 0-11.5-3.9-22.3-8.4-31.6zm201-47.8c46.8 43.4 78.1 94.5 92.9 131.1 3.3 7.9 3.3 16.7 0 24.6-14.8 35.7-46.1 86.8-92.9 131.1C433.5 443.2 368.8 480 288 480s-145.5-36.8-192.58-80.6C48.62 355.1 17.34 304 2.461 268.3a31.967 31.967 0 010-24.6C17.34 207.1 48.62 156 95.42 112.6 142.5 68.84 207.2 32 288 32c80.8 0 145.5 36.84 192.6 80.6zM288 112c-79.5 0-144 64.5-144 144s64.5 144 144 144 144-64.5 144-144-64.5-144-144-144z"></path>
          </svg>
        </div>
        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=teamstudybear@gmail.com&su=Bug in Web App&body=Please describe the bug in detail"
          target="_blank"
        >
          <div className="bg-white rounded-b-2xl">
            <h1
              className="font-mono text-base
              lg:text-2xl"
            >
              Found a bug? Report Now!!
            </h1>
          </div>
        </a>
      </div>
    </>
  );
};
export default Profile;
