import { database } from "../firebase-config";
import { ref, child, get } from "firebase/database";
import { useEffect, useState } from "react";
import Header from "../Homepage/Header";
import { UserCard } from "react-ui-cards";
import Fade from "react-reveal/Fade";
const Teachers = () => {
  const [datab, setDatab] = useState([]);
  useEffect(() => {
    get(child(ref(database), `branch/is/teachers`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setDatab(JSON.parse(JSON.stringify(Object.values(snapshot.val()))));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <div className="flex justify-center my-11">
        <h1 className=" lg:mx-auto lg:text-6xl font-serif flex text-center text-3xl mx-3">
          CONNECT TO TEACHERS
        </h1>
      </div>
      <div className="bg-white drop-shadow-xl lg:my-12 lg:mx-36 my-4 mx-8 rounded-xl">
        {datab.map((data) => {
          let icon;
          let whatsapp = `https://wa.me/91${data.mobile}`;
          if (data.mobile == "") {
            icon = false;
          } else {
            icon = true;
          }
          let mail = `https://mail.google.com/mail/?view=cm&fs=1&to=${data.email}`;

          return (
            <>
              <Fade bottom duration={1200}>
                <div className="bg-slate-100 mt-16  drop-shadow-xl rounded-xl">
                  <Fade bottom duration={1200}>
                    <div className="grid grid-cols-2">
                      <h1 className="lg:text-5xl lg:mx-6 lg:pt-7 pt-3 ml-3 text-base  font-medium font-mono ">
                        {data.name}
                      </h1>
                      <div className=" flex justify-end ">
                        <img
                          src={data.url}
                          className="object-contain lg:ml-full h-full lg:w-44  w-20 mt-6 mr-3 "
                        ></img>
                      </div>
                    </div>
                  </Fade>
                  <Fade bottom duration={1200}>
                    <h1 className="font-mono mr-48 lg:ml-6 ml-3 lg:mt-0 lg:text-xl text-xs absolute lg:bottom-1/2 top-1/3 break-words inline-flex text-ellipsis">
                      Specializtion:{data.specialization}
                    </h1>
                  </Fade>
                  <Fade bottom duration={1200}>
                    <div className="flex lg:py-6 lg:ml:0 ml-6 pt-6 pb-3">
                      <a href={mail} target="_blank">
                        <img
                          className="lg:h-16 lg:ml-12 object-contain h-8 flex"
                          src="https://i.ibb.co/Cthzn60/gmail.png"
                        ></img>
                      </a>
                      {icon && (
                        <a href={whatsapp} target="_blank">
                          <img
                            className="lg:h-16 h-8 object-contain ml-12 "
                            src="https://i.ibb.co/0DrvF64/whatsapp.png"
                          ></img>
                        </a>
                      )}
                    </div>
                  </Fade>
                </div>
              </Fade>
            </>
          );
        })}
      </div>
    </>
  );
};
export default Teachers;
