import { database } from "../firebase-config";
import { ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import Header from "../Homepage/Header";
import { UserCard } from "react-ui-cards";
import Fade from "react-reveal/Fade";
import { CardSwiper } from "react-card-rotate-swiper";
import TinderCard from "react-tinder-card";
import Loading from "../Loading";
import React from "react";
import { useCallback } from "react";
import Cards, { Card } from "react-swipe-card";
import { createActions, handleActions, combineActions } from "redux-actions";
const Memes = () => {
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
  const [arr, setArr] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  const fetchMemesHandler = useCallback(async () => {
    setIsloading(true);
    // setError(null);

    try {
      const response = await fetch("https://meme-api.herokuapp.com/gimme/50");
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();

      const transformedMeme = data.memes.map((memeData) => {
        return {
          url: memeData.url,
        };
      });

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
  const onSwipe = (direction) => {
    console.log("You swiped: " + direction);
  };

  const onCardLeftScreen = (myIdentifier) => {
    console.log(myIdentifier + " left the screen");
  };

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };
  return (
    <>
      <Header />
      {isLoading && <Loading />}
      <div className="App">
        {" "}
        <div className="flex justify-center my-11">
          <h1 className=" mx-auto lg:text-6xl text-3xl font-serif">MEMES😂</h1>
        </div>
        <div className="mx-12 ">
          <Cards onEnd={action("end")} className="master-root">
            {arr.map((ar) => (
              //   <div className="absolute my-12 mx-auto object-contain justify-center  w-1/2 h-1/2 ">
              /* <TinderCard
                onSwipe={onSwipe}
                onCardLeftScreen={() => onCardLeftScreen("fooBar")}
                className=" mx-10 my-10"
                flickOnSwipe={true}
              >
                <div className="h-1/2 justify-center mx-auto">
                  <img
                    height="100"
                    // width={1000}
                    className="object-cover my-20"
                    src={ar.url}
                  ></img>
                </div>
              </TinderCard> */
              /* <TinderCard
                className="swipe"
                key={ar.url}
                onSwipe={(dir) => swiped(dir, ar.url)}
                onCardLeftScreen={() => outOfFrame(ar.url)}
              >
                <div
                  style={{ backgroundImage: "url(" + ar.url + ")" }}
                  className="card h-full w-full absolute width-1/2"
                ></div>
              </TinderCard> */
              //   </div>
              <Card
                onSwipeLeft={action("swipe left")}
                onSwipeRight={action("swipe right")}
              >
                <img
                  height="100"
                  // width={1000}
                  className="object-cover my-20"
                  src={ar.url}
                ></img>
              </Card>
            ))}
          </Cards>
        </div>
      </div>
    </>
  );
};
export default Memes;
