import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Fab from '@material-ui/core/Fab';
import { Link, useHistory } from "react-router-dom";
import Review from "./AddReviewModal";

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
        console.log(newValue);
    };
    /* For changing path when button is clicked causing different Content to be rendered */
    const History = useHistory();
    const handleNextPath = (path) => {
        History.push(path);
    }
    return (
        <React.Fragment>
            <CssBaseline />
            <AppBar position="fixed" color="primary" className={classes.appBar}>
                {/*<Toolbar>*/}

                <Fab color="secondary" aria-label="add" className={classes.fabButton}>
                    <Review />
                </Fab>
                <BottomNavigation
                    color="inherit"
                    value={value}
                    onChange={handleChange}
                    component={Link}
                >

                    <BottomNavigationAction
                        label="Review"
                        value="review"
                        onClick={() => handleNextPath('/review')}
                        icon={<HomeIcon />}
                    />

                    <BottomNavigationAction
                        label="Today Menu"
                        value="menu"
                        onClick={() => handleNextPath('/menu')}
                        icon={<RestaurantMenuIcon />}
                    />
                </BottomNavigation>
            </AppBar>
        </React.Fragment>
    );
}



