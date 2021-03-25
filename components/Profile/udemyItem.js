import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

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

export default function UdemyItem() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={"/udemy.jpeg"}
        title="Udemy"
      />
      <CardContent className={classes.container}>
        <Typography variant="h5" color="textSecondary" component="h4">
            Plataforma virtual
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
             Formación:
          </Typography>
          <List component="nav" aria-label="secondary mailbox folder">
            <ListItem 
                button 
                component="a"
                target='_blanck'
                href="https://www.udemy.com/course/crea-sistemas-ecommerce-con-php-y-con-pagos-de-paypal-y-payulatam/learn/lecture/8133486?start=0#overview"
            >
                <ListItemText primary="Crea sistemas Ecommerce con PHP 7 con pagos de PAYPAL y PAYU" />
            </ListItem>
            <ListItem 
                button 
                component="a"
                target='_blanck'
                href="https://www.udemy.com/course/curso-seo/learn/lecture/22895942#overview"
            >
                <ListItemText primary="Curso de SEO y Posicionamiento en Google" />
            </ListItem>
            <ListItem 
                button 
                component="a"
                target='_blanck'
                href="https://www.udemy.com/course/crear-modulos-para-prestashop/learn/lecture/8788650?start=0#overview"
            >
                <ListItemText primary="Desarrollo de Módulos para Prestashop" />
            </ListItem>
            <ListItem 
                button 
                component="a"
                target='_blanck'
                href="https://www.udemy.com/course/angular-2-fernando-herrera/learn/lecture/6367492#overview"
            >
                <ListItemText primary="Angular: De cero a experto (Legacy)" />
            </ListItem>
            <ListItem 
                button 
                component="a"
                target='_blanck'
                href="https://www.udemy.com/course/fullstack-react-graphql-y-apollo-de-principiante-a-experto/learn/lecture/19098334#overview"
            >
                <ListItemText primary="React Avanzado: Fullstack Next.js, Apollo, MongoDB y GraphQL" />
            </ListItem>
            <ListItem 
                button 
                component="a"
                target='_blanck'
                href="https://www.udemy.com/course/nestjs-free/"
            >
                <ListItemText primary="NestJS: Node + Typescript al estilo Angular para crear APIS" />
            </ListItem>
          </List>
        </CardContent>
      </Collapse>
    </Card>
  );
}