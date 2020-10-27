import React from "react";

import RoomIcon from "@material-ui/icons/Room";
import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  activeBtn: {
    background: "tomato",
  },
  color: {
    color: "white",
  },
}));

const Location = ({
  locations,
  setCity,
  city,
  setChildCount,
  setAdultCount,
}) => {
  const { activeBtn, color } = useStyles();

  return (
    <List>
      {locations !== null &&
        locations.map((data, k) => {
          return (
            <ListItem
              className={city === data ? activeBtn : ""}
              button
              key={k}
              onClick={() => {
                setCity(data);
                setAdultCount(1);
                setChildCount(0);
              }}
            >
              <ListItemIcon>
                <RoomIcon />
                <span className={city === data ? color : ""}>{data}</span>
              </ListItemIcon>
            </ListItem>
          );
        })}
    </List>
  );
};

export default Location;
