import React from "react";

import RoomIcon from "@material-ui/icons/Room";
import { List, ListItem, ListItemIcon } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles(() => ({
  activeBtn: {
    background: "tomato",
    color: "White",
  },
}));

const Location = ({ locations, setCity, city }) => {
  const { activeBtn } = useStyles();

  return (
    <List>
      {locations !== null &&
        locations.map((data, k) => {
          return (
            <ListItem
              className={city === data ? activeBtn : ""}
              button
              key={k}
              onClick={() => setCity(data)}
            >
              <ListItemIcon>
                <RoomIcon />
                <span>{data}</span>
              </ListItemIcon>
            </ListItem>
          );
        })}
    </List>
  );
};

export default Location;
