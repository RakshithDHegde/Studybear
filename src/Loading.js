import logo from "./StudyBear.png";
import { motion } from "framer-motion";
const Loading = () => {
  return (
    <>
      <div className="h-full fixed top-0 bottom-0 w-full z-30 bg-white text-center ">
        <div className="">
          <motion.div
            animate={{ y: [0, 50, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2.5,
            }}
            className="mt-16"
          >
            <img className=" mx-auto" src={logo}></img>
          </motion.div>
          <h1 className="text-5xl text-sky-400 font-mono">Just a moment..</h1>
        </div>
      </div>
    </>
  );
};

export default Loading;
