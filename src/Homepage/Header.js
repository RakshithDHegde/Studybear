import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import PropTypes from "prop-types";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import Grid from "@material-ui/core/Grid";
import Zoom from "@mui/material/Zoom";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import { useMediaQuery } from "react-responsive";
import Logo from "../LandingPage/Logo";

import Slide from "@mui/material/Slide";
import logo from "../StudyBear.png";
import { useContext } from "react";
import { authentication } from "../firebase-config";
import AuthContext from "../store/auth-context";
import { getAuth, signOut } from "firebase/auth";
import { useHistory } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import notes from "../notesh.png";
import mentor from "../mentorh.png";
import newspaper from "../newspaperh.png";
import event from "../eventh.png";
import talk from "../talkh.png";
import { makeStyles } from "@material-ui/core/styles";
import circular from "../circular.png";
import Link from "@material-ui/core/Link";
import Three from "./Three";
import banner from "../banner.gif";
import Leaderboard from "../Settings/Leaderboard";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
const pages = [];
const settings = ["Profile", "Leaderboard", "Logout"];
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

function ScrollTop(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      "#back-to-top-anchor"
    );

    if (anchor) {
      anchor.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  };

  return (
    <Zoom in={trigger}>
      <Box
        onClick={handleClick}
        role="presentation"
        sx={{ position: "fixed", bottom: 16, right: 16 }}
      >
        {children}
      </Box>
    </Zoom>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

const Header = (props) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const classes = useStyles();
  const history = useHistory();
  const [sidebar, setSidebar] = React.useState(false);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const teacherHandler = () => {
    history.push("/teachers");
    setSidebar(false);
  };
  const eventsHandler = () => {
    history.push("/events");
    setSidebar(false);
  };

  const newsHandler = () => {
    history.push("/news");
    setSidebar(false);
  };
  const homeHandler = () => {
    history.push("/home");
    setSidebar(false);
  };
  const notesHandler = () => {
    history.push("/notes");
    setSidebar(false);
  };
  const discussHandler = () => {
    history.push("/discuss");
    setSidebar(false);
  };
  const circularHandler = () => {
    history.push("/circulars");
    setSidebar(false);
  };

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
    setSidebar(false);
  };

  const handleCloseNavMenu = (event) => {
    setAnchorElNav(null);
  };

  const remover = () => {
    setSidebar(false);
  };
  const opener = () => {
    setSidebar(true);
  };

  const handleCloseUserMenu = (event) => {
    const form = event.target.outerText;

    if (form === "Logout") {
      signOut(authentication)
        .then(() => {
          authCtx.logout();
          history.push("/");
          // Sign-out successful.
        })
        .catch((error) => {
          // An error happened.
        });
    } else if (form === "Profile") {
      history.push("/profile");
    } else if (form == "Leaderboard") {
      history.push("/leaderboard");
    }
    setAnchorElUser(null);
  };
  const authCtx = useContext(AuthContext);

  return (
    <>
      <AppBar
        position="static"
        sx={{ backdropFilter: "blur(20px)", background: "#38bdf8" }}
        justify="center"
        alignItems="center"
        alignContent="center"
        width="full"
      >
        <Container
          maxWidth="xl"
          justify="center"
          alignItems="center"
          alignContent="center"
        >
          <Toolbar disableGutters>
            {!isDesktopOrLaptop && (
              <>
                <button onClick={opener} className="hover:">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-7 w-7"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </>
            )}
            <button onClick={homeHandler} className=" absolute left-1/2  ">
              <img
                className="relative right-2/3 h-20 "
                src={logo}
                alt="Studybear"
              />
            </button>

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
                <IconButton
                  onClick={handleOpenUserMenu}
                  sx={{ p: 0, pb: 1, pt: 1 }}
                >
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

      {isDesktopOrLaptop && (
        <div
          id="back-to-top-anchor"
          className="grid grid-rows-1 grid-flow-col gap-40 bg-white drop-shadow-xl   justify-center z-50"
        >
          <div class="row-span-1 ... justify-center flex flex-wrap text-center  my-auto ">
            <button className="">
              <Link sx={{ p: "2" }} underline="never" className={classes.link}>
                <button onClick={notesHandler}>
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
              <a href="https://discord.gg/mhrprvmFEt" target="_blank">
                <button>
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/comment-discussion.png"
                    className="h-11"
                  />
                  <h2 className="mx-auto">Discuss</h2>
                </button>
              </a>
            </button>
          </div>
          <div class="row-span-1 col-span-1 ... justify-center text-center my-auto ">
            <button className="">
              <Link sx={{ p: "2" }} underline="never" className={classes.link}>
                <button onClick={eventsHandler}>
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
                <button onClick={newsHandler}>
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
                <button onClick={circularHandler}>
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
            <button className="" onClick={teacherHandler}>
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
        </div>
      )}

      {!isDesktopOrLaptop && sidebar && (
        <>
          <aside
            class="w-64 fixed top-0 z-30  h-full   rounded-r-5xl"
            aria-label="Sidebar"
          >
            <div class="overflow-y-auto py-4 px-3 h-full bg-gray-50 rounded ">
              <a href="/" class="flex items-center pl-2.5 mb-5">
                <Logo />
                <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Studybear
                </span>
              </a>
              <ul class="space-y-8 py-auto">
                <li>
                  <button
                    onClick={notesHandler}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <img
                      src="https://img.icons8.com/external-smashingstocks-detailed-outline-smashing-stocks/66/000000/external-notes-vlog-blogging-content-creation-smashingstocks-detailed-outline-smashing-stocks.png"
                      className="h-9"
                    />
                    <span class="ml-3 ">Notes</span>
                  </button>
                </li>
                <li>
                  <a
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                    href="https://discord.gg/mhrprvmFEt"
                    target="_blank"
                  >
                    <img
                      src="https://img.icons8.com/ios-filled/50/000000/comment-discussion.png"
                      className="h-9"
                    />
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Discussion
                    </span>
                  </a>
                </li>
                <li>
                  <button
                    onClick={eventsHandler}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <img
                      src="https://img.icons8.com/external-sbts2018-outline-sbts2018/58/000000/external-events-social-media-basic-1-sbts2018-outline-sbts2018.png"
                      className="h-9"
                    />
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Coding Events
                    </span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={newsHandler}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <img
                      src="https://img.icons8.com/ios/50/000000/news.png "
                      className="h-9"
                    />
                    <span class="flex-1 ml-3 whitespace-nowrap">News</span>
                  </button>
                </li>
                <li>
                  <button
                    onClick={circularHandler}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <img
                      src="https://img.icons8.com/ios/50/000000/appointment-reminders--v1.png"
                      className="h-9"
                    />
                    <span class="flex-1 ml-3 whitespace-nowrap">Circulars</span>
                  </button>
                </li>
                <li className="pb-12">
                  <button
                    onClick={teacherHandler}
                    class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg hover:bg-gray-100"
                  >
                    <img
                      src="https://img.icons8.com/external-edtim-outline-edtim/50/000000/external-People_33-people-edtim-outline-edtim.png"
                      className="h-9"
                    />
                    <span class="flex-1 ml-3 whitespace-nowrap">
                      Connect To Teachers
                    </span>
                  </button>
                </li>
              </ul>
            </div>
          </aside>
          <div
            className="fixed h-full w-full backdrop-blur-xl z-20"
            onClick={remover}
          ></div>
        </>
      )}
      {isDesktopOrLaptop && (
        <ScrollTop {...props}>
          <Fab color="primary" size="small" aria-label="scroll back to top">
            <KeyboardArrowUpIcon />
          </Fab>
        </ScrollTop>
      )}
    </>
  );
};
export default Header;
