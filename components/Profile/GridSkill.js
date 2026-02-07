// import React from 'react'; // React 19 doesn't need explicit React import for JSX but keeping it is fine
import React from 'react';
import { ImageListItemBar, ImageListItem, ImageList, IconButton, useTheme, useMediaQuery } from '@mui/material';
import Image from 'next/image';
import InfoIcon from '@mui/icons-material/Info';
// import tileData from './tileData';


export default function ImageGridList() {
  const theme = useTheme();
  const matchDownSm = useMediaQuery(theme.breakpoints.down('sm'));
  const cols = matchDownSm ? 1 : 3;

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    }}>
      <ImageList rowHeight={180} cols={cols} sx={{ width: '100%', m: 0 }}>
        {tileData.map((tile) => (
          <ImageListItem key={tile.img} sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100% !important',
          }}>
            <div style={{ position: 'relative', width: '100%', height: '80%', display: 'flex', justifyContent: 'center' }}>
              <Image
                src={`/${tile.img}`}
                alt={tile.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 33vw"
                style={{ objectFit: 'contain' }}
              />
            </div>
            <ImageListItemBar
              title={tile.title}
              position="below"
              sx={{
                textAlign: 'center',
                '& .MuiImageListItemBar-title': { fontSize: '1rem', fontWeight: 'bold' }
              }}
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