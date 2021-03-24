import React, { Fragment } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import IconButton from "@material-ui/core/IconButton";
import { Draggable } from "react-beautiful-dnd";
import Typography from "@material-ui/core/Typography";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container:{
    backgroundColor: "white",
    color: "#000",
    borderRadius: 10,
    borderWidth:1,
    borderColor:'#000',
    marginBottom: 10,
    boxShadow: '0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)'
  }
}));

const ListItemCustom = ({ itemObject, index }) => {
  const classes = useStyles();
  return (
    <Draggable 
       draggableId={itemObject.id} 
       key={`${itemObject.id}`} 
       index={index}
       >
      {(provided) => (
        <ListItem
          className={classes.container}
          innerRef={provided.innerRef}
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