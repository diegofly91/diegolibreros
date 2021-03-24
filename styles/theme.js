import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// Create a theme instance.
const theme = createMuiTheme({
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
