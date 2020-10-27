import { Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import React from "react";
import ContentCard from "./ContentCard";

const useStyles = makeStyles(() => ({
  bodyMargin: {
    margin: "20px 0",
  },
  wrapper: {
    padding: "0 24px",
  },
}));

const SearchResults = ({ search, city }) => {
  const { bodyMargin, wrapper } = useStyles();

  return (
    <Grid container className={wrapper}>
      <Grid item xs={false} sm={1} lg={2}></Grid>
      <Grid container item sm={10} lg={8}>
        <Grid item xs={12}>
          <Typography variant="h5" className={bodyMargin}>
            <strong>Stays in {city}</strong>
          </Typography>
        </Grid>
        <br />
        <ContentCard search={search} />
      </Grid>
      <Grid item xs={false} sm={1} lg={2}></Grid>
    </Grid>
  );
};

export default SearchResults;
