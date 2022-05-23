import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@material-ui/core/Grid";
import AdbIcon from "@mui/icons-material/Adb";
import logo from "../StudyBear.png";
import { useContext } from "react";
import { authentication } from "../firebase-config";
import AuthContext from "../store/auth-context";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import notes from "../notesh.png";
import mentor from "../mentorh.png";
import newspaper from "../newspaperh.png";
import event from "../eventh.png";
import talk from "../talkh.png";
import { makeStyles } from "@material-ui/core/styles";
import circular from "../circular.png";
import Link from "@material-ui/core/Link";
import Three from "./Three";
import TypeWriterEffect from "react-typewriter-effect";
import banner from "../banner.gif";
import Header from "./Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// const pages = [];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];
const useStyles = makeStyles({
  link: {
    color: "black",
    position: "relative",

    "&:before": {
      content: "''",
      position: "absolute",
      width: "0",
      height: "2px",
      bottom: "-3px",
      left: "50%",
      transform: "translate(-50%,0%)",
      backgroundColor: "black",
      transformOrigin: "center",
      visibility: "hidden",
      transition: "all 0.3s ease-in-out",
    },
    "&:hover:before": {
      visibility: "visible",
      width: "100%",
    },
  },
});

const Home = () => {
  //   const classes = useStyles();
  const history = useHistory();
  const newsHandler = () => {
    history.push("/news");
  };
  const eventsHandler = () => {
    history.push("/events");
  };
  //   const [anchorElNav, setAnchorElNav] = React.useState(null);
  //   const [anchorElUser, setAnchorElUser] = React.useState(null);

  //   const handleOpenNavMenu = (event) => {
  //     setAnchorElNav(event.currentTarget);
  //   };
  //   const handleOpenUserMenu = (event) => {
  //     setAnchorElUser(event.currentTarget);
  //   };

  //   const handleCloseNavMenu = (event) => {
  //     setAnchorElNav(null);
  //   };

  //   const handleCloseUserMenu = (event) => {
  //     const form = event.target.outerText;

  //     if (form === "Logout") {
  //       signOut(authentication)
  //         .then(() => {
  //           authCtx.logout();
  //           history.push("/");
  //           // Sign-out successful.
  //         })
  //         .catch((error) => {
  //           // An error happened.
  //         });
  //     }
  //     setAnchorElUser(null);
  //   };
  const authCtx = useContext(AuthContext);
  const name = `WELCOME ${authCtx.name}`;

  return (
    <>
      {/* <AppBar
        position="static"
        sx={{ backdropFilter: "blur(20px)", background: "#38bdf8" }}
      >
        <Container maxWidth="xl">
          <Toolbar disableGutters justify="space-between">
            <img
              className="h-20 ml-96 pl-72 pr-8 "
              src={logo}
              alt="Studybear"
            />

            <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem key={page} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page}
                </Button>
              ))}
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src={authCtx.photoUrl} />
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: "45px" }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <div className="grid grid-rows-1 grid-flow-col gap-40 bg-white drop-shadow-xl  justify-center">
        <div class="row-span-1 ... justify-center flex flex-wrap text-center  my-auto ">
          <button className="">
            <Link sx={{ p: "2" }} underline="never" className={classes.link}>
              <button>
                <img
                  src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-notes-vlog-blogging-content-creation-smashingstocks-detailed-outline-smashing-stocks.png"
                  className="h-12"
                />
                <h2 className="mx-auto">Notes</h2>
              </button>
            </Link>
          </button>
        </div>
        <div class="col-span-1 ... justify-center text-center my-auto ">
          <button className="">
            <Link sx={{ p: "2" }} underline="never" className={classes.link}>
              <button>
                <img
                  src="https://img.icons8.com/ios-filled/50/000000/comment-discussion.png"
                  className="h-11"
                />
                <h2 className="mx-auto">Discuss</h2>
              </button>
            </Link>
          </button>
        </div>
        <div class="row-span-1 col-span-1 ... justify-center text-center my-auto ">
          <button className="">
            <Link sx={{ p: "2" }} underline="never" className={classes.link}>
              <button>
                <img
                  src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-events-social-media-basic-1-sbts2018-outline-sbts2018.png"
                  className="h-11"
                />
                <h2 className="mx-auto">Events</h2>
              </button>
            </Link>
          </button>
        </div>
        <div class="row-span-1 col-span-1 ... justify-center text-center my-auto ">
          <button className="">
            <Link sx={{ p: "2" }} underline="never" className={classes.link}>
              <button>
                <img
                  src="https://img.icons8.com/ios/50/000000/news.png "
                  className="h-11"
                />
                <h2 className="mx-auto">News</h2>
              </button>
            </Link>
          </button>
        </div>
        <div class="row-span-1 col-span-1 ... justify-center text-center my-auto ">
          <button className="">
            <Link sx={{ p: "2" }} underline="never" className={classes.link}>
              <button>
                <img
                  src="https://img.icons8.com/ios/50/000000/appointment-reminders--v1.png"
                  className="h-11"
                />
                <h2 className="mx-auto">Circulars</h2>
              </button>
            </Link>
          </button>
        </div>
        <div class="row-span-1 col-span-1 ... justify-center text-center my-auto ">
          <button className="">
            <Link sx={{ p: "2" }} underline="never" className={classes.link}>
              <button>
                <img
                  src="https://img.icons8.com/external-edtim-outline-edtim/50/000000/external-People_33-people-edtim-outline-edtim.png"
                  className="h-11"
                />
                <h2 className="mx-auto">Teachers</h2>
              </button>
            </Link>
          </button>
        </div>
      </div> */}
      {/* <div className="bg-slate-200 absolute  rounded-3xl  h-full w-full  ">
        <Three />
      </div> */}

      <div>
        <Header />
        {/* //Vibrant colour */}
        {/* <h1 className="z-20 mx-10 relative top-5  font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-sky-400 to-sky-100">
          WELCOME {authCtx.name}
        </h1> */}
        {/* Type writing effect */}
        <div className="mt-12 ml-12">
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              color: "#3F3D56",
              fontWeight: 500,
              fontSize: "2.5em",
            }}
            startDelay={100}
            cursorColor="black"
            text={name}
            typeSpeed={100}
            //   scrollArea={myAppRef}
          />
        </div>
        <div className="grid mt-16 grid-cols-3 gap-x-44 gap-12 mx-60  justify-center">
          <div className=" bg-slate-100 drop-shadow-xl hover:backdrop-blur- text-center rounded-xl  inline  justify-center">
            <button>
              <LazyLoadImage
                effect="blur"
                src="https://i.ibb.co/7XY8C5r/business-3d-girl-with-a-book-1-min.png"
                className="h-24 mx-auto mt-2 "
              />
              <h2 className="inline mb-2">Notes</h2>
            </button>
          </div>
          <div className="bg-slate-100 drop-shadow-xl hover:backdrop-blur- text-center rounded-xl  inline  justify-center">
            <button>
              <LazyLoadImage
                effect="blur"
                src="https://i.ibb.co/88RpXrF/casual-life-3d-girl-chatting-remotely-with-group-of-three-people-min.png"
                className="h-24 mx-auto mt-2 "
              />
              <h2 className="inline mb-2">Discussion</h2>
            </button>
          </div>
          <div className="bg-slate-100 drop-shadow-xl hover:backdrop-blur- text-center rounded-xl  inline  justify-center">
            <button onClick={eventsHandler}>
              <LazyLoadImage
                effect="blur"
                src="https://i.ibb.co/DKSbNk8/business-3d-min.png"
                className="h-24 mx-auto mt-2 "
              />
              <h2 className="inline mb-2">Coding Events</h2>
            </button>
          </div>
          <div className="bg-slate-100 drop-shadow-xl hover:backdrop-blur- text-center rounded-xl  inline  justify-center">
            <button onClick={newsHandler}>
              <LazyLoadImage
                effect="blur"
                src="https://i.ibb.co/vJmFZpJ/business-3d-well-done-min.png"
                className="h-24 mx-auto mt-2 "
              />
              <h2 className="inline mb-2">News</h2>
            </button>
          </div>
          <div className="bg-slate-100 drop-shadow-xl hover:backdrop-blur- text-center rounded-xl  inline  justify-center">
            <button>
              <LazyLoadImage
                effect="blur"
                src={circular}
                className="h-24 mx-auto mt-2 "
              />
              <h2 className="inline mb-2">Circulars</h2>
            </button>
          </div>
          <div className="bg-slate-100 drop-shadow-xl hover:backdrop-blur- text-center rounded-xl  inline  justify-center">
            <button>
              <LazyLoadImage
                effect="blur"
                src="https://i.ibb.co/ssFrJX8/casual-life-3d-young-man-sitting-at-green-desk-and-raising-his-hand-min.png"
                className="h-24 mx-auto mt-2 "
              />
              <h2 className="inline mb-2">Connect to Teacher</h2>
            </button>
          </div>
        </div>
      </div>
      <div className=" mt-32 mx-60 drop-shadow-xl object-contain mb-32">
        <LazyLoadImage
          effect="blur"
          className="w-full h-92 object-contain"
          src={banner}
        />
      </div>
    </>
  );
};
export default Home;
