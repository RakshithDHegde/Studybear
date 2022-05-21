import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Slide from "@mui/material/Slide";
import Logo from "./Logo";
import Background from "../Trianglify.png";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Link from "@material-ui/core/Link";

// import { spacing } from "@mui/system";
import Text from "./Text";

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
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

export default function HideAppBar(props) {
  const classes = useStyles();
  return (
    <>
      <div
        className="pb-10 mb-0.5 z-0"
        style={{ backgroundImage: `url(${Background})` }}
      >
        <CssBaseline />
        <HideOnScroll {...props}>
          <AppBar color="transparent" sx={{ backdropFilter: "blur(20px)" }}>
            <Toolbar>
              <button>
                <Logo />
              </button>
              <Typography
                variant="h4"
                component="div"
                style={{ fontFamily: "Roboto" }}
                color="black"
                sx={{ fontWeight: "Bold" }}
              >
                studybear
              </Typography>
              <Grid container justifyContent="flex-end">
                <Box sx={{ mx: 2, my: 4 }}>
                  <Link
                    sx={{ p: "2" }}
                    underline="never"
                    className={classes.link}
                  >
                    <button>
                      <Typography component="span">Home</Typography>
                    </button>
                  </Link>
                </Box>
                <Box sx={{ mx: 2, my: 4 }}>
                  <Link underline="never" className={classes.link}>
                    <button>
                      <Typography component="span">Features</Typography>
                    </button>
                  </Link>
                </Box>
                <Box sx={{ my: 4, mr: 4, ml: 2 }}>
                  <Link underline="never" className={classes.link}>
                    <button>
                      <Typography component="span">About</Typography>
                    </button>
                  </Link>
                </Box>

                <Button
                  color="success"
                  align="right"
                  variant="text"
                  size="medium"
                  style={{ borderRadius: 50, color: "black" }}
                  sx={{ my: 2.5 }}
                  onClick={props.modalAdd}
                >
                  <Typography variant="h7">Get Started</Typography>
                </Button>
              </Grid>
            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <Toolbar />
        <Container>
          <Box sx={{ my: 2, px: 5 }}>
            <div className=" pt-14">
              <Text onClick={props.modalAdd} />
            </div>
          </Box>
        </Container>
      </div>
    </>
  );
}
