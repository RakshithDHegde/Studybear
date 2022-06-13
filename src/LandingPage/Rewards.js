import Gift from "../gift.png";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import "./Rewards.css";
const Rewards = () => {
  return (
    <Fade bottom duration={1200}>
      <div className="grid lg:grid-cols-2 grid-cols-1  text-center mx-auto lg:mx-0   mt-10 lg:ml-20 lg:mt-32">
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
          className="justify-center"
        >
          <img src={Gift} className="ima justify-center mx-auto" />
        </motion.div>
        <div className="text-center mx-auto">
          <h1 className="lg:text-8xl lg:mx-7  text-center text-5xl mx-auto">
            Get Exciting Rewards!!
          </h1>
          <h2 className="lg:ml-8 lg:text-lg lg:mt-8 text-xl text-center mt-5 mx-auto font-sans">
            Get rewarded for uploading your notes💥💥
          </h2>
        </div>
      </div>
    </Fade>
  );
};
export default Rewards;
