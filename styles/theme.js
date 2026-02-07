import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            main: '#081E1A',
        },
        secondary: {
            main: '#1ed760',
        },
        background: {
            default: '#fff',
        },
    },
});

export default theme;
