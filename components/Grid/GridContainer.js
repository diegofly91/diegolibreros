import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";

// @mui/material components
import { makeStyles } from "../../styles/makeStyles";
import Grid from "@mui/material/Grid";
import uuid from "uuid/v4";

const styles = {
  grid: {
    marginRight: "-15px",
    marginLeft: "-15px",
    width: "auto"
  }
};

const useStyles = makeStyles(styles);

export default function GridContainer(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid 
      container 
      key={uuid()}
      {...rest} 
      className={classes.grid + " " + className
    }>
      {children}
    </Grid>
  );
}

GridContainer.defaultProps = {
  className: ""
};

GridContainer.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
