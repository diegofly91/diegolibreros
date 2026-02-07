import React from 'react';
import { makeStyles } from '../../styles/makeStyles';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import CardHeader from '@mui/material/CardHeader';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';


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

export default function UTNItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="Universidad Tecnológica Nacional"
        subheader="2019"
      />  
      <CardMedia
        className={classes.media}
        image="UTN.png"
        title="Udemy"
      />
      <CardContent className={classes.container}>
        <Typography variant="h5" color="textSecondary" component="h4">
           Dev. Full Stack UTN
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
            <Typography>
            El curso está pensado para aquellas personas que ya hayan realizado 
            previamente el curso de Professional Webmaster, 
            o el de Programador Web Inicial – Front-end Developer, 
            o que ya posea los requisitos previos adquiridos en otras capacitaciones 
            previas o como experiencia en el campo laboral y 
            precise actualizarse para cargos Señor en programación web.
            </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}