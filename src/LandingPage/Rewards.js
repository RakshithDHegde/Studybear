import Gift from "../gift.png";
import { motion } from "framer-motion";
import Fade from "react-reveal/Fade";
import "./Rewards.css";
const Rewards = () => {
  return (
    <Fade bottom duration={1200}>
      <div className="grid grid-cols-2 ml-20 mt-32">
        <motion.div
          animate={{ y: [0, 50, 0] }}
          transition={{ repeat: Infinity, duration: 2.5 }}
        >
          <img src={Gift} className="ima" />
        </motion.div>
        <div>
          <h1 className="text-8xl mx-7">Get Exciting Rewards!!</h1>
          <h2 className="ml-8 text-lg mt-8 font-normal">
            Get rewarded for uploading your notes💥💥
          </h2>
        </div>
      </div>
    </Fade>
  );
};
export default Rewards;
