import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles({
    root: {
        top: "auto",
        bottom: 0,
        position: "sticky",
    },
    appBar: {
        top: 'auto',
        bottom: 0,
    },
    grow: {
        flexGrow: 1,
    },
    fabButton: {
        position: 'absolute',
        zIndex: 1,
        top: -30,
        left: 0,
        right: 0,
        margin: '0 auto',
    },
});

export default function BottomNav() {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                {/*<Toolbar>*/}
                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <AddIcon />
                </Fab>
                <BottomNavigation
                    color="inherit"
                    value={value}
                    onChange={handleChange}
                    componenent
                >
                    <BottomNavigationAction
                        label="Review"
                        value="review"
                        icon={<HomeIcon />}

                    />
                    <BottomNavigationAction
                        label="Today Menu"
                        value="menu"
                        icon={<RestaurantMenuIcon />}
                    />
                </BottomNavigation>
            </AppBar>
        </React.Fragment>
    );
}



