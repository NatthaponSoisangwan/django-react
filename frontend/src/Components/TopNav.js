import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
}));

export default function TopNav() {
    const classes = useStyles();

    return (
        <div >
            <AppBar  className={classes.root}>
                <Toolbar variant="dense">
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit">
                        Cafe Mac Review
                    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
}