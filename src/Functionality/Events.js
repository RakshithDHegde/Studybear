import Header from "../Homepage/Header";
import React, { useState, useEffect, useCallback } from "react";
import Loading from "../Loading";

import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import Three from "../Homepage/Three";
import Card from "react-animated-3d-card";
import { database } from "../firebase-config";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { update, ref, child, get } from "firebase/database";
const Events = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsloading] = useState(false);
  //   const [error, setError] = useState(null);
  const authCtx = useContext(AuthContext);
  useEffect(() => {
    let a;
    get(child(ref(database), `users/${authCtx.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          a = snapshot.child("extrapoints").val() + 5;
          console.log(snapshot.child("totalviews").val());
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // let v1 = views + 1;
    const timer = setTimeout(() => {
      console.log(typeof v1);
      function UpdateData() {
        update(ref(database, `users/${authCtx.uid}`), {
          extrapoints: a,
        })
          .then(() => {})
          .catch((error) => {
            console.log(error);
          });
      }
      UpdateData();
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  const fetchEventsHandler = useCallback(async () => {
    setIsloading(true);
    // setError(null);

    try {
      const response = await fetch("https://kontests.net/api/v1/all");
      if (!response.ok) {
        throw new Error("Something Went Wrong");
      }
      const data = await response.json();
      console.log(data);

      const transformedEvents = data.map((eventsData) => {
        return {
          endTime: eventsData.end_time,
          name: eventsData.name,

          url: eventsData.url,
          site: eventsData.site,
          startTime: eventsData.start_time,
        };
      });

      setIsloading(false);
      setEvents(transformedEvents);
    } catch (error) {
      //   setError(error.message);
      alert(error.message);
    }
    setIsloading(false);
  }, []);
  useEffect(() => {
    fetchEventsHandler();
  }, [fetchEventsHandler]);
  return (
    <>
      <Header />
      <div className="fixed top-0 -z-50  h-full w-full overflow-hidden">
        <Three />
      </div>
      <div className="flex justify-center my-11">
        <h1 className=" mx-auto text-6xl font-serif">CODING EVENTS</h1>
      </div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="grid grid-cols-2  justify-center gap-y-24 mx-12   text-center ">
          {events.map((event) => {
            const startDate = new Date(
              Date.parse(event.startTime)
            ).toLocaleString("en-IN", {
              year: "numeric",
              month: "long",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            });
            let image = "";

            const endDate = new Date(Date.parse(event.endTime)).toLocaleString(
              "en-IN",
              {
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "2-digit",
                minute: "2-digit",
              }
            );

            if (event.site === "LeetCode") {
              image = "https://i.ibb.co/Nszr04R/LeetCode.png";
            } else if (event.site === "AtCoder") {
              image = "https://i.ibb.co/7GWyP2d/AtCoder.png";
            } else if (event.site === "CodeChef") {
              image = "https://i.ibb.co/kBWQQ8q/CodeChef.png";
            } else if (event.site === "HackerEarth") {
              image = "https://i.ibb.co/XVfX2Cs/Hacker-Earth.png";
            } else if (event.site === "HackerRank") {
              image = "https://i.ibb.co/KGx52yH/Hacker-Rank.png";
            } else if (event.site === "Kick Start") {
              image = "https://i.ibb.co/pnrPj9H/Kick-Start.png";
            } else if (event.site === "TopCoder") {
              image = "https://i.ibb.co/RTDKLKh/TopCoder.png";
            } else if (event.site === "CodeForces") {
              image = "https://i.ibb.co/ScvSv9m/Code-Forces.png";
            }

            return (
              <div className="justify-center text-center mx-auto">
                <a href={event.url} target="_blank">
                  <Card
                    style={{
                      backgroundColor: "white",
                      width: "450px",
                      height: "510px",
                      cursor: "pointer",
                      p: "auto",
                      ml: "3",
                    }}
                    onClick={() => console.log("Card clicked")}
                  >
                    <div className="rounded-lg drop-shadow-3xl  h-full bg-white justify-center">
                      <LazyLoadImage
                        effect="blur"
                        onerror="this.onerror=null; this.src='../doubt.png'"
                        className="h-64 mx-auto w-full object-contain"
                        src={image}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png";
                        }}
                      />
                      <div className="bg-slate-100">
                        <h2 className="mx-5 font-sans text-xl">{event.name}</h2>
                      </div>
                      <h2 className=" text-2xl font-mono my-5 mx-3  ">
                        Start: {startDate}
                      </h2>
                      <h2 className=" font-mono my-5 mx-3 text-2xl ">
                        End: {endDate}
                      </h2>
                    </div>
                  </Card>
                </a>
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
export default Events;
