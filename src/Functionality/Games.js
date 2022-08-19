import Header from "../Homepage/Header";
import { useState, useEffect } from "react";
import { database } from "../firebase-config";
import { ref, child, get } from "firebase/database";
import React from "react";
import Snake from "snake-game-react";
const Games = () => {
  // useEffect(() => {
  //   get(child(ref(database), `branch/is/circulars`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setCircular(Object.entries(snapshot.val()));
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <Header />

      <div className="flex justify-center my-11">
        <h1 className=" mx-auto lg:text-6xl text-3xl font-serif">Games🎮</h1>
      </div>
      <div className="mx-auto justify-center align-middle items-center text-center shadow-xl">
        {" "}
        <div className="App">
          <Snake color1="#248ec2" color2="#1d355e" backgroundColor="#ebebeb" />
        </div>
      </div>

      {/* <Fade bottom duration={1200}>
        <div className="bg-white rounded-xl drop-shadow-xl lg:mx-72 mx-5 ">
          {circular.map((cir) => {
            return (
              <>
                <a href={cir[1]} target="_blank">
                  <Fade bottom duration={1200}>
                    <div className="my-12 bg-slate-100 text-left rounded-xl grid grid-cols-2">
                      <div>
                        <h1 className="lg:text-3xl text-xl mx-12  mt-9 lg:mx-12 lg:my-12 font-serif  ">
                          {cir[0]}
                        </h1>
                      </div>
                      <div className="flex justify-end mr-7">
                        <img
                          src="https://i.ibb.co/ZT92635/rvce.png"
                          className="object-contain lg:py-3 mt-4 lg:h-36 h-20 my-4"
                        ></img>
                      </div>
                    </div>
                  </Fade>
                </a>
              </>
            );
          })}
        </div>
      </Fade> */}
    </>
  );
};
export default Games;
