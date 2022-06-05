import Header from "../Homepage/Header";
import { useState, useEffect } from "react";
import { database } from "../firebase-config";
import { ref, child, get } from "firebase/database";
import Fade from "react-reveal/Fade";
const Circular = () => {
  const [circular, setCircular] = useState([]);

  useEffect(() => {
    get(child(ref(database), `branch/is/circulars`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          console.log(Object.entries(snapshot.val()));
          setCircular(Object.entries(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <>
      <Header />

      <div className="flex justify-center my-11">
        <h1 className=" mx-auto text-6xl font-serif">CIRCULARS</h1>
      </div>
      <Fade bottom duration={1200}>
        <div className="bg-white rounded-xl drop-shadow-xl mx-72 ">
          {circular.map((cir) => {
            return (
              <>
                <a href={cir[1]} target="_blank">
                  <Fade bottom duration={1200}>
                    <div className="my-12 bg-slate-100 text-left rounded-xl grid grid-cols-2">
                      <div>
                        <h1 className="text-3xl mx-12 my-12 font-serif  ">
                          {cir[0]}
                        </h1>
                      </div>
                      <div className="flex justify-end mr-7">
                        <img
                          src="https://i.ibb.co/ZT92635/rvce.png"
                          className="py-3"
                        ></img>
                      </div>
                    </div>
                  </Fade>
                </a>
              </>
            );
          })}
        </div>
      </Fade>
    </>
  );
};
export default Circular;
