import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    width: '100%',
    margin: 10
  },
  container:{
      position: 'relative'
  },
  media: {
    height: 0,
    backgroundSize: 'contain',
    paddingTop: '56.25%', // 16:9
  },
  title2: {
    paddingVertical: 10
  },
  expand: {
    position: 'absolute',
    top: 10, 
    right: -7, 
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export default function UnillanosItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Universidad de los Llanos"
        subheader="2010 - 2013"
      />
      <CardMedia
        className={classes.media}
        image="/unillanos.png"
        title="Paella dish"
      />
      <CardContent className={classes.container}>
        <Typography variant="h5" color="textSecondary" component="h4">
        Ing. de Sistemas 
        <br/>6to Semestre
        </Typography>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="h5">
             Contenidos principales del plan de estudios:
          </Typography>
          <Typography>
            Computadores y programación.
          </Typography>
          <Typography>
            Estructura de datos y algoritmos.
          </Typography>
          <Typography>
            Sistemas operativos.
          </Typography>
          <Typography>
            Bases de datos.
          </Typography>
          <Typography>
            Administración de sistemas.
          </Typography>
          <Typography>
            Capacidad de trabajo en equipo.
            Resolutivo.
            Gran capacidad de aprendizaje.
          </Typography>
          <Typography>
             Inglés: B2
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}