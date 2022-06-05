import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import { Document, Page } from "react-pdf";
import PDFViewer from "pdf-viewer-reactjs";
import { Worker } from "@react-pdf-viewer/core";
import LinearProgress from "@mui/material/LinearProgress";
import { ProgressBar } from "@react-pdf-viewer/core";
import "./NotesReader.css";
import { useState, useEffect } from "react";
import { database } from "../firebase-config";
import { ref, child, get, set, push } from "firebase/database";
import { update } from "firebase/database";

import { Viewer } from "@react-pdf-viewer/core";

import Three from "../Homepage/Three";

const NotesReader = (props) => {
  const location = useLocation();

  console.log(location);
  console.log(props);
  const url = `${location.state.hoo}#toolbar=0&navpanes=0`;
  const url1 = `${location.state.hoo}`;

  useEffect(() => {
    let a;
    get(child(ref(database), `users/${location.state.uid}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          a = snapshot.child("totalviews").val() + 1;
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
        update(ref(database, `users/${location.state.uid}`), {
          totalviews: a,
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

  return (
    <>
      {/* <object
        data={url}
        type="application/pdf"
        className="h-full w-full absolute"
        onContextMenu={(e) => e.preventDefault()}
        onClick={(e) => e.preventDefault()}
      ></object> */}
      <div onContextMenu={(e) => e.preventDefault()} className="pdf-container">
        <Worker
          onContextMenu={(e) => e.preventDefault()}
          workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js"
        >
          <Viewer
            renderLoader={(percentages: number) => (
              <div style={{ width: "full" }}>
                <LinearProgress
                  variant="determinate"
                  className="w-full  "
                  max={100}
                  value={percentages}
                />
              </div>
            )}
            fileUrl={url1}
          />
        </Worker>
      </div>
    </>
  );
};
export default withRouter(NotesReader);
