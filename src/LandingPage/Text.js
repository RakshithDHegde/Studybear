import React from "react";
import { motion } from "framer-motion";
import Animation from "../Animation2.gif";
import Button from "@mui/material/Button";
import notes from "../notesh.png";
import mentor from "../mentorh.png";
import newspaper from "../newspaperh.png";
import event from "../eventh.png";
import talk from "../talkh.png";
import { useMediaQuery } from "react-responsive";

import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Text = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  return (
    <React.Fragment>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        {isDesktopOrLaptop && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 60,
              damping: 20,
            }}
          >
            <h1 className="lg:text-8xl tracking-wide subpixel-antialiased font-sans text-black  lg:pr-40 lg:mr-64 font-medium leading-normal text-5xl">
              Learning Redefined
            </h1>
          </motion.div>
        )}

        <div className="lg:ml-15 ml-0  pt-10 relative text-center -mt-10  lg:left-32">
          <img
            className="lg:w-full w-96"
            width={10000}
            height={20000}
            src={Animation}
            alt="Animation"
          />
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
        <div className="grid lg:grid-cols-2 grid-cols-1 pt-4 gap-2 relative lg:bottom-36 lg:mt-0 mt-3  bottom-8">
          <h4 className="lg:text-lg text-base font-medium font-serif subpixel-antialiased  ">
            One stop solution for Learning---from Notes to Connecting experts---
            <spans className="text-3xl">studybear</spans> has it all
          </h4>
        </div>
      </motion.div>
      <div className="relative lg:bottom-16 bottom-3 mx-auto  ">
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
