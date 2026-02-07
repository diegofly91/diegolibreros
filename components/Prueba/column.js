import React from "react";
import { Droppable } from "@hello-pangea/dnd";
import List from "@mui/material/List";
import ListItemCustom from "./listItemCustom";
import { Typography } from "@mui/material";
import { makeStyles } from '../../styles/makeStyles';
import uuid from "uuid/v4";

const useStyles = makeStyles((theme) => ({
  title: {
    textTransform: 'uppercase',
    textAlign: 'center',
    position: 'relative',
    width: '100%'
  },
  container: {
    backgroundColor: "white",
    margin: 10,
    padding: 20,
    color: "#000",
    borderRadius: 10,
    marginVertical: 10,
    boxShadow: '0 16px 24px 2px rgb(0 0 0 / 14%), 0 6px 30px 5px rgb(0 0 0 / 12%), 0 8px 10px -5px rgb(0 0 0 / 20%)'
  }
}));
const Column = ({ column }) => {
  const classes = useStyles();
  return (
    <div
      className={classes.container}
    >
      <Typography variant={"h4"} className={classes.title}>
        {column.id}
      </Typography>
      <Droppable droppableId={column.id} key={column.id}>
        {(provided) => (
          <List ref={provided.innerRef} key={column.id}>
            {column.list.map((itemObject, index) => {
              return <ListItemCustom index={index} key={uuid()} itemObject={itemObject} />;
            })}
            {provided.placeholder}
          </List>
        )}
      </Droppable>
    </div>
  );
};

export default Column;