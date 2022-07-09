import Header from "../Homepage/Header";
import Card from "react-animated-3d-card";
import styled from "styled-components";
import { keyframes } from "styled-components";
import { useEffect, useState } from "react";
import { database } from "../firebase-config";
import { get, child, ref } from "firebase/database";
import StarfieldAnimation from "react-starfield-animation";
import { motion } from "framer-motion";
import {
  useWindowSize,
  useWindowWidth,
  useWindowHeight,
} from "@react-hook/window-size";
import Confetti from "react-confetti";

const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };

const hue = keyframes`
 from {
   -webkit-filter: hue-rotate(0deg);
 }
 to {
   -webkit-filter: hue-rotate(-360deg);
 }
`;
const AnimatedGradientText = styled.h1`
  color: #f35626;
  background-image: -webkit-linear-gradient(92deg, #38bdf8, #feab3a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: ${hue} 10s infinite linear;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial,
    sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  font-feature-settings: "kern";
  font-size: 48px;
  font-weight: 700;
  line-height: 48px;
  overflow-wrap: break-word;
  text-align: center;
  text-rendering: optimizelegibility;
  -moz-osx-font-smoothing: grayscale;
`;
const Leaderboard = () => {
  const [flag, setFlag] = useState(true);
  const [width, height] = useWindowSize();
  const [users, setUsers] = useState([]);
  const [finalobj, setFinalobj] = useState([]);

  useEffect(() => {
    get(child(ref(database), `users/`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          setUsers(Object.values(snapshot.val()));
        } else {
          console.log("No data available");
        }
      })
      .catch((error) => {
        console.error(error);
      });
    setTimeout(() => {
      setFlag(false);
    }, 5000);
  }, []);

  useEffect(() => {
    const transformerdData = users.map((user) => {
      let totalpoints;
      if (user.extrapoints != null) {
        totalpoints =
          user.extrapoints + 20 * user.totaluploads + 10 * user.totalviews;
      } else {
        totalpoints = 0;
      }

      return {
        name: user.name,
        totalpoints: totalpoints,
      };
    });

    setFinalobj(transformerdData);
  }, [users]);
  finalobj.sort((a, b) => {
    return b.totalpoints - a.totalpoints;
  });

  const result = finalobj.filter(
    (data) =>
      data.name != "RAKSHITH DATTATRAYA HEGDE" &&
      data.name != "M S SANDEEP KAMATH" &&
      data.name != "Studybear" &&
      data.totalpoints != 0
  );
  result.length = 5;
  console.log(result);
  return (
    <>
      <Header />
      <div className="h-full w-full -z-30 absolute bg-white">
        <StarfieldAnimation
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            numParticles: 0,
            tweenDuration: 5000,
          }}
        />
      </div>
      {flag && (
        <Confetti
          width={width}
          height={height}
          gravity={0.1}
          numberOfPieces="75"
        />
      )}
      <div className="flex justify-center my-auto ">
        <AnimatedGradientText className="my-5 mx-2">
          LEADERBOARD{" "}
        </AnimatedGradientText>
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          width="100"
          height="80"
          version="1"
          viewBox="0 0 512 512"
          className="mb-11"
        >
          <motion.path
            d="M2463 4406c-104-34-176-98-222-196-21-45-26-70-26-140 0-107 30-177 105-250l51-50-332-474-332-475-506 254-506 253-1 65c-2 119-78 235-191 293-52 26-68 29-153 29-110 0-160-18-230-81-189-171-146-466 83-575 34-16 71-29 82-29 19 0 35-67 218-888l197-887V768l34-34 34-34h3584l34 34 34 34v487l197 887c183 821 199 888 218 888 35 0 142 57 183 98 21 21 52 66 68 98 25 51 29 71 29 144 0 76-4 92-33 152-38 77-92 130-171 167-47 22-70 26-141 26s-94-4-141-26c-123-58-201-171-203-295l-1-66-506-253-506-254-332 475-332 474 51 50c75 73 105 143 105 250 0 71-5 94-27 141-57 124-168 199-301 205-43 3-89-2-114-10zm167-245c14-10 30-34 37-54 32-95-58-182-150-143-45 18-70 56-70 107 0 95 103 145 183 90zm295-1047c198-284 371-525 384-535 53-42 65-37 663 262l561 281 26-26 25-26-183-827c-101-456-186-834-189-840-6-19-3298-19-3304 0-3 6-88 384-189 840l-183 827 25 26 26 26 561-281c598-299 610-304 663-262 13 10 186 251 384 535 198 283 362 515 365 515s167-232 365-515zM420 3462c53-40 57-123 8-172-24-25-38-30-77-30-88 0-140 75-108 153 31 72 114 95 177 49zm4408 8c46-28 68-82 53-131-16-53-53-79-112-79-40 0-52 5-78 31-57 57-40 153 32 184 44 19 67 18 105-5zm-638-2425V930H930v230h3260v-115z"
            transform="matrix(.1 0 0 -.1 0 512)"
            fill="transparent"
            strokeWidth="28"
            stroke="rgba(0, 0, 0)"
            strokeLinecap="thick"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={transition}
          />
          {/* <path
            d="M2463 4406c-104-34-176-98-222-196-21-45-26-70-26-140 0-107 30-177 105-250l51-50-332-474-332-475-506 254-506 253-1 65c-2 119-78 235-191 293-52 26-68 29-153 29-110 0-160-18-230-81-189-171-146-466 83-575 34-16 71-29 82-29 19 0 35-67 218-888l197-887V768l34-34 34-34h3584l34 34 34 34v487l197 887c183 821 199 888 218 888 35 0 142 57 183 98 21 21 52 66 68 98 25 51 29 71 29 144 0 76-4 92-33 152-38 77-92 130-171 167-47 22-70 26-141 26s-94-4-141-26c-123-58-201-171-203-295l-1-66-506-253-506-254-332 475-332 474 51 50c75 73 105 143 105 250 0 71-5 94-27 141-57 124-168 199-301 205-43 3-89-2-114-10zm167-245c14-10 30-34 37-54 32-95-58-182-150-143-45 18-70 56-70 107 0 95 103 145 183 90zm295-1047c198-284 371-525 384-535 53-42 65-37 663 262l561 281 26-26 25-26-183-827c-101-456-186-834-189-840-6-19-3298-19-3304 0-3 6-88 384-189 840l-183 827 25 26 26 26 561-281c598-299 610-304 663-262 13 10 186 251 384 535 198 283 362 515 365 515s167-232 365-515zM420 3462c53-40 57-123 8-172-24-25-38-30-77-30-88 0-140 75-108 153 31 72 114 95 177 49zm4408 8c46-28 68-82 53-131-16-53-53-79-112-79-40 0-52 5-78 31-57 57-40 153 32 184 44 19 67 18 105-5zm-638-2425V930H930v230h3260v-115z"
            transform="matrix(.1 0 0 -.1 0 512)"
          ></path> */}
        </motion.svg>
      </div>

      <table class="table-fixed bg-slate-100 mx-auto w-3/4 lg:w-1/2 rounded-xl ">
        <thead className="py-5">
          <tr className="text-center py-10">
            <th className="text-center text-xl py-5 my-10  lg:text-2xl">
              Name
            </th>
            <th className="text-center text-xl py-5 lg:text-2xl">Points</th>
          </tr>
        </thead>

        <tbody>
          {result.map((fin) => {
            return (
              <>
                <tr className="w-1/2">
                  <td className="text-center mx-auto py-5 my-7 text-xl lg:text-2xl">
                    {fin.name}
                  </td>
                  <td className="text-center mx-auto py-5 my-7 text-xl lg:text-2xl">
                    {fin.totalpoints}
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default Leaderboard;
