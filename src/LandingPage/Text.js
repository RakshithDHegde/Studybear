import React from "react";
import { motion } from "framer-motion";
import Animation from "../animate3.webm";
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
          {/* <img
            className="lg:w-full w-96"
            width={10000}
            height={20000}
            src={Animation}
            alt="Animation"
          /> */}
          <video
            width="1000"
            height="1000"
            autoplay="autoplay"
            loop="true"
            muted
          >
            <source src={Animation} type="video/webm" />
          </video>
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
            One stop solution for Learning---from Notes to knowing about
            events---
            <spans className="text-3xl">studybear</spans> has it all
          </h4>
        </div>
      </motion.div>
      <div className="relative lg:bottom-16 bottom-3 mx-auto inline-flex  ">
        <Button
          style={{
            borderRadius: 50,
            color: "white",
            backgroundColor: "#1DA1F2",
            size: "large",
          }}
          variant="contained"
          endIcon={<ArrowForwardIosIcon />}
          onClick={props.onClick}
        >
          <h1 className="text-xl">Get Started</h1>
        </Button>
      </div>

      <button className="lg:bottom-14 lg:ml-5 lg:mt-0 mt-4 bottom-3 relative inline-flex">
        <a
          href="https://play.google.com/store/apps/details?id=com.sandeep.studybear"
          target="_blank"
        >
          <div class="inline-flex focus:ring-4  w-44 h-12 bg-black text-white rounded-lg items-center justify-center">
            <div class="mr-3">
              <svg viewBox="30 336.7 120.9 129.2" width="25">
                <path
                  fill="#FFD400"
                  d="M119.2,421.2c15.3-8.4,27-14.8,28-15.3c3.2-1.7,6.5-6.2,0-9.7  c-2.1-1.1-13.4-7.3-28-15.3l-20.1,20.2L119.2,421.2z"
                />
                <path
                  fill="#FF3333"
                  d="M99.1,401.1l-64.2,64.7c1.5,0.2,3.2-0.2,5.2-1.3  c4.2-2.3,48.8-26.7,79.1-43.3L99.1,401.1L99.1,401.1z"
                />
                <path
                  fill="#48FF48"
                  d="M99.1,401.1l20.1-20.2c0,0-74.6-40.7-79.1-43.1  c-1.7-1-3.6-1.3-5.3-1L99.1,401.1z"
                />
                <path
                  fill="#3BCCFF"
                  d="M99.1,401.1l-64.3-64.3c-2.6,0.6-4.8,2.9-4.8,7.6  c0,7.5,0,107.5,0,113.8c0,4.3,1.7,7.4,4.9,7.7L99.1,401.1z"
                />
              </svg>
            </div>
            <div>
              <div class="text-xs">GET IT ON</div>
              <div class="text-lg font-semibold font-sans -mt-1">
                Google Play
              </div>
            </div>
          </div>
        </a>
      </button>
    </React.Fragment>
  );
};
export default Text;
