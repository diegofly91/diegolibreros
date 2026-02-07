import React, { useContext, useEffect, useState } from 'react';
import { makeStyles } from '../../styles/makeStyles';
import {
    Button,
    IconButton,
    TextField,
    Dialog,
    Tooltip,
    FormControl,
    DialogActions,
    DialogContent,
    DialogTitle,
} from '@mui/material/';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const useStyles = makeStyles((theme) => ({
    textField: {
        width: '100%',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    textFieldArea: {
        width: '100%',
        minHeight: '100px!important',
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    button: {
        padding: '10px 10px',
        textTransform: 'capitalize',
        marginTop: 0,
        marginBottom: 0,
        border: 'none',
        zIndex: 11,
        color: 'white',
        width: 150,
    },
    icon: {
        marginRight: 10,
    },
    close: {
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 2
    },
    contButton: {
        flexDirection: 'column',
        justifyContent:'flex-end',
        alignItems: 'flex-end'
    },
    btnPlus:{
        position: 'absolute',
        right: 15,
        color: '#000',
        top: 15
    },
}));

export default function NewBtnItem({column, addItem}) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const title = useInputValue('');
    const description = useInputValue('');

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

  return<div>
            <IconButton 
                aria-label="delete" 
                onClick={handleClickOpen}
                className={classes.btnPlus} 
                size="small"
            >
                 <Tooltip title="Agregar Item" placement="top">
                        <AddCircleOutlineIcon fontSize="default" />
                 </Tooltip>
            </IconButton>
            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    <IconButton 
                        className={classes.close} 
                        color="primary" 
                        aria-label="upload picture" 
                        component="span"
                        onClick={handleClose}
                    >
                        <HighlightOffIcon />
                    </IconButton>
                    <FormControl 
                        onKeyPress={(e)=>{
                                // e.key === 'Enter' && onFormSubmit();
                        }}>
                        <DialogTitle id="form-dialog-title">Agregar Item</DialogTitle>
                        <DialogContent>
                            <TextField
                                size="medium"
                                autoFocus={true}
                                required={true}
                                margin="normal"
                                id="title"
                                label="Titulo"
                                {...title}
                                variant="outlined"
                                className={classes.textField}
                            />
                            <TextField
                                size="medium"
                                required={true}
                                id="description"
                                label="Discripción"
                                multiline
                                rows={4}
                                fullWidth
                                {...description}
                                variant="outlined"
                                className={classes.textFieldArea}
                            />
                            <DialogActions>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    disabled={(title.defaultValue)?false:true}
                                    className={classes.button}
                                    onClick={()=>{
                                        handleClose()
                                        addItem({
                                            title: title.defaultValue,
                                            description: description.defaultValue,
                                            column
                                        })
                                    }}
                                >
                                    Agregar
                                </Button>
                            </DialogActions>
                        </DialogContent>
                    </FormControl>
            </Dialog>
        </div> 
}  

const useInputValue = initialValue => {
    const [defaultValue,setValue] = useState(initialValue);
    const onChange = e => {
        e.target.getAttribute("type") == "number" && e.target.value !== "" ? 
                                                                       setValue(Number(e.target.value)) : 
                                                                       setValue(e.target.value);
    }
    return {defaultValue, onChange}
}