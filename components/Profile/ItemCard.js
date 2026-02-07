import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LanguageIcon from '@mui/icons-material/Language';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Image from 'next/image';


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ItemCard(props) {
  const { title, url, date, position, functions, image } = props.data;
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, width: '100%', m: '10px' }}>
      <CardHeader
        title={title}
        action={
          <IconButton
            href={url}
            target='_blank'
            LinkComponent={'a'} // Mui v6 IconButton compatible props
          >
            <LanguageIcon />
          </IconButton>
        }
        subheader={`${date}`}
      />
      <Box sx={{ position: 'relative', width: '100%', pt: '56.25%' /* 16:9 */ }}>
        <Image
          src={image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          style={{ objectFit: 'contain' }}
        />
      </Box>
      <CardContent sx={{ position: 'relative' }}>
        <Typography variant="h5" color="textSecondary" component="h4">
          {position}
        </Typography>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
          sx={{ position: 'absolute', top: 10, right: -7 }}
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardContent>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6" color="textPrimary" component="h5">
            Functions:
          </Typography>
          {functions?.map((item, index) => {
            return <Typography key={index} paragraph> - {item} </Typography>
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
}