import Header from "../Homepage/Header";
import { database } from "../firebase-config";
import { useContext, useEffect, useState } from "react";
import { ref, child, get, set, push } from "firebase/database";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import { Router } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { uploadBytesResumable } from "firebase/storage";
import { storage } from "../firebase-config";
import { ref as sRef, getDownloadURL } from "firebase/storage";
import { update } from "firebase/database";
// import { push } from "firebase/database";
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

  // const fileHandler = (event) => {
  //   setFile(event.target[0].files[0]);
  //   console.log(event.target.files[0]);
  // };

  const subjectHandler = (event) => {
    setSub(event.target.value);
    console.log(JSON.stringify(event.target.value));
  };
  const unitHandler = (event) => {
    setUni(event.target.value);
  };
  const topicHandler = (event) => {
    setTopi(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(fileaaa);
    if (sub === "" || topi === "" || uni === "" || fileaaa === "") {
      alert("Please enter all the fields");
    } else {
      const storageRef = sRef(storage, fileaaa.name);

      // 'file' comes from the Blob or File API
      const uploadTask = uploadBytesResumable(storageRef, fileaaa);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
                .then(() => {})
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

  const searchHandler = (event) => {
    event.preventDefault();
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
      <h1 className="text-5xl mx-auto mt-6 text-center font-serif mb-6">
        Notes
      </h1>

      <div className="text-center justify-center drop-shadow-xl bg-slate-100 mx-96 rounded-2xl ">
        <FormControl sx={{ my: 3, ml: 3, width: 400 }}>
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
        <FormControl sx={{ my: 3, ml: 3, width: 400 }}>
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
        <FormControl sx={{ my: 3, ml: 3, width: 400 }}>
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
          className=" bg-sky-400 block drop-shadow-lg rounded-lg font-serif text-slate-100 py-2  px-5 my-2 mx-auto"
        >
          <a href="#pdfs">Search</a>
        </button>
        <form onSubmit={submitHandler}>
          <div className="bg-white mt-9 rounded-b-2xl">
            <input
              onChange={(event) => {
                console.log(event.target.files[0]);
                setFileaaa(event.target.files[0]);
              }}
              accept="application/pdf"
              type="file"
            ></input>
            <button
              type="submit"
              className="  bg-sky-400 drop-shadow-lg font-serif text-slate-100 py-2 mx-auto  px-5 rounded-lg  my-2"
            >
              Upload
            </button>
          </div>
        </form>
      </div>
      <section>
        <div
          id="pdfs"
          className="grid grid-cols-2  gap-4 drop-shadow-xl my-10 rounded-lg  mx-96 justify-center "
        >
          {finalObj.map((obj) => {
            let reputation = "";
            const totalpoints =
              obj.extrapoints + obj.totaluploads * 20 + obj.totalviews * 1;
            if (totalpoints > 100) {
              reputation = "High";
            } else if (totalpoints < 100 && totalpoints >= 50) {
              reputation = "Average";
            } else {
              reputation = "Low";
            }

            return (
              <a href={obj.url} target="_blank">
                <div className=" bg-slate-100 rounded-lg text-center ">
                  <LazyLoadImage
                    className="object-contain h-60 mx-auto my-4"
                    src="https://i.ibb.co/jfvtB8F/pdf-file-4059096-3364019.png"
                    effect="blur"
                  />
                  <h1 className="">Author's Name: {obj.name}</h1>
                  <h1 className="my-4">Reputation: {reputation}</h1>
                </div>
              </a>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Notes;
