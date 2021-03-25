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

export default function BairesServiciosItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title="bairesservicios.net"
        subheader="julio 2019 - julio 2020"
      />
      <CardMedia
        className={classes.media}
        image={"/bairesservicios.png"}
        title="Baireservicios"
      />
      <CardContent className={classes.container}>
        <Typography variant="h5" color="textSecondary" component="h4">
            Dev. Junior - Dev. Ssr
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
            - Maquetación de Tiendas Online en Prestashop "PHP 5.4, 7.0, 7.2".
          </Typography>
          <Typography paragraph className={classes.text}>
            - Actualizacion y soporte de Modulos para Prestahop.
          </Typography>
          <Typography paragraph className={classes.text}>
            - Desarrollo de Modulos para prestahop, como integración a APIS de terceros.
          </Typography>
          <Typography paragraph className={classes.text}>
            - Metodologia SCRUM la mas utilizada, sobre requerimientos del cliente, 
              diseñaba y desarrollaba para esta plataforma.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
}