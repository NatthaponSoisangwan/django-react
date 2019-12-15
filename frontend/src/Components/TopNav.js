import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar';
import logo from "./logo.png";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    offset: {
        ...theme.mixins.toolbar,
        flexGrow: 1
      }
}));

export default function TopNav() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.root}>
                <Toolbar variant="dense">
                    <Avatar variant="square" className={classes.square} style={{ borderRadius: 0 }} alt="Logo" src={logo}/>
                    <Typography variant="h6" color="inherit">
                        &nbsp;Cafe Mac Review
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}