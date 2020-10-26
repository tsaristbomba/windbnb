import React, { useState } from "react";

import { Grid, Box, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

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
}) => {
  const { searchBtn, wrapper } = useStyles();

  return (
    <Grid container className={wrapper} direction="column">
      <Grid item container>
        <Grid item xs={false} sm={3}></Grid>
        <Grid item xs={12} sm={3}>
          <Box>
            <Location locations={locations} setCity={setCity} city={city} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={3}>
          <Box>
            <Guests
              setAdultCount={setAdultCount}
              setChildCount={setChildCount}
              childCount={childCount}
              adultCount={adultCount}
            />
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
          }}
        >
          Search
        </Button>
      </Grid>
    </Grid>
  );
};

export default Search;
