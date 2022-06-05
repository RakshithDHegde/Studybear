import Header from "../Homepage/Header";

import React, { useState, useEffect, useCallback } from "react";
import Loading from "../Loading";
import { database } from "../firebase-config";
// "https://newsapi.org/v2/everything?q=technology%20and%20IT&language=en&pageSize=100&sortBy=publishedAt&apiKey=968caa08d86f44f999c31ca48bca1f6e"

// import LazyImage from "react-lazy-progressive-image";
import { ref, child, get } from "firebase/database";
import { useContext } from "react";
import AuthContext from "../store/auth-context";
import { update } from "firebase/database";

import Three from "../Homepage/Three";
// import LazyLoad from "react-lazy-load";
import Card from "react-animated-3d-card";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const News = () => {
  const [news, setNews] = useState([]);
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
    }, 10000);

    return () => clearTimeout(timer);
  }, []);

  const fetchNewsHandler = useCallback(async () => {
    setIsloading(true);
    // setError(null);

    try {
      const response = await fetch(
        "https://saurav.tech/NewsAPI/top-headlines/category/technology/in.json"
      );
      if (!response.ok) {
        throw new Error(response);
      }
      const data = await response.json();

      const transformedNews = data.articles.map((newsData) => {
        return {
          image: newsData.urlToImage,
          title: newsData.title,
          description: newsData.description,
          url: newsData.url,
          published: newsData.publishedAt,
        };
      });

      setIsloading(false);
      setNews(transformedNews);
    } catch (error) {
      //   setError(error.message);
      alert(error.message);
    }
    setIsloading(false);
  }, []);
  useEffect(() => {
    fetchNewsHandler();
  }, [fetchNewsHandler]);
  return (
    <>
      <Header />
      <div className="fixed top-0 -z-50  h-full w-full overflow-hidden">
        <Three />
      </div>
      <div className="flex justify-center my-11">
        <h1 className=" mx-auto text-6xl font-serif">NEWS</h1>
      </div>
      {isLoading && <Loading />}
      {!isLoading && (
        <div className="grid grid-cols-2 gap-y-24 mx-12  justify-center text-center ">
          {news.map((new1) => {
            if (new1.image === null) {
              new1.image = "https://i.ibb.co/q1vR1BZ/broken-1.png";
            }
            return (
              <div className="mx-auto">
                <a href={new1.url} target="_blank">
                  <Card
                    style={{
                      backgroundColor: "white",
                      width: "450px",
                      height: "510px",
                      cursor: "pointer",
                    }}
                    onClick={() => console.log("Card clicked")}
                  >
                    <div className="rounded-lg drop-shadow-3xl  h-full bg-white justify-center">
                      <LazyLoadImage
                        onerror="this.onerror=null; this.src='../doubt.png'"
                        effect="blur"
                        className="h-64 mx-auto w-full object-cover"
                        src={new1.image}
                        onError={({ currentTarget }) => {
                          currentTarget.onerror = null; // prevents looping
                          currentTarget.src =
                            "https://e7.pngegg.com/pngimages/829/733/png-clipart-logo-brand-product-trademark-font-not-found-logo-brand.png";
                        }}
                      />

                      <div className="bg-slate-100">
                        <h2 className="mx-5 font-sans text-xl">{new1.title}</h2>
                      </div>
                      <h2 className="my-5  mx-3 font-mono text-ellipsis">
                        {new1.description}
                      </h2>
                      <div className="flex justify-center">
                        <h1 className="absolute mt-3 bottom-0 pb-2 mx-auto">
                          {new1.published.substring(0, 10)}
                        </h1>
                      </div>
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
export default News;
