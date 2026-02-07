import React, { Fragment } from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import { Draggable } from "@hello-pangea/dnd";
import Typography from "@mui/material/Typography";

import { makeStyles } from '../../styles/makeStyles';

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "white",
    color: "#000",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#000',
    marginBottom: 10,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
  }
}));

const ListItemCustom = ({ itemObject, index }) => {
  const classes = useStyles();
  return (
    <Draggable
      draggableId={itemObject.id}
      key={itemObject.id}
      index={index}
    >
      {(provided) => (
        <ListItem
          key={itemObject.id}
          className={classes.container}
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <ListItemText
            sytles={{ fontFamily: "Quicksand" }}
            primary={`${itemObject.text}`}
            secondary={
              <Fragment>
                {itemObject.description}
              </Fragment>
            }
          />
        </ListItem>
      )}
    </Draggable>
  );
};

export default ListItemCustom;