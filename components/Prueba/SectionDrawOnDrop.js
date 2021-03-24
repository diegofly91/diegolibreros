import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { DragDropContext } from "react-beautiful-dnd";
import Column from "./column";
import NewBtnItem from './newItem';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    margin: '20px 0px'
  }
}));

const Prueba = () => {
  const classes = useStyles();

  const [columns, setColumns] = useState(initialColumns);

  const onDragEnd = ({ source, destination }) => {
    // Make sure we have a valid destination
    if (destination === undefined || destination === null) return null;

    // Make sure we're actually moving the item
    if (
      source.droppableId === destination.droppableId &&
      destination.index === source.index
    )
      return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // If start is the same as end, we're in the same column
    if (start === end) {
      // Move the item within the list
      // Start by making a new list without the dragged item
      console.log(start);
      const newList = start.list.filter((_, idx) => idx !== source.index);

      // Then insert the item at the right location
      newList.splice(destination.index, 0, start.list[source.index]);

      // Then create a new copy of the column object
      const newCol = {
        id: start.id,
        list: newList
      };

      // Update the state
      setColumns((state) => ({ ...state, [newCol.id]: newCol }));
      return null;

    } else {

      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);

      // Create a new start column
      const newStartCol = {
        id: start.id,
        list: newStartList
      };

      // Make a new end list array
      const newEndList = end.list;

      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);

      // Create a new end column
      const newEndCol = {
        id: end.id,
        list: newEndList
      };

      // Update the state
      setColumns((state) => ({
        ...state,
        [newStartCol.id]: newStartCol,
        [newEndCol.id]: newEndCol
      }));
      return null;
    }
  };

  const addItem = async ({title, description, column}) => {
    let idHigher = 0;
    Object.values(columns).map((item)=>{
      item.list.map((item2)=>{
        if(Number(item2.id) >= idHigher){
          idHigher = Number(item2.id)+1;
        }
      });
    }) 
    column.list.unshift({id:String(idHigher), text: title, description})
    const newEndCol = {
      id: column.id,
      list: column.list
    };
    setColumns((state) => ({
      ...state,
      [newEndCol.id]: newEndCol
    }));
    return null;
  } 

  return (
    <DragDropContext onDragEnd={onDragEnd} key={'prueba'}>
      <Grid container direction={"row"} justify={"center"} key={'prueba-container'}>
        {Object.values(columns).map((column) => {
          return (
            <Grid 
               item 
               xs={12} 
               sm={4} 
               md={4} 
               className={classes.container}
               key={`${column.id}-grid`}
            >
              <NewBtnItem addItem={addItem} column={column}  key={`${column.id}-btn`}/>
              <Column 
                 column={column} 
                 key={column.id} 
              />
            </Grid>
          );
        })}
      </Grid>
    </DragDropContext>
  );
};

export default Prueba;

const initialColumns = {
  todo: {
    id: "todo",
    list: [
        { 
           id: "1", 
           text: "text1",
           description: " — I'll be in your neighborhood doing errands this… 1" 
        },
        {  
           id: "2", 
           text: "text2",
           description: " — I'll be in your neighborhood doing errands this… 2"  
        },
        { 
           id: "3", 
           text: "text3",
           description: " — I'll be in your neighborhood doing errands this… 3"  
        }
    ]
  },
  doing: {
    id: "doing",
    list: [
        { 
           id: "4", 
           text: "text4",
           description: " — I'll be in your neighborhood doing errands this… 4"  
        },
        { 
           id: "5", 
           text: "text5",
           description: " — I'll be in your neighborhood doing errands this… 5"  
        },
        { 
          id: "6", 
          text: "text6",
          description: " — I'll be in your neighborhood doing errands this… 6"  
        }
    ]
  },
  done: {
    id: "done",
    list: []
  }
};