import React from 'react';
import { makeStyles } from '../../styles/makeStyles';
import clsx from 'clsx';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
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

export default function ItemCard(props) {
  const { title, url, date, position, functions, image } = props.data;  
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card className={classes.root}>
      <CardHeader
        title={title}
        action={
         <IconButton 
            justIcon 
            link  
            target='_blank'
            href={url}
        >
            <LanguageIcon />
        </IconButton>
        }
        subheader={`${date}`}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title={title}
      />
      <CardContent className={classes.container}>
        <Typography variant="h5" color="textSecondary" component="h4">
            {position}
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
        <CardContent pt="1">
          <Typography variant="h6" color="textPrimary" component="h5">
           Functions:
          </Typography>
          {functions?.map((item) => {
            return <Typography paragraph> - {item} </Typography>
          } )}
        </CardContent>
      </Collapse>
    </Card>
  );
}