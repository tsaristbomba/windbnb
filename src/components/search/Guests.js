import React from "react";

import { Box, IconButton } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import AddBoxIcon from "@material-ui/icons/AddBox";
import IndeterminateCheckBoxIcon from "@material-ui/icons/IndeterminateCheckBox";

const useStyles = makeStyles(() => ({
  btnLeft: {
    margin: "0 5px 0 0",
    borderColor: "transparent",
    padding: "0",
  },
  btnRight: {
    margin: "0 0 0 5px",
    borderColor: "transparent",
    padding: "0",
  },
  wrapper: {
    padding: "10px 0 0 0",
  },
  divs: {
    marginBottom: "15px",
  },
  marginLeft: {
    marginLeft: "15px",
  },
}));

const Guests = ({ setAdultCount, setChildCount, adultCount, childCount }) => {
  const { btnLeft, btnRight, wrapper, divs, marginLeft } = useStyles();

  return (
    <Box className={marginLeft} component="div">
      <Box className={divs} component="div">
        <strong>Adults</strong>
        <br />
        <small>Ages 13 or above</small>
        <br />
        <span className={wrapper}>
          <IconButton
            className={btnLeft}
            disableRipple={true}
            onClick={() => setAdultCount(adultCount > 1 && adultCount - 1)}
          >
            <IndeterminateCheckBoxIcon />
          </IconButton>{" "}
          {adultCount}{" "}
          <IconButton
            className={btnRight}
            disableRipple={true}
            onClick={() => setAdultCount(adultCount + 1)}
          >
            <AddBoxIcon />
          </IconButton>
        </span>
      </Box>
      <Box component="div">
        <strong>Children</strong>
        <br />
        <small>Ages 2-12</small>
        <br />
        <span className={wrapper}>
          <IconButton
            className={btnLeft}
            disableRipple={true}
            onClick={() => setChildCount(childCount > 0 && childCount - 1)}
          >
            <IndeterminateCheckBoxIcon />
          </IconButton>{" "}
          {childCount}{" "}
          <IconButton
            className={btnRight}
            disableRipple={true}
            onClick={() => setChildCount(childCount + 1)}
          >
            <AddBoxIcon />
          </IconButton>
        </span>
      </Box>
    </Box>
  );
};

export default Guests;
