import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Avatar from '@material-ui/core/Avatar';
import logo from "./logo.png";

const useStyles = makeStyles(theme => ({
    root: {
        position: "fixed",
        custom_color_1: "#fff7e3",
        custom_color_2: "#ffe69c",
        custom_color_3: "#ffd455",
        custom_color_4: "#ffc518",
        custom_color_5: "#ff9700"
    },
    menuButton: {
        marginRight: theme.spacing(2),
        custom_color_1: "#fff7e3",
        custom_color_2: "#ffe69c",
        custom_color_3: "#ffd455",
        custom_color_4: "#ffc518",
        custom_color_5: "#ff9700"
    },
    offset: {
        ...theme.mixins.toolbar,
        custom_color_1: "#fff7e3",
        custom_color_2: "#ffe69c",
        custom_color_3: "#ffd455",
        custom_color_4: "#ffc518",
        custom_color_5: "#ff9700",
        flexGrow: 1
      },
    custom_color_1: "#fff7e3",
    custom_color_2: "#ffe69c",
    custom_color_3: "#ffd455",
    custom_color_4: "#ffc518",
    custom_color_5: "#ff9700",
}));

export default function TopNav() {
    const classes = useStyles();

    return (
        <div>
            <AppBar position="fixed" className={classes.root} color="custom_color_3">
                <Toolbar
                    variant="dense"
                    color="#ffd455">
                    {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton> */}
                    <Avatar variant="square" className={classes.square} style={{ borderRadius: 0 }} alt="Logo" src={logo}/>
                    <Typography variant="h6" color="#ff9700">
                        &nbsp;     F E E D Z
                    </Typography>
                </Toolbar>
            </AppBar>
            <Toolbar />
        </div>
    );
}
