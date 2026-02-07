import React, { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import { makeStyles } from '../../styles/makeStyles';
import { DragDropContext, resetServerContext } from "@hello-pangea/dnd";
import Column from "./column";
import NewBtnItem from './newItem';
import initialColumns from './data';

const useStyles = makeStyles((theme) => ({
  container: {
    position: 'relative',
    margin: '20px 0px'
  }
}));

const Prueba = () => {
  const classes = useStyles();
  const [columns, setColumns] = useState(initialColumns);
  useEffect(() => {
    resetServerContext()
  }, [])

  const onDragEnd = ({ source, destination }) => {
    // Si el destino no se conoce o es el mismo que initial retona null;
    if ((destination === undefined || destination === null) ||
      source.droppableId === destination.droppableId &&
      destination.index === source.index) return null;

    // Set start and end variables
    const start = columns[source.droppableId];
    const end = columns[destination.droppableId];

    // pregunta si esta en la misma columna 
    if (start === end) {
      //creamos una nueva lista sin el index que viene
      const newList = start.list.filter((_, idx) => idx !== source.index);
      // agregamos el item en la posicion del array nuevo
      newList.splice(destination.index, 0, start.list[source.index]);
      // Then create a new copy of the column object
      updateColumn(newList, start.id)

    } else {
      // If start is different from end, we need to update multiple columns
      // Filter the start list like before
      const newStartList = start.list.filter((_, idx) => idx !== source.index);
      updateColumn(newStartList, start.id)
      // Make a new end list array
      const newEndList = end.list;
      // Insert the item into the end list
      newEndList.splice(destination.index, 0, start.list[source.index]);
      updateColumn(newEndList, end.id)
    }
    return null;
  };

  const addItem = async ({ title, description, column }) => {
    let idHigher = 0;
    //obtenemos un nuevo id para la fila que queremos crear
    Object.values(columns).map((item) => {
      item.list.map((item2) => {
        if (Number(item2.id) >= idHigher) {
          idHigher = Number(item2.id) + 1;
        }
      });
    });
    column.list.unshift({ id: String(idHigher), text: title, description })
    updateColumn(column.list, column.id)
    return null;
  }

  const updateColumn = (newList, id) => {
    const newCol = {
      id,
      list: newList
    };
    setColumns((state) => ({ ...state, [id]: newCol }));
  }

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Grid container direction={"row"} justify={"center"}>
        {Object.values(columns).map((column) => {
          return (
            <Grid
              item
              xs={12}
              md={4}
              className={classes.container}
              key={column.id}
            >
              <NewBtnItem addItem={addItem} column={column} key={`${column.id}-btn`} />
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