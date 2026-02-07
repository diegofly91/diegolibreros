import React from 'react';
import { makeStyles } from '../../styles/makeStyles';
import { ImageListItemBar, ImageListItem, ImageList, IconButton } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
// import tileData from './tileData';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    width: '100%'
  },
  containerMobile: {
    [theme.breakpoints.down('sm')]: {
      width: '100% !important',
    },
    width: '33% !important',
  },
  gridList: {
    // width: 500,
    // height:450
  },
  title: {
    width: '100%'
  },
  img: {
    width: 'auto',
    height: '60%',
    left: 'inherit',
    transform: 'inherit',
    position: 'relative',
    top: 'inherit'
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

export default function ImageGridList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <ImageList rowHeight={180} className={classes.gridList}>
        {tileData.map((tile) => (
          <ImageListItem key={tile.img} classes={{ item: classes.container, root: classes.containerMobile }}>
            <img src={tile.img} alt={tile.title} className={classes.img} />
            <ImageListItemBar
              title={tile.title}
              // subtitle={<span>by: {tile.author}</span>}
              className={classes.title}
            // actionIcon={
            //   <IconButton aria-label={`info about ${tile.title}`} className={classes.icon}>
            //     <InfoIcon />
            //   </IconButton>
            // }
            />
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}

const tileData = [
  {
    img: 'aws.png',
    title: 'AWS',
    author: 'author',
    cols: 8,
  },
  {
    img: 'azure.png',
    title: 'AZURE',
    author: 'author',
    cols: 8,
  },
  {
    img: 'node.png',
    title: 'NODE',
    author: 'author',
    cols: 8,
  },
  {
    img: 'nestjs.png',
    title: 'Nest js',
    author: 'author',
    cols: 4,
  },
  {
    img: 'nextjs.png',
    title: 'Next js',
    author: 'author',
    cols: 4,
  },
  {
    img: 'sql.png',
    title: 'SQL',
    author: 'author',
    cols: 4,
  },
  {
    img: 'react.png',
    title: 'React && React Native',
    author: 'author',
    cols: 4,
  },
  {
    img: 'angular.png',
    title: 'Angular',
    author: 'author',
    cols: 6,
  },
  {
    img: 'jwt.png',
    title: 'JWT',
    author: 'author',
    cols: 6,
  },
  {
    img: 'php.png',
    title: 'PHP 5.4, 7.0 ...',
    author: 'author',
    cols: 6,
  },
  {
    img: 'typescript.png',
    title: 'TypeScript',
    author: 'author',
    cols: 6,
  },
  {
    img: 'graphql.png',
    title: 'Graphql',
    author: 'author',
    cols: 8,
  }
];