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
          console.log(
            JSON.parse(JSON.stringify(Object.values(snapshot.val())))
          );

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
        <h1 className=" mx-auto text-6xl font-serif flex">
          CONNECT TO TEACHERS
        </h1>
      </div>
      <div className="bg-white drop-shadow-xl my-12 mx-36 rounded-xl">
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
                      <h1 className="text-5xl mx-6 pt-7  font-medium font-mono ">
                        {data.name}
                      </h1>
                      <div className=" flex justify-end ">
                        <img
                          src={data.url}
                          className="object-contain ml-full h-full w-44 mt-6 mx-10 "
                        ></img>
                      </div>
                    </div>
                  </Fade>
                  <Fade bottom duration={1200}>
                    <h1 className="font-mono mr-48 ml-6 text-xl absolute bottom-1/2 break-words inline-flex text-ellipsis">
                      Specializtion:{data.specialization}
                    </h1>
                  </Fade>
                  <Fade bottom duration={1200}>
                    <div className="flex py-6">
                      <a href={mail} target="_blank">
                        <img
                          className="h-16 ml-12 flex"
                          src="https://i.ibb.co/Cthzn60/gmail.png"
                        ></img>
                      </a>
                      {icon && (
                        <a href={whatsapp} target="_blank">
                          <img
                            className="h-16 ml-12 "
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
