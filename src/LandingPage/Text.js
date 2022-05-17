import React from "react";
import { motion } from "framer-motion";
import Animation from "../Animation2.gif";
import Button from "@mui/material/Button";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Text = (props) => {
  return (
    <React.Fragment>
      <div className="grid grid-cols-2 gap-2">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ rotate: 0, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 60,
            damping: 20,
          }}
        >
          <h1 className="text-8xl tracking-wide subpixel-antialiased font-sans text-black  pr-40 mr-64 font-medium leading-normal">
            Learning Redefined
          </h1>
        </motion.div>
        <div className="ml-15 pt-10 relative left-32">
          <img width={10000} height={20000} src={Animation} alt="Animation" />
        </div>
      </div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ rotate: 0, scale: 1 }}
        transition={{
          type: "spring",
          stiffness: 60,
          damping: 20,
        }}
      >
        <div className="grid grid-cols-2 pt-4 gap-2 relative bottom-36">
          <h4 className="text-lg font-medium subpixel-antialiased  ">
            One stop solution for Learning---from Notes to Connecting experts---
            <spans className="text-3xl">studybear</spans> has it all
          </h4>
        </div>
      </motion.div>
      <div className="relative bottom-16 ">
        <Button
          style={{
            borderRadius: 50,
            color: "white",
            backgroundColor: "#1DA1F2",
          }}
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          onClick={props.onClick}
        >
          Get Started
        </Button>
      </div>
    </React.Fragment>
  );
};
export default Text;
