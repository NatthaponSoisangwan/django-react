import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import HomeIcon from "@material-ui/icons/Home";
import FavoriteIcon from "@material-ui/icons/Favorite";
import RestaurantMenuIcon from "@material-ui/icons/RestaurantMenu";
import { Link } from "react-router-dom"
const useStyles = makeStyles({
    root: {
        top: "auto",
        bottom: 0,
        position: "sticky",
        flexGrow: 0,
    }
});

export default function BottomNav(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState("recents");

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <BottomNavigation
            color="primary"
            value={value}
            onChange={handleChange}
            className={classes.root}
            component={Link}
            to={'/:value'}
        >

            <BottomNavigationAction
                label="Review"
                value="review"
                component
                icon={<HomeIcon />}

            />

            <BottomNavigationAction
                label="Favorites"
                value="favorites"
                icon={<FavoriteIcon />}

            />

            <BottomNavigationAction
                label="Today Menu"
                value="todayMenu"
                icon={<RestaurantMenuIcon />}
            />

        </BottomNavigation>
    );
}



