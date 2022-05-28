import React, { useState } from "react";
const AuthContext = React.createContext({
  uid: "",
  email: "",
  name: "",
  semester: "",
  photoUrl: "",
  paymentid: "",
  paymentBit: false,
  isLoggedIn: false,
  payment: (paymentid, semester) => {},
  login: (uid, name, email) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [uid, setUid] = useState(null);
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [paymentid, setPaymentId] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);
  const [semester, setSemester] = useState(null);

  const userIsLoggedIn = !!uid;
  const paymentIsDone = !!paymentid;

  const loginHandler = (uid, name, email, photoUrl) => {
    setUid(uid);
    setName(name);
    setEmail(email);
    setPhotoUrl(photoUrl);
  };

  const paymentHandler = (paymentid, semester) => {
    setPaymentId(paymentid);
    setSemester(semester);
  };

  const logOutHandler = () => {
    setUid(null);
    setName(null);
    setEmail(null);
    setPhotoUrl(null);
  };

  const contextValue = {
    uid: uid,
    isLoggedIn: userIsLoggedIn,
    paymentid: paymentid,
    email: email,
    paymentBit: paymentIsDone,
    name: name,
    photoUrl: photoUrl,
    semester: semester,
    login: loginHandler,
    logout: logOutHandler,
    payment: paymentHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
