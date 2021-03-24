import React from "react";
import { Droppable } from "react-beautiful-dnd";
import RootRef from "@material-ui/core/RootRef";
import List from "@material-ui/core/List";
import ListItemCustom from "./listItemCustom";
import { Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  title: {
   textTransform: 'uppercase',
   textAlign: 'center',
   position: 'relative',
   width: '100%'
  },
  container:{
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
          <RootRef rootRef={provided.innerRef}>
            <List  key={column.id}>
              {column.list.map((itemObject, index) => {
                return <ListItemCustom index={index} itemObject={itemObject} key={index} />;
              })}
              {provided.placeholder}
            </List>
          </RootRef>
        )}
      </Droppable>
    </div>
  );
};

export default Column;