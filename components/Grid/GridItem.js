import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @mui/material components
import { makeStyles } from "../../styles/makeStyles";
import Grid from "@mui/material/Grid";

const styles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    paddingLeft: "15px",
    flexBasis: "auto"
  }
};

const useStyles = makeStyles(styles);

export default function GridItem(props) {
  const classes = useStyles();
  const { children, className, ...rest } = props;
  return (
    <Grid 
        item
        pad="true"
        {...rest} 
        className={classes.grid + " " + className}
    >
      {children}
    </Grid>
  );
}

GridItem.defaultProps = {
  className: ""
};

GridItem.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
};
