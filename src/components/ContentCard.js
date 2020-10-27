import React from "react";

import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles(() => ({
  superHost: {
    borderRadius: "20px",
    border: "1px solid black",
    fontWeight: "bold",
    padding: "2px 5px",
    marginRight: "5px",
  },
  card: {
    borderRadius: "20px",
    marginRight: "20px",
    marginBottom: "20px",
    height: "300px",
    maxWidth: "500px",
    border: "none",
  },
  iconSize: {
    fontSize: "14px",
    marginLeft: "3px",
  },
}));

const ContentCard = ({ search }) => {
  console.log(search);

  const { superHost, card, iconSize } = useStyles();

  return (
    <>
      {search.length !== 0 ? (
        search.map((data, k) => {
          return (
            <Grid item xs={12} sm={6} md={4} key={k}>
              <Card className={card}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="180"
                    alt={data.type}
                    image={data.image}
                    title={data.type}
                  />
                  <CardContent>
                    <Typography gutterBottom component="p">
                      {data.super && (
                        <small className={superHost}>SUPER HOST</small>
                      )}
                      <small>{data.type}</small>
                      <small>
                        <StarIcon className={iconSize} />
                        {data.rating}
                      </small>
                    </Typography>
                    <Typography variant="body2" component="p">
                      {data.comment}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions></CardActions>
              </Card>
            </Grid>
          );
        })
      ) : (
        <p>There is no stays available with this parameters.</p>
      )}
    </>
  );
};

export default ContentCard;
