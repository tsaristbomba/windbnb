import React from "react";

import {
  Box,
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Drawer,
  Grid,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { Search } from "@material-ui/icons";
import ChangeHistoryRoundedIcon from "@material-ui/icons/ChangeHistoryRounded";

import MakeSearch from "./search/MakeSearch";

const useStyles = makeStyles(() => ({
  navbar: {
    background: "transparent",
    boxShadow: "none",
  },
  logo: {
    color: "tomato",
    fontWeight: "bold",
    fontSize: "18px",
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
  setSide,
  sideMenu,
}) => {
  const { navbar, logo, rightPosition, cityBtn, searchBtn } = useStyles();

  return (
    <Grid container>
      <Grid item xs={false} sm={1} lg={2}></Grid>
      <Grid item xs={12} sm={10} lg={8}>
        <Box component="nav">
          <AppBar className={navbar} position="static">
            <Toolbar>
              <ChangeHistoryRoundedIcon fontSize="small" />
              <Typography className={logo} component="strong">
                windbnb
              </Typography>
              <Box className={rightPosition} component="div">
                <Typography className={cityBtn} variant="inherit">
                  {locations !== null && city}
                </Typography>
                <IconButton
                  className={searchBtn}
                  onClick={() => {
                    toggleDrawer();
                    // setAdultCount(1);
                    // setChildCount(0);
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
            setSide={setSide}
            sideMenu={sideMenu}
          />
        </Drawer>
      </Grid>
      <Grid item xs={false} sm={1} lg={2}></Grid>
    </Grid>
  );
};

export default Navbar;
