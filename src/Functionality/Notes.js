import Header from "../Homepage/Header";
import { database } from "../firebase-config";
import { useContext, useEffect, useState } from "react";
import { ref, child, get } from "firebase/database";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import { Box } from "@mui/material";

import AuthContext from "../store/auth-context";

const Notes = () => {
  const [subjects, setSubjects] = useState([]);
  const [sub, setSub] = useState("");
  const [units, setUnits] = useState([]);
  const [uni, setUni] = useState("");
  const [topics, setTopics] = useState([]);
  const [topi, setTopi] = useState("");
  const [uploads, setUploads] = useState([]);
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

  const searchHandler = () => {
    if (sub === "" || topi === "" || uni === "") {
      alert("Enter all fields");
    }
  };

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
          onClick={searchHandler}
          className=" bg-sky-400 block drop-shadow-lg rounded-lg font-serif text-slate-100 py-2  px-5 my-2 mx-auto"
        >
          Search
        </button>
        <button className="  bg-sky-400 drop-shadow-lg font-serif text-slate-100 py-2 mx-auto  px-5 rounded-lg  my-2">
          Upload
        </button>
      </div>
    </>
  );
};
export default Notes;
