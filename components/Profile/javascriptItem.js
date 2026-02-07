import React from 'react';
import { ImageList, ImageListItem, useTheme } from '@mui/material';
import Image from 'next/image';
import tileData from './tileData';

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 * const tileData = [
 *   {
 *     img: image,
 *     title: 'Image',
 *     author: 'author',
 *     cols: 2,
 *   },
 *   {
 *     [etc...]
 *   },
 * ];
 */
export default function ImageGridList() {
  const theme = useTheme();
  // matchDownSm logic could be used if we want responsive cols, but original code had fixed cols={3}
  // We'll keep cols={3} as per original intent but ensure it's responsive if needed.
  // Actually original had cols={3} on list and tile.cols on items.

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper,
    }}>
      <ImageList rowHeight={160} cols={3} sx={{ width: 500, height: 450 }}>
        {tileData.map((tile) => (
          <ImageListItem key={tile.img} cols={tile.cols || 1}>
            <div style={{ position: 'relative', width: '100%', height: '100%' }}>
              <Image
                src={`/${tile.img}`}
                alt={tile.title}
                fill
                sizes="33vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </ImageListItem>
        ))}
      </ImageList>
    </div>
  );
}