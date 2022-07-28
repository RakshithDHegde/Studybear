import Header from "../Homepage/Header";
import { database } from "../firebase-config";
import { useContext, useEffect, useState, useRef } from "react";
import { ref, child, get, set, push } from "firebase/database";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { withRouter } from "react-router";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase-config";
import { ref as sRef, getDownloadURL } from "firebase/storage";
import { update } from "firebase/database";
// import { push } from "firebase/database";

import * as React from "react";

import LinearProgress from "@mui/material/LinearProgress";
import "react-lazy-load-image-component/src/effects/blur.css";

import AuthContext from "../store/auth-context";

const Notes = () => {
  const [subjects, setSubjects] = useState([]);
  const [sub, setSub] = useState("");
  const [units, setUnits] = useState([]);
  const [uni, setUni] = useState("");
  const [topics, setTopics] = useState([]);
  const [topi, setTopi] = useState("");
  const [uploads, setUploads] = useState([]);
  const [finalObj, setFinalObj] = useState([]);
  const [fileaaa, setFileaaa] = useState("");
  const [pro, setPro] = useState(0);
  const [bar, setBar] = useState(false);
  const [flag, setFlag] = useState(false);

  const myRef = useRef(null);

  const executeScroll = () => myRef.current.scrollIntoView();

  // const fileHandler = (event) => {
  //   setFile(event.target[0].files[0]);
  //   console.log(event.target.files[0]);
  // };

  const subjectHandler = (event) => {
    setSub(event.target.value);
    sessionStorage.setItem("subject", event.target.value);
  };
  const unitHandler = (event) => {
    sessionStorage.setItem("unit", event.target.value);
    setUni(event.target.value);
  };
  const topicHandler = (event) => {
    sessionStorage.setItem("topic", event.target.value);
    setTopi(event.target.value);
  };

  const uploadIncrementer = () => {
    let a;
    get(child(ref(database), `users/${authCtx.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          a = snapshot.child("totaluploads").val() + 1;
          console.log(snapshot.child("totaluploads").val());
          update(ref(database, `users/${authCtx.uid}`), {
            totaluploads: a,
          })
            .then(() => {})
            .catch((error) => {
              console.log(error);
            });
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });

    // let v1 = views + 1;

    console.log(typeof v1);
  };

  useEffect(() => {
    setTopi(sessionStorage.getItem("topic"));
    setUni(sessionStorage.getItem("unit"));
    setSub(sessionStorage.getItem("subject"));
  }, []);
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(fileaaa);
    if (
      sub === "" ||
      topi === "" ||
      uni === "" ||
      fileaaa === "" ||
      sub === null ||
      topi === null ||
      uni === null ||
      fileaaa === null
    ) {
      alert("Please enter all the fields");
    } else {
      const storageRef = sRef(storage, fileaaa.name);
      setBar(true);

      // 'file' comes from the Blob or File API
      const uploadTask = uploadBytesResumable(storageRef, fileaaa);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setPro(progress);
          console.log("Upload is " + progress + "% done");
          switch (snapshot.state) {
            case "paused":
              console.log("Upload is paused");
              break;
            case "running":
              console.log("Upload is running");
              break;
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case "storage/unauthorized":
              // User doesn't have permission to access the object
              break;
            case "storage/canceled":
              // User canceled the upload
              break;

            // ...

            case "storage/unknown":
              // Unknown error occurred, inspect error.serverResponse
              break;
          }
        },
        () => {
          // Upload completed successfully, now we can get the download URL
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log("File available at", downloadURL);
            const uid = authCtx.uid;
            let obje = {};
            obje[uid] = downloadURL;

            function UpdateData() {
              update(
                ref(
                  database,
                  `branch/is/${authCtx.semester}/2018/subjects/${sub}/units/${uni}/${topi}`
                ),
                obje
              )
                .then(() => {
                  setBar(false);
                  alert("Uploaded");
                  searchHandler1();
                  uploadIncrementer();
                })
                .catch((error) => {
                  console.log(error);
                });

              // database
              //   .ref(
              //     `branch/is/${authCtx.semester}/2018/subjects/${sub}/units/${uni}/${topi}`
              //   )
              //   .set({ [downloadURL]: { uid } });
            }
            UpdateData();
          });
        }
      );
    }
  };

  const authCtx = useContext(AuthContext);
  useEffect(() => {
    get(child(ref(database), `branch/is/${authCtx.semester}/2018/subjects`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(Object.keys(snapshot.val()));
          setSubjects(Object.keys(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [authCtx]);

  useEffect(() => {
    get(
      child(
        ref(database),
        `branch/is/${authCtx.semester}/2018/subjects/${sub}/units`
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          //   console.log(Object.keys(snapshot.val()));
          setUnits(Object.keys(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [sub]);

  useEffect(() => {
    get(
      child(
        ref(database),
        `branch/is/${authCtx.semester}/2018/subjects/${sub}/units/${uni}`
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          setTopics(Object.keys(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, [uni, sub]);

  const searchHandler1 = () => {
    setFlag(true);
    get(
      child(
        ref(database),
        `branch/is/${authCtx.semester}/2018/subjects/${sub}/units/${uni}/${topi}`
      )
    )
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUploads(Object.entries(snapshot.val()));
          console.log(Object.entries(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const searchHandler = (event) => {
    setFlag(true);
    event.preventDefault();
    console.log(sub);
    if (sub === "" || topi === "" || uni === "") {
      alert("Please enter all fields");
    } else {
      get(
        child(
          ref(database),
          `branch/is/${authCtx.semester}/2018/subjects/${sub}/units/${uni}/${topi}`
        )
      )
        .then((snapshot) => {
          if (snapshot.exists()) {
            setUploads(Object.entries(snapshot.val()));
            console.log(Object.entries(snapshot.val()));
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
    setTimeout(() => {
      executeScroll();
    }, 1000);
  };

  useEffect(() => {
    setFinalObj([]);
    uploads.map((up) => {
      let name, extrapoints, totalviews, totaluploads;

      get(child(ref(database), `users/${up[0]}`))
        .then((snapshot) => {
          if (snapshot.exists()) {
            // console.log(snapshot.child("name").val());
            setFinalObj((prev) => [
              ...prev,
              {
                uid: up[0],
                name: snapshot.child("name").val(),
                extrapoints: snapshot.child("extrapoints").val(),
                totalviews: snapshot.child("totalviews").val(),
                totaluploads: snapshot.child("totaluploads").val(),
                url: up[1],
              },
            ]);
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    });
  }, [uploads]);

  return (
    <>
      <Header />

      {bar && (
        <LinearProgress
          variant="determinate"
          className="w-full absolute bottom-0 "
          max={100}
          value={pro}
        />
      )}
      <h1 className="lg:text-5xl text-3xl mx-auto mt-6 text-center font-serif mb-6">
        Notes
      </h1>

      <div className="text-center justify-center drop-shadow-xl bg-slate-100 lg:mx-96 mx-7 rounded-2xl ">
        <FormControl sx={{ my: 3, ml: 0, width: 3 / 4 }}>
          <InputLabel id="demo-simple-select-label" sx={{ ml: 0.8 }}>
            Subject
          </InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Subject"
            onChange={subjectHandler}
            value={sub}
          >
            {subjects.map((subject) => {
              return <MenuItem value={subject}>{subject}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ my: 3, ml: 0, width: 3 / 4 }}>
          <InputLabel id="demo-simple-select-label-unit" sx={{ ml: 0.8 }}>
            Unit
          </InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Unit"
            onChange={unitHandler}
            value={uni}
          >
            {units.map((unit) => {
              return <MenuItem value={unit}>{unit}</MenuItem>;
            })}
          </Select>
        </FormControl>
        <FormControl sx={{ my: 3, ml: 0, width: 3 / 4 }}>
          <InputLabel id="demo-simple-select-label-unit" sx={{ ml: 0.8 }}>
            Topic
          </InputLabel>
          <Select
            required
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="Unit"
            onChange={topicHandler}
            value={topi}
          >
            {topics.map((topic) => {
              return <MenuItem value={topic}>{topic}</MenuItem>;
            })}
          </Select>
        </FormControl>

        <button
          type="submit"
          onClick={searchHandler}
          className=" bg-sky-400 block drop-shadow-lg rounded-lg font-serif text-slate-100 py-2   px-5 my- mx-auto"
        >
          <a href="#pdfs">Search</a>
        </button>

        <form onSubmit={submitHandler}>
          <div className="bg-white mt-9 rounded-b-2xl lg:my-0 ">
            <input
              className="lg:mt-0 mt-4"
              onChange={(event) => {
                console.log(event.target.files[0]);
                setFileaaa(event.target.files[0]);
              }}
              accept="application/pdf"
              type="file"
            ></input>
            <button
              type="submit"
              className="  bg-sky-400 drop-shadow-lg font-serif text-slate-100 py-2 lg:mt-2 mt-3 mx-auto  px-5 rounded-lg  my-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
      <section>
        {flag && finalObj.length == 0 && (
          <img
            src="https://i.ibb.co/M68QFN0/istockphoto-1296187581-170667a-removebg-preview.png"
            className="object-contain h-100 w-100 mx-auto lg:my-6 my-3"
          />
        )}
        <div
          id="pdfs"
          className="grid lg:grid-cols-2 grid-cols-1  gap-4 drop-shadow-xl my-10 rounded-lg  lg:mx-96 mx-7 justify-center "
          ref={myRef}
        >
          {finalObj.map((obj) => {
            console.log(obj);
            let reputation = "";
            const totalpoints =
              obj.extrapoints + obj.totaluploads * 20 + obj.totalviews * 10;
            if (totalpoints > 1000) {
              reputation = "High";
            } else if (totalpoints < 1000 && totalpoints >= 400) {
              reputation = "Average";
            } else {
              reputation = "Low";
            }
            const url = obj.url;

            return (
              <Link
                to={{
                  pathname: "/reader",
                  state: { hoo: obj.url, uid: obj.uid },
                }}
              >
                <div
                  className=" bg-slate-100 rounded-lg text-center "
                  id="pdfs"
                >
                  <LazyLoadImage
                    className="object-contain h-60 mx-auto my-4"
                    src="https://i.ibb.co/jfvtB8F/pdf-file-4059096-3364019.png"
                    effect="blur"
                  />
                  <h1 className="">Author's Name: {obj.name}</h1>
                  <h1 className="my-4">Reputation: {reputation}</h1>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default withRouter(Notes);
