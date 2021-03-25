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
    backgroundColor: 'rgba(6,82,221,1)',
    padding: 10,
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
  text:{
    fontSize: 15,  
    textAlign: 'left',
    textAlignLast: 'center'
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
}));

export default function ColpegasusItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="web.colpegasus.com"
        subheader="abril - noviembre 2018"
      />
      <CardMedia
        className={classes.media}
        image="colpegasussofw.png"
        title="Ingelmec"
      />
      <CardContent className={classes.container}>
        <Typography variant="h5" color="textSecondary" component="h4">
            Dev. Full Stack
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
             Funciones:
          </Typography>
          <Typography paragraph className={classes.text}>
            - Desarrollo de extenciones para Google, para uso interno "control de soporte colegios".
          </Typography>
          <Typography paragraph className={classes.text}>
            - Actualización CRM de empresas de version en Flash a 
            PHP 7.0 PDO, HTML5, CSS3, Handlebars, DataTable, Mysql, entre mas otras tecnologias.
          </Typography>
          <Typography paragraph className={classes.text}>
            - Soporte y desarrollo de modulos de la Plataforma virtual de colegios.
              PHP 5.4, JQuery, Handelbars, Datatable, FullCalendar, Mysql.
          </Typography>
          <Typography paragraph className={classes.text}>
            - Desarrollo de web ayuda.colpegasus.com, para los usuarios de la 
              plataforma virtual, Angular 6, Fetch API.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}