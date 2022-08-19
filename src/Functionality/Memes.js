import { database } from "../firebase-config";
import { ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import Header from "../Homepage/Header";
import { UserCard } from "react-ui-cards";
import Fade from "react-reveal/Fade";
import { CardSwiper } from "react-card-rotate-swiper";
import TinderCard from "react-tinder-card";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import Loading from "../Loading";
import React from "react";
import { useCallback } from "react";
import { createActions, handleActions, combineActions } from "redux-actions";
import SwipeableViews from "react-swipeable-views";
import { useDrag } from "@use-gesture/react";
import { useSprings, animated, interpolate } from "react-spring";
import { useGesture } from "@use-gesture/react";
import styles from "./styles.module.css";
import { Virtual } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

SwiperCore.use([EffectCoverflow, Pagination]);
// const to = (i: number) => ({
//   x: 0,
//   y: i * -4,
//   scale: 1,
//   rot: -10 + Math.random() * 20,
//   delay: i * 100,
// });
// const from = (_i: number) => ({ x: 0, rot: 0, scale: 1.5, y: -1000 });
// // This is being used down there in the view, it interpolates rotation and scale into a css transform
// const trans = (r: number, s: number) =>
//   `perspective(1500px) rotateX(30deg) rotateY(${
//     r / 10
//   }deg) rotateZ(${r}deg) scale(${s})`;

const Memes = () => {
  const [arr, setArr] = useState([]);

  // const [datab, setDatab] = useState([]);
  // useEffect(() => {
  //   get(child(ref(database), `branch/is/teachers`))
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         setDatab(JSON.parse(JSON.stringify(Object.values(snapshot.val()))));
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);
  // return (
  //   <>
  //     <Header />
  //     <div className="flex justify-center my-11">
  //       <h1 className=" lg:mx-auto lg:text-6xl font-serif flex text-center text-3xl mx-3">
  //         CONNECT TO TEACHERS
  //       </h1>
  //     </div>
  //     <div className="bg-white drop-shadow-xl lg:my-12 lg:mx-36 my-4 mx-8 rounded-xl">
  //       {datab.map((data) => {
  //         let icon;
  //         let whatsapp = `https://wa.me/91${data.mobile}`;
  //         if (data.mobile == "") {
  //           icon = false;
  //         } else {
  //           icon = true;
  //         }
  //         let mail = `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`;
  //         return (
  //           <>
  //             <Fade bottom duration={1200}>
  //               <div className="bg-slate-100 mt-16  drop-shadow-xl rounded-xl">
  //                 <Fade bottom duration={1200}>
  //                   <div className="grid grid-cols-2">
  //                     <h1 className="lg:text-5xl lg:mx-6 lg:pt-7 pt-3 ml-3 text-base  font-medium font-mono ">
  //                       {data.name}
  //                     </h1>
  //                     <div className=" flex justify-end ">
  //                       <img
  //                         src={data.url}
  //                         className="object-contain lg:ml-full h-full lg:w-44  w-20 mt-6 mr-3 "
  //                       ></img>
  //                     </div>
  //                   </div>
  //                 </Fade>
  //                 <Fade bottom duration={1200}>
  //                   <h1 className="font-mono mr-48 lg:ml-6 ml-3 lg:mt-0 lg:text-xl text-xs absolute lg:bottom-1/2 top-1/3 break-words inline-flex text-ellipsis">
  //                     Specializtion:{data.specialization}
  //                   </h1>
  //                 </Fade>
  //                 <Fade bottom duration={1200}>
  //                   <div className="flex lg:py-6 lg:ml:0 ml-6 pt-6 pb-3">
  //                     <a href={mail} target="_blank">
  //                       <img
  //                         className="lg:h-16 lg:ml-12 object-contain h-8 flex"
  //                         src="https://i.ibb.co/Cthzn60/gmail.png"
  //                       ></img>
  //                     </a>
  //                     {icon && (
  //                       <a href={whatsapp} target="_blank">
  //                         <img
  //                           className="lg:h-16 h-8 object-contain ml-12 "
  //                           src="https://i.ibb.co/0DrvF64/whatsapp.png"
  //                         ></img>
  //                       </a>
  //                     )}
  //                   </div>
  //                 </Fade>
  //               </div>
  //             </Fade>
  //           </>
  //         );
  //       })}
  //     </div>
  //   </>
  // );

  const [isLoading, setIsloading] = useState(false);
  const fetchMemesHandler = useCallback(async () => {
    setIsloading(true);
    // setError(null);

    try {
      const response = await fetch(
        "https://meme-api.herokuapp.com/gimme/wholesomememes/50"
      );
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();

      const transformedMeme = data.memes.map((memeData) => {
        // return {
        //   url: memeData.url,
        // };
        return { url: memeData.url };
        // return memeData.url;
      });
      console.log(transformedMeme);
      setIsloading(false);
      setArr(transformedMeme);
      console.log(arr);
    } catch (error) {
      //   setError(error.message);
      alert(error.message);
    }
    setIsloading(false);
  }, []);
  useEffect(() => {
    fetchMemesHandler();
    console.log(arr);
  }, [fetchMemesHandler]);

  // const [gone] = useState(() => new Set()); // The set flags all the cards that are flicked out
  // const [props, api] = useSprings(arr.length, (i) => ({
  //   ...to(i),
  //   from: from(i),
  // })); // Create a bunch of springs using the helpers above
  // // Create a gesture, we're interested in down-state, delta (current-pos - click-pos), direction and velocity
  // const bind = useDrag(
  //   ({ args: [index], down, movement: [mx], direction: [xDir], velocity }) => {
  //     const trigger = velocity > 0.2; // If you flick hard enough it should trigger the card to fly out
  //     const dir = xDir < 0 ? -1 : 1; // Direction should either point left or right
  //     if (!down && trigger) gone.add(index); // If button/finger's up and trigger velocity is reached, we flag the card ready to fly out
  //     set((i) => {
  //       if (index !== i) return; // We're only interested in changing spring-data for the current spring
  //       const isGone = gone.has(index);
  //       const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0; // When a card is gone it flys out left or right, otherwise goes back to zero
  //       const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0); // How much the card tilts, flicking it harder makes it rotate faster
  //       const scale = down ? 1.1 : 1; // Active cards lift up a bit
  //       return {
  //         x,
  //         rot,
  //         scale,
  //         delay: undefined,
  //         config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
  //       };
  //     });
  //     if (!down && gone.size === arr.length)
  //       setTimeout(() => gone.clear() || set((i) => to(i)), 600);
  //   }
  // );
  const slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <div className="App">
        {" "}
        <div className="flex justify-center my-11">
          <h1 className=" mx-auto lg:text-6xl text-3xl font-serif">MEMES😂</h1>
        </div>
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={false}
          className="mySwiper mt-0"
        >
          {arr.map((ar) => (
            <SwiperSlide className="h-full">
              <div className="lg:w-3/4 lg:h-3/4 lg:scale-70 my-auto mx-auto justify-center text-center">
                <img
                  src={ar.url}
                  className="lg:h-96 my-auto  lg:w-full object-contain 	;"
                  width="100%"
                  height="50%"
                ></img>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Memes;
