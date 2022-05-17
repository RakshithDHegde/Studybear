import React, { useState } from "react";
import Rewards from "./Rewards";
import HideAppBar from "./HideAppBar";
import Modal from "./Modal";
import Features from "./Features";

const WrapperLandingPage = () => {
  const [modal, setModal] = useState(false);

  const addModalHandler = () => {
    setModal(true);
  };
  const removeModalHandler = () => {
    setModal(false);
  };

  return (
    <div>
      <HideAppBar modalAdd={addModalHandler} />
      {modal && <Modal modalRemove={removeModalHandler} />}

      <Rewards />
      <Features />
    </div>
  );
};
export default WrapperLandingPage;
