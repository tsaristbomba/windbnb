import React, { useState } from "react";

import { Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Location from "./Location";
import Guests from "./Guests";

const useStyles = makeStyles(() => ({
  searchBtn: {
    color: "tomato",
    borderColor: "tomato",
    margin: "0 auto",
    "&:hover": {
      color: "#ff3814",
      borderColor: "#ff3814",
      background: "#ffded8",
    },
  },
  wrapper: {
    margin: "15px 0",
  },
  leftOpt: {
    borderRadius: "15px 0  0 15px",
  },
  rightOpt: {
    borderRadius: "0 15px  15px 0",
  },
  querry: {
    margin: "15px 0",
    border: "1px solid #333",
    padding: "10px",
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    fontSize: "14px",
  },
  querry2: {
    margin: "15px 0",
    border: "1px solid #ededed",
    padding: "10px",
    cursor: "pointer",
    boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
    fontSize: "14px",
  },
  height: {
    minHeight: "250px",
  },
  phone: {
    borderRadius: "0",
  },
}));
const Search = ({
  locations,
  getAdultLimit,
  index,
  getIndex,
  toggleDrawer,
  setAdultCount,
  setChildCount,
  adultCount,
  childCount,
  setCity,
  city,
  setSide,
  sideMenu,
}) => {
  const {
    searchBtn,
    wrapper,
    querry,
    querry2,
    leftOpt,
    rightOpt,
    height,
    phone,
  } = useStyles();

  const matches = useMediaQuery("(max-width:600px)");

  return (
    <Grid container className={wrapper} direction="column">
      <Grid item container className={height}>
        <Grid item xs={false} sm={3}></Grid>
        <Grid item xs={12} sm={3}>
          <Box>
            <Box
              className={`${sideMenu ? querry : querry2} ${
                matches ? phone : leftOpt
              }`}
              onClick={() => setSide(true)}
            >
              <strong>LOCATION</strong>
              <br />
              <small>{city}</small>
            </Box>
            {sideMenu && (
              <Location
                locations={locations}
                setCity={setCity}
                city={city}
                setAdultCount={setAdultCount}
                setChildCount={setChildCount}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box>
            <Box
              className={` ${!sideMenu ? querry : querry2} ${
                matches ? phone : rightOpt
              }`}
              onClick={() => setSide(false)}
            >
              <strong>GUESTS</strong>
              <br />
              <small>
                {adultCount + childCount}{" "}
                {adultCount + childCount > 1 ? "guests" : "guest"}
              </small>
            </Box>
            {!sideMenu && (
              <Guests
                setAdultCount={setAdultCount}
                setChildCount={setChildCount}
                childCount={childCount}
                adultCount={adultCount}
              />
            )}
          </Box>
        </Grid>
        <Grid item xs={false} sm={3}></Grid>
      </Grid>
      <Grid item className={wrapper} container>
        <Button
          variant="outlined"
          className={searchBtn}
          onClick={() => {
            toggleDrawer();
            getAdultLimit();
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
