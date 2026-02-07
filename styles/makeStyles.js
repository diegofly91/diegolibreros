import { makeStyles as tssMakeStyles } from 'tss-react/mui';

// Compatible wrapper for MUI v4 makeStyles using tss-react
// This allows avoiding a rewrite of every component that uses the old hook pattern
export const makeStyles = (stylesOrCreator) => {
    // tss-react double-call pattern
    const useStyles = tssMakeStyles()((theme, _params, classes) => {
        const styles = typeof stylesOrCreator === 'function'
            ? stylesOrCreator(theme)
            : stylesOrCreator;
        return styles;
    });

    // Return a hook that mimics the MUI v4 hook (returning just classes)
    return (props) => {
        const { classes } = useStyles(props);
        return classes;
    };
};
