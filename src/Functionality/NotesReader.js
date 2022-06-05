import { useLocation } from "react-router-dom";
import { withRouter } from "react-router";
import { Document, Page } from "react-pdf";
import PDFViewer from "pdf-viewer-reactjs";
import { Worker } from "@react-pdf-viewer/core";
import "./NotesReader.css";

import { Viewer } from "@react-pdf-viewer/core";

import Three from "../Homepage/Three";
const NotesReader = (props) => {
  const location = useLocation();
  console.log(location);
  console.log(props);
  const url = `${location.state.hoo}#toolbar=0&navpanes=0`;
  const url1 = `${location.state.hoo}`;

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
          <Viewer onContextMenu={(e) => e.preventDefault()} fileUrl={url1} />
        </Worker>
      </div>
    </>
  );
};
export default withRouter(NotesReader);
