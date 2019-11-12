import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
// import Fab from '@material-ui/core/Fab';
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
    const [value, setValue] = React.useState("summary");

    // componentDidMount() {
    //     setValue("summary");
    // }

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
            
                <Review fabButton={classes.fabButton}/>

                <BottomNavigation
                    color="inherit"
                    value={value}
                    onChange={handleChange}
                    component={Link}
                >

                    <BottomNavigationAction
                        label="Summary"
                        value="summary"
                        onClick={() => handleNextPath('/summary')}
                        icon={<HomeIcon />}
                    />

                    <BottomNavigationAction
                        label="All Reviews"
                        value="review"
                        onClick={() => handleNextPath('/review')}
                        icon={<RestaurantMenuIcon />}
                    />
                </BottomNavigation>
            </AppBar>
        </React.Fragment>
    );
}



