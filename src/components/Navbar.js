import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Search, HomeWork } from "@material-ui/icons";

import MakeSearch from "./search/MakeSearch";

const useStyles = makeStyles(() => ({
  navbar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    color: "tomato",
  },
  rightPosition: {
    marginLeft: "auto",
  },
  cityBtn: {
    paddingRight: "5px",
    color: "black",
  },
  searchBtn: {
    color: "tomato",
    "&:hover": {
      background: "#ffded8",
    },
  },
}));

const Navbar = ({
  locations,
  getAdultLimit,
  getIndex,
  index,
  setAdultCount,
  setChildCount,
  adultCount,
  childCount,
  setCity,
  city,
  toggleDrawer,
  topMenu,
}) => {
  const { navbar, logo, rightPosition, cityBtn, searchBtn } = useStyles();

  console.log(city);

  return (
    <>
      <Box component="nav">
        <AppBar className={navbar} position="static">
          <Toolbar>
            <Typography className={logo} variant="h5">
              <HomeWork /> airclone
            </Typography>
            <Box className={rightPosition} component="div">
              <Typography className={cityBtn} variant="inherit">
                {locations !== null && city}
              </Typography>
              <IconButton
                className={searchBtn}
                onClick={() => {
                  toggleDrawer();
                  setAdultCount(1);
                  setChildCount(0);
                }}
              >
                <Search className={logo} />
              </IconButton>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
      <Drawer anchor="top" open={topMenu} onClose={toggleDrawer}>
        <MakeSearch
          getAdultLimit={getAdultLimit}
          locations={locations}
          index={index}
          getIndex={getIndex}
          toggleDrawer={toggleDrawer}
          setAdultCount={setAdultCount}
          setChildCount={setChildCount}
          childCount={childCount}
          adultCount={adultCount}
          setCity={setCity}
          city={city}
          toggleDrawer={toggleDrawer}
        />
      </Drawer>
    </>
  );
};

export default Navbar;
