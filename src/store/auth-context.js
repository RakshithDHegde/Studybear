import React, { useState } from "react";
const AuthContext = React.createContext({
  uid: "",
  isLoggedIn: false,
  login: (uid) => {},
  logout: () => {},
});

export const AuthContextProvider = (props) => {
  const [uid, setUid] = useState(null);

  const userIsLoggedIn = !!uid;

  const loginHandler = (uid) => {
    setUid(uid);
  };

  const logOutHandler = () => {
    setUid(null);
  };

  const contextValue = {
    uid: uid,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logOutHandler,
  };

  return (
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  );
};
export default AuthContext;
