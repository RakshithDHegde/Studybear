import Notes from "../notes.png";
import { motion } from "framer-motion";
import Events from "../Events.png";
import Doubt from "../doubt.png";
import News from "../news.png";
import { Fade } from "react-reveal";
const Features = () => {
  return (
    <>
      <Fade bottom duration={1200}>
        <div className="mx-36 grid gap-16 grid-cols-2 mb-10">
          <div className=" bg-sky-300 rounded-xl text-center drop-shadow ">
            <img className="mx-auto my-auto" src={Notes} width={250} />

            <h1 className="text-white text-6xl mx-20 py-10 font-semibold font-sans">
              One stop solution for all the notes
            </h1>
          </div>
          {/* //// second div //// */}
          <div className=" bg-white rounded-xl text-center drop-shadow ">
            <img className="mx-auto" src={Doubt} width={250} />
            <h1 className="text-sky-300 text-6xl mx-20 py-2 font-semibold font-sans">
              Doubts??
            </h1>
            <h1 className="text-sky-300 text-6xl mx-20 py-10 font-semibold font-sans">
              Connect to your Peers and Teachers
            </h1>
          </div>
        </div>
      </Fade>
      <Fade bottom duration={1200}>
        {/* //Second row */}
        <div className="mx-36 grid gap-16 grid-cols-2 my-10">
          <div className=" bg-white rounded-xl text-center drop-shadow ">
            <img className="mx-auto" src={News} width={250} />

            <h1 className="text-sky-300 text-6xl mx-20 py-10 font-semibold font-sans">
              Get updated about all the latest Technology
            </h1>
          </div>
          {/* //// second div //// */}
          <div className=" bg-sky-300 rounded-xl text-center drop-shadow ">
            <img className="mx-auto my-auto" src={Events} width={250} />

            <h1 className="text-white text-6xl mx-20 py-10 font-semibold font-sans">
              Get updated about all the Events and more.....
            </h1>
          </div>
        </div>
      </Fade>
    </>
  );
};
export default Features;
